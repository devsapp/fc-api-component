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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
// @ts-ignore
var fc2_1 = __importDefault(require("@alicloud/fc2"));
// @ts-ignore
var core_1 = require("@serverless-devs/core");
// @ts-ignore
var fc_open20210406_1 = __importDefault(require("@alicloud/fc-open20210406"));
// @ts-ignore
var $OpenApi = __importStar(require("@alicloud/openapi-client"));
// @ts-ignore
var $Util = __importStar(require("@alicloud/tea-util"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.getClient = function (region, access, version, timeout) {
        if (version === void 0) { version = 20210406; }
        if (timeout === void 0) { timeout = 6000000; }
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
                            timeout: timeout
                        };
                        return [4 /*yield*/, fcCore.getEndpointFromFcDefault()];
                    case 3: return [2 /*return*/, new (_b.apply(fc2_1.default, _c.concat([(_e.endpoint = (_f.sent()) || "https://".concat(AccountID, ".").concat(region, ".fc.aliyuncs.com"),
                                _e.headers = { 'user-agent': 'serverless-devs2.0' },
                                _e)])))()];
                    case 4:
                        if (!(version == 20210406)) return [3 /*break*/, 6];
                        config = new $OpenApi.Config({
                            accessKeyId: AccessKeyID,
                            accessKeySecret: AccessKeySecret,
                            securityToken: SecurityToken,
                            readTimeout: timeout,
                            userAgent: 'serverless-devs2.0',
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
                        else if (version == '20210416' || version == 20210416 || version == '20210406' || version == 20210406) {
                            apiContentAttr = fs_1.default.readFileSync(path_1.default.join(__dirname, "20210416.json"));
                        }
                        else {
                            throw new Error(JSON.stringify({
                                message: 'API version information error.',
                                tips: 'API version value range: 20160815, 20210406',
                            }));
                        }
                        this.apiContent = JSON.parse(apiContentAttr);
                        if (!this.apiContent[this.comParse['data']['_'][0]]) {
                            this.comParse['data'].help = true;
                        }
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
                                            description: "[Required] Specify the fc region, value: cn-hangzhou/cn-beijing/cn-shanghai/cn-qingdao/cn-zhangjiakou/cn-huhehaote/cn-shenzhen/cn-chengdu/cn-hongkong/ap-southeast-1/ap-southeast-2/ap-southeast-3/ap-southeast-5/ap-northeast-1/eu-central-1/eu-west-1/us-west-1/us-east-1/ap-south-1\n* Set default region: [s cli fc-default set api-default-region <region>]",
                                            type: String,
                                        }, {
                                            name: 'access',
                                            alias: 'a',
                                            description: "[Optional] Specify key alias",
                                            type: String,
                                        }, {
                                            name: 'apiVersion',
                                            description: "[Optional] API version, value: 20210406, 20160815\n* Set default version: [s cli fc-default set api-default-version <version>]",
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
                                                description: '[Optional] API version, value: 20210406, 20160815\n* Set default version: [s cli fc-default set api-default-version <version>]',
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
                                if (String(version) == "20210416" || String(version) == "20210406") {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGFBQWE7QUFDYixzREFBOEI7QUFDOUIsYUFBYTtBQUNiLDhDQUF3RjtBQUN4RixhQUFhO0FBQ2IsOEVBQXdEO0FBQ3hELGFBQWE7QUFDYixpRUFBcUQ7QUFDckQsYUFBYTtBQUNiLHdEQUE0QztBQUM1QywwQ0FBbUI7QUFDbkIsOENBQXVCO0FBRXZCO0lBYUk7SUFDQSxDQUFDO0lBRWEsNkJBQVMsR0FBdkIsVUFBd0IsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFrQixFQUFFLE9BQWlCO1FBQXJDLHdCQUFBLEVBQUEsa0JBQWtCO1FBQUUsd0JBQUEsRUFBQSxpQkFBaUI7Ozs7Ozs0QkFDMUQscUJBQU0sSUFBQSxvQkFBYSxFQUFDLFNBQVMsQ0FBQyxFQUFBOzt3QkFBdkMsTUFBTSxHQUFHLFNBQThCO3dCQUN1QixxQkFBTSxJQUFBLG9CQUFhLEVBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUF6RixLQUE2RCxDQUFDLFNBQTJCLENBQVEsRUFBL0YsU0FBUyxlQUFBLEVBQUUsV0FBVyxpQkFBQSxFQUFFLGVBQWUscUJBQUEsRUFBRSxhQUFhLG1CQUFBOzZCQUMxRCxDQUFBLE9BQU8sSUFBSSxRQUFRLENBQUEsRUFBbkIsd0JBQW1COzZCQUNSLGFBQUU7c0NBQUMsU0FBUzs7NEJBQ25CLFdBQVcsRUFBRSxXQUFXOzRCQUN4QixlQUFlLEVBQUUsZUFBZTs0QkFDaEMsYUFBYSxFQUFFLGFBQWE7NEJBQzVCLE1BQU0sRUFBRSxNQUFNLElBQUksYUFBYTs0QkFDL0IsT0FBTyxTQUFBOzt3QkFDSSxxQkFBTSxNQUFNLENBQUMsd0JBQXdCLEVBQUUsRUFBQTs0QkFOdEQsc0JBQU8sY0FBSSxhQUFFLGNBTVQsV0FBUSxH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