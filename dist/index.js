"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fc2_1 = __importDefault(require("@alicloud/fc2"));
var core_1 = require("@serverless-devs/core");
var fc_open20210406_1 = __importDefault(require("@alicloud/fc-open20210406"));
var $OpenApi = __importStar(require("@alicloud/openapi-client"));
var $Util = __importStar(require("@alicloud/tea-util"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.getClient = function (region, access, version, timeout) {
        if (version === void 0) { version = 20210406; }
        if (timeout === void 0) { timeout = 3000; }
        return __awaiter(this, void 0, void 0, function () {
            var fcCore, _a, AccountID, AccessKeyID, AccessKeySecret, SecurityToken, _b, _c, config, _d;
            var _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, (0, core_1.loadComponent)('fc-core')];
                    case 1:
                        fcCore = _f.sent();
                        return [4 /*yield*/, (0, core_1.getCredential)(access)];
                    case 2:
                        _a = (_f.sent()), AccountID = _a.AccountID, AccessKeyID = _a.AccessKeyID, AccessKeySecret = _a.AccessKeySecret, SecurityToken = _a.SecurityToken;
                        if (!(version == 20160815)) return [3 /*break*/, 4];
                        _b = fc2_1.default.bind;
                        _c = [void 0, AccountID];
                        _e = {
                            accessKeyID: AccessKeyID,
                            accessKeySecret: AccessKeySecret,
                            securityToken: SecurityToken,
                            region: region || 'cn-hangzhou',
                            timeout: 6000000
                        };
                        return [4 /*yield*/, fcCore.getEndpointFromFcDefault()];
                    case 3: return [2 /*return*/, new (_b.apply(fc2_1.default, _c.concat([(_e.endpoint = (_f.sent()) || "https://".concat(AccountID, ".").concat(region, ".fc.aliyuncs.com"),
                                _e)])))()];
                    case 4:
                        if (!(version == 20210406)) return [3 /*break*/, 6];
                        config = new $OpenApi.Config({
                            accessKeyId: AccessKeyID,
                            accessKeySecret: AccessKeySecret,
                            securityToken: SecurityToken,
                            readTimeout: timeout
                        });
                        _d = config;
                        return [4 /*yield*/, fcCore.getEndpointFromFcDefault()];
                    case 5:
                        _d.endpoint = (_f.sent()) || "".concat(AccountID, ".").concat(region, ".fc.aliyuncs.com");
                        return [2 /*return*/, new fc_open20210406_1.default(config)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * demo fc api 默认指令
     * @param inputs
     * @returns
     */
    Component.prototype.index = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, apts, apiContentAttr, version, _b, tempContent, apiName, tempApiContent, tempOptions, tempOptionsContent, eveArea, tempParamter, eveParameter, eveApi, helpmsg;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.inputs = inputs;
                        _a = this;
                        return [4 /*yield*/, (0, core_1.loadComponent)('fc-default')];
                    case 1:
                        _a.fcDefault = _c.sent();
                        apts = {
                            boolean: ['help'],
                            alias: { help: 'h' },
                        };
                        // @ts-ignore
                        this.comParse = (0, core_1.commandParse)({ args: inputs.args, argsObj: inputs.argsObj }, apts);
                        _b = this.comParse['data']['apiVersion'];
                        if (_b) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fcDefault.get({ args: "api-default-version" })];
                    case 2:
                        _b = (_c.sent());
                        _c.label = 3;
                    case 3:
                        version = _b || '20160815';
                        if (version == '20160815' || version == 20160815) {
                            apiContentAttr = fs_1.default.readFileSync(path_1.default.join(__dirname, "20160815.json"));
                        }
                        else if (version == '20210416' || version == 20210416) {
                            apiContentAttr = fs_1.default.readFileSync(path_1.default.join(__dirname, "20210416.json"));
                        }
                        else {
                            throw new Error(JSON.stringify({
                                message: 'API version information error.',
                                tips: 'API version value range: 20160815, 20210416',
                            }));
                        }
                        this.apiContent = JSON.parse(apiContentAttr);
                        // @ts-ignore
                        if (this.comParse['data'] && this.comParse['data'].help) {
                            tempContent = [];
                            if (this.apiContent[this.comParse['data']['_'][0]]) {
                                apiName = this.comParse['data']['_'][0];
                                tempApiContent = this.apiContent[apiName];
                                tempContent.push({
                                    header: "api ".concat(apiName),
                                    content: "[API Version: ".concat(version, "]\n").concat(tempApiContent.description)
                                });
                                tempContent.push({
                                    header: 'Document',
                                    content: [{
                                            name: "中文",
                                            summary: tempApiContent.document.zh,
                                        }, {
                                            name: "English",
                                            summary: tempApiContent.document.en,
                                        }
                                    ]
                                });
                                tempOptions = {
                                    header: "Options",
                                    optionList: [{
                                            name: 'region',
                                            description: "[Required] Specify the fc region, value: cn-hangzhou/cn-beijing/cn-beijing/cn-hangzhou/cn-shanghai/cn-qingdao/cn-zhangjiakou/cn-huhehaote/cn-shenzhen/cn-chengdu/cn-hongkong/ap-southeast-1/ap-southeast-2/ap-southeast-3/ap-southeast-5/ap-northeast-1/eu-central-1/eu-west-1/us-west-1/us-east-1/ap-south-1\n* Set default region: [s cli fc-default set api-default-region <region>]",
                                            type: String,
                                        }, {
                                            name: 'access',
                                            alias: 'a',
                                            description: "[Optional] Specify key alias",
                                            type: String,
                                        }, {
                                            name: 'apiVersion',
                                            description: "[Optional] API version, value: 20210416, 20160815\n* Set default version: [s cli fc-default set api-default-version <version>]",
                                            type: String,
                                        }]
                                };
                                tempOptionsContent = [];
                                for (eveArea in tempApiContent['parameter']) {
                                    tempParamter = [];
                                    if (Object.keys(tempApiContent['parameter'][eveArea]).includes('required')) {
                                        tempOptions.optionList.push({
                                            name: eveArea,
                                            description: "[".concat(tempApiContent['parameter'][eveArea].required ? 'Required' : 'Optional', "] ").concat(tempApiContent['parameter'][eveArea].description),
                                            type: String,
                                        });
                                    }
                                    else {
                                        tempOptions.optionList.push({
                                            name: eveArea,
                                            description: "Parameter details refer to [Detail: --".concat(eveArea, "], format is JSON String"),
                                            type: String,
                                        });
                                        for (eveParameter in tempApiContent['parameter'][eveArea]) {
                                            tempParamter.push({
                                                name: eveParameter,
                                                summary: "<".concat(tempApiContent['parameter'][eveArea][eveParameter].type, "> [").concat(tempApiContent['parameter'][eveArea][eveParameter].required ? "Required" : "Optional", "] ").concat(tempApiContent['parameter'][eveArea][eveParameter].description),
                                            });
                                        }
                                    }
                                    if (tempParamter.length > 0) {
                                        tempOptionsContent.push({
                                            header: "Detail: --".concat(eveArea),
                                            content: tempParamter
                                        });
                                    }
                                }
                                tempContent.push(tempOptions);
                                tempContent = tempContent.concat(tempOptionsContent);
                                tempContent.push({
                                    header: 'Examples',
                                    content: "s cli fc api ".concat(apiName, " --path '{\"K1\": \"V1\"\\}' --body '{\"K2\": \"V2\"\\}'")
                                });
                                (0, core_1.help)(tempContent);
                                return [2 /*return*/];
                            }
                            else {
                                for (eveApi in this.apiContent) {
                                    tempContent.push({
                                        name: eveApi,
                                        summary: "".concat(this.apiContent[eveApi]['description'], ";"),
                                    });
                                }
                                helpmsg = [{
                                        header: 'Usage',
                                        content: "s cli fc api <api-name> <options>"
                                    }, {
                                        header: 'API List',
                                        content: tempContent,
                                    }, {
                                        header: 'Expansion',
                                        content: "s cli fc api --path /services --method GET"
                                    }, {
                                        header: "Expansion Options",
                                        optionList: [{
                                                name: 'path',
                                                description: ' [Optional] API path',
                                                type: String,
                                            }, {
                                                name: 'method',
                                                description: '[Optional] API request method',
                                                type: String,
                                            }, {
                                                name: 'apiVersion',
                                                description: '[Optional] API version, value: 20210416, 20160815\n* Set default version: [s cli fc-default set api-default-version <version>]',
                                                type: String,
                                            }]
                                    }, {
                                        header: 'Examples',
                                        content: [{
                                                name: "Get services by expansion",
                                                summary: "s cli fc api --path /services --method GET",
                                            }, {
                                                name: "Get services by API name",
                                                summary: "s cli fc api ListServices",
                                            }]
                                    },];
                                if (String(version) == "20210416") {
                                    helpmsg[3].optionList.push({
                                        name: 'action',
                                        description: "[Optional] The API name",
                                        type: String,
                                    });
                                }
                                (0, core_1.help)(helpmsg);
                                return [2 /*return*/];
                            }
                            return [2 /*return*/];
                        }
                        if (!(String(version) == "20160815")) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.v20160815()];
                    case 4: return [2 /*return*/, _c.sent()];
                    case 5: return [4 /*yield*/, this.v20210416()];
                    case 6: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    Component.prototype.getRequestData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var apiName, tempApiContent, pathAttr, evePath, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.apiContent[this.comParse['data']['_'][0]]) {
                            apiName = this.comParse['data']['_'][0];
                            tempApiContent = this.apiContent[apiName];
                            this.bodyType = tempApiContent.response;
                            this.requestMethod = tempApiContent.method;
                            this.requestPath = tempApiContent.path;
                            pathAttr = JSON.parse(this.comParse['data'].path || '{}');
                            if (!Object.keys(pathAttr).includes('qualifier')) {
                                pathAttr['qualifier'] = undefined;
                            }
                            for (evePath in pathAttr) {
                                while (this.requestPath.includes("{".concat(evePath, "}"))) {
                                    this.requestPath = this.requestPath.replace("{".concat(evePath, "}"), evePath == 'qualifier' ? (pathAttr[evePath] ? ".".concat(pathAttr[evePath]) : '') : pathAttr[evePath]);
                                }
                            }
                        }
                        else if (this.comParse['data'].path) {
                            this.requestMethod = this.comParse['data'].method || 'GET';
                            this.requestPath = this.comParse['data'].path;
                            if (!String(this.requestPath).startsWith("/")) {
                                throw new Error(JSON.stringify({
                                    message: 'The specified command cannot be found.',
                                    tips: 'Please refer to the help document of [-h/--help] command.',
                                }));
                            }
                        }
                        else {
                            throw new Error(JSON.stringify({
                                message: 'The specified command cannot be found.',
                                tips: 'Please refer to the help document of [-h/--help] command.',
                            }));
                        }
                        this.query = JSON.parse(this.comParse['data'].query || '{}');
                        this.headers = JSON.parse(this.comParse['data'].header || '{}');
                        try {
                            this.body = JSON.parse(this.comParse['data'].body || '{}');
                        }
                        catch (e) {
                            this.body = this.comParse['data'].body;
                        }
                        _a = this;
                        _b = this.comParse['data'].region;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.fcDefault.get({ args: "api-default-region" })];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        _a.requestRegion = _b || 'cn-hangzhou';
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * demo fc api 20160815 版本
     * @param inputs
     * @returns
     */
    Component.prototype.v20160815 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRequestData()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getClient(this.requestRegion, this.inputs.project.access, 20160815)];
                    case 2:
                        client = _a.sent();
                        return [4 /*yield*/, client.request(this.requestMethod, this.requestPath, this.query, this.body, this.headers)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * demo fc api 20210406 版本
     * @param inputs
     * @returns
     */
    Component.prototype.v20210416 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, req, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRequestData()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getClient(this.requestRegion, this.inputs.project.access, 20210406, this.comParse['data']['_'][0] == "InvokeFunction" ? 10000 : 3000)];
                    case 2:
                        client = _a.sent();
                        req = new $OpenApi.OpenApiRequest({
                            headers: this.headers,
                            body: this.body,
                            query: this.query
                        });
                        params = new $OpenApi.Params({
                            action: this.comParse['data']['_'][0] || this.comParse['data'].action,
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: this.requestPath,
                            method: this.requestMethod,
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: this.bodyType,
                        });
                        return [4 /*yield*/, client.callApi(params, req, new $Util.RuntimeOptions({}))];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Component;
}());
exports.default = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNEQUE4QjtBQUM5Qiw4Q0FBc0Y7QUFDdEYsOEVBQXdEO0FBQ3hELGlFQUFxRDtBQUNyRCx3REFBNEM7QUFDNUMsMENBQW1CO0FBQ25CLDhDQUF1QjtBQUV2QjtJQWFJO0lBQ0EsQ0FBQztJQUVhLDZCQUFTLEdBQXZCLFVBQXdCLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBa0IsRUFBRSxPQUFZO1FBQWhDLHdCQUFBLEVBQUEsa0JBQWtCO1FBQUUsd0JBQUEsRUFBQSxjQUFZOzs7Ozs7NEJBQ3JELHFCQUFNLElBQUEsb0JBQWEsRUFBQyxTQUFTLENBQUMsRUFBQTs7d0JBQXZDLE1BQU0sR0FBRyxTQUE4Qjt3QkFDcUIscUJBQU0sSUFBQSxvQkFBYSxFQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBdkYsS0FBMkQsQ0FBQyxTQUEyQixDQUFRLEVBQTlGLFNBQVMsZUFBQSxFQUFFLFdBQVcsaUJBQUEsRUFBRSxlQUFlLHFCQUFBLEVBQUUsYUFBYSxtQkFBQTs2QkFDekQsQ0FBQSxPQUFPLElBQUksUUFBUSxDQUFBLEVBQW5CLHdCQUFtQjs2QkFDUixhQUFFO3NDQUFDLFNBQVM7OzRCQUNuQixXQUFXLEVBQUUsV0FBVzs0QkFDeEIsZUFBZSxFQUFFLGVBQWU7NEJBQ2hDLGFBQWEsRUFBRSxhQUFhOzRCQUM1QixNQUFNLEVBQUUsTUFBTSxJQUFJLGFBQWE7NEJBQy9CLE9BQU8sRUFBRSxPQUFPOzt3QkFDTCxxQkFBTSxNQUFNLENBQUMsd0JBQXdCLEVBQUUsRUFBQTs0QkFOdEQsc0JBQU8sY0FBSSxhQUFFLGNBTVQsV0FBUSxHQUFFLENBQUMsU0FBdUMsQ0FBQyxJQUFJLGtCQUFXLFNBQVMsY0FBSSxNQUFNLHFC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