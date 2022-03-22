'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var querystring = require('querystring');
var crypto = require('crypto');
var axios = require('axios');
var OSS = require('ali-oss');
var path = require('path');
var fs = require('fs');
var httpx = require('httpx');
var kitx = require('kitx');
var debug = require('debug')('lambda');
var pkg = require('../package.json');
var WebSocket = require('ws');
var Client = /** @class */ (function () {
    function Client(accountid, config) {
        if (!accountid) {
            throw new TypeError('"accountid" must be passed in');
        }
        this.accountid = accountid;
        if (!config) {
            throw new TypeError('"config" must be passed in');
        }
        var accessKeyID = config.accessKeyID;
        if (!accessKeyID) {
            throw new TypeError('"config.accessKeyID" must be passed in');
        }
        this.accessKeyID = accessKeyID;
        if (this.accessKeyID.startsWith('STS')) {
            this.securityToken = config.securityToken;
            if (!this.securityToken) {
                throw new TypeError('"config.securityToken" must be passed in for STS');
            }
        }
        var accessKeySecret = config.accessKeySecret;
        if (!accessKeySecret) {
            throw new TypeError('"config.accessKeySecret" must be passed in');
        }
        this.accessKeySecret = accessKeySecret;
        var region = config.region;
        if (!region) {
            throw new TypeError('"config.region" must be passed in');
        }
        var protocol = config.secure ? 'https' : 'http';
        var internal = config.internal ? '-internal' : '';
        this.endpoint =
            config.endpoint ||
                protocol + "://" + accountid + "." + region + internal + ".fc.aliyuncs.com";
        this.host = accountid + "." + region + internal + ".fc.aliyuncs.com";
        if (config.endpoint) {
            var url = new URL(config.endpoint);
            this.host = url.hostname;
        }
        this.version = '2016-08-15';
        this.timeout = Number.isFinite(config.timeout) ? config.timeout : 60000; // default is 60s
        this.headers = config.headers || {};
    }
    Client.prototype.buildHeaders = function () {
        var now = new Date();
        var headers = {
            accept: 'application/json',
            date: now.toUTCString(),
            host: this.host,
            'user-agent': "Node.js(" + process.version + ") OS(" + process.platform + "/" + process.arch + ") SDK(" + pkg.name + "@v" + pkg.version + ")",
            'x-fc-account-id': this.accountid
        };
        if (this.securityToken) {
            headers['x-fc-security-token'] = this.securityToken;
        }
        return headers;
    };
    Client.prototype.request = function (method, path, query, body, headers, opts) {
        if (headers === void 0) { headers = {}; }
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var url, postBody, buff, digest, md5, queriesToSign, signature, response, responseBody, contentType, code, requestid, errMsg, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.endpoint + "/" + this.version + path;
                        if (query && Object.keys(query).length > 0) {
                            url = url + "?" + querystring.stringify(query);
                        }
                        headers = Object.assign(this.buildHeaders(), this.headers, headers);
                        if (body) {
                            debug('request body: %s', body);
                            buff = null;
                            if (Buffer.isBuffer(body)) {
                                buff = body;
                                headers['content-type'] = 'application/octet-stream';
                            }
                            else if (typeof body === 'string') {
                                buff = Buffer.from(body, 'utf8');
                                headers['content-type'] = 'application/octet-stream';
                            }
                            else if ('function' === typeof body.pipe) {
                                buff = body;
                                headers['content-type'] = 'application/octet-stream';
                            }
                            else {
                                buff = Buffer.from(JSON.stringify(body), 'utf8');
                                headers['content-type'] = 'application/json';
                            }
                            if ('function' !== typeof body.pipe) {
                                digest = kitx.md5(buff, 'hex');
                                md5 = Buffer.from(digest, 'utf8').toString('base64');
                                headers['content-length'] = buff.length;
                                headers['content-md5'] = md5;
                            }
                            postBody = buff;
                        }
                        queriesToSign = null;
                        if (path.startsWith('/proxy/')) {
                            queriesToSign = query || {};
                        }
                        signature = Client.getSignature(this.accessKeyID, this.accessKeySecret, method, "/" + this.version + path, headers, queriesToSign);
                        headers['authorization'] = signature;
                        debug('request headers: %j', headers);
                        return [4 /*yield*/, httpx.request(url, {
                                method: method,
                                timeout: this.timeout,
                                headers: headers,
                                data: postBody
                            })];
                    case 1:
                        response = _a.sent();
                        debug('response status: %s', response.statusCode);
                        debug('response headers: %j', response.headers);
                        if (!(!opts['rawBuf'] || response.headers['x-fc-error-type'])) return [3 /*break*/, 3];
                        return [4 /*yield*/, httpx.read(response, 'utf8')];
                    case 2:
                        responseBody = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, httpx.read(response)];
                    case 4:
                        responseBody = _a.sent();
                        _a.label = 5;
                    case 5:
                        debug('response body: %s', responseBody);
                        contentType = response.headers['content-type'] || '';
                        if (contentType.startsWith('application/json')) {
                            // TODO: Need to add additional messages when an error is thrown
                            responseBody = JSON.parse(responseBody);
                        }
                        if (response.statusCode < 200 || response.statusCode >= 300) {
                            code = response.statusCode;
                            requestid = response.headers['x-fc-request-id'];
                            if (responseBody.ErrorMessage) {
                                errMsg = responseBody.ErrorMessage;
                            }
                            else {
                                errMsg = responseBody.errorMessage;
                            }
                            err = new Error(method + " " + path + " failed with " + code + ". requestid: " + requestid + ", message: " + errMsg + ".");
                            err.name = "FC" + responseBody.ErrorCode + "Error";
                            err.code = responseBody.ErrorCode;
                            throw err;
                        }
                        return [2 /*return*/, {
                                headers: response.headers,
                                data: responseBody
                            }];
                }
            });
        });
    };
    /*!
     * GET 请求
     *
     * @param {String} path 请求路径
     * @param {Object} query 请求中的 query 部分
     * @param {Object} headers 请求中的自定义 headers 部分
     * @return {Promise} 返回 Response
     */
    Client.prototype.get = function (path, query, headers) {
        return this.request('GET', path, query, null, headers);
    };
    /*!
     * POST 请求
     *
     * @param {String} path 请求路径
     * @param {Buffer|String|Object} body 请求中的 body 部分
     * @param {Object} headers 请求中的自定义 headers 部分
     * @param {Object} queries 请求中的自定义 queries 部分
     * @return {Promise} 返回 Response
     */
    Client.prototype.post = function (path, body, headers, queries, opts) {
        if (opts === void 0) { opts = {}; }
        return this.request('POST', path, queries, body, headers, opts);
    };
    /*!
     * PUT 请求
     *
     * @param {String} path 请求路径
     * @param {Buffer|String|Object} body 请求中的 body 部分
     * @param {Object} headers 请求中的自定义 headers 部分
     * @return {Promise} 返回 Response
     */
    Client.prototype.put = function (path, body, headers) {
        return this.request('PUT', path, null, body, headers);
    };
    /*!
     * DELETE 请求
     *
     * @param {String} path 请求路径
     * @param {Object} query 请求中的 query 部分
     * @param {Object} headers 请求中的自定义 headers 部分
     * @return {Promise} 返回 Response
     */
    Client.prototype.delete = function (path, query, headers) {
        return this.request('DELETE', path, query, null, headers);
    };
    /*!
     * WebSocket 请求
     *
     * @param {String} path 请求路径
     * @param {Object} query 请求中的 query 部分
     * @param {Object} headers 请求中的自定义 headers 部分
     * @return {Promise} 返回 WebSocket
     */
    Client.prototype.websocket = function (path, query, headers) {
        if (headers === void 0) { headers = {}; }
        // endpoint
        var url = this.endpoint.replace(/^http/, 'ws') + "/" + this.version + path;
        // query
        if (query && Object.keys(query).length > 0) {
            url = url + "?" + querystring.stringify(query);
        }
        // headers
        headers = Object.assign(this.buildHeaders(), this.headers, headers);
        var queriesToSign = null;
        if (path.startsWith('/proxy/')) {
            queriesToSign = query || {};
        }
        var signature = Client.getSignature(this.accessKeyID, this.accessKeySecret, 'GET', "/" + this.version + path, headers, queriesToSign);
        headers['authorization'] = signature;
        return new WebSocket(url, { headers: headers });
    };
    return Client;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmNfY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2ZjX2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDM0MsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6QixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6QyxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN2QyxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEM7SUFDSSxnQkFBWSxTQUFTLEVBQUUsTUFBTTtRQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osTUFBTSxJQUFJLFNBQVMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFM0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULE1BQU0sSUFBSSxTQUFTLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUNyRDtRQUVE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