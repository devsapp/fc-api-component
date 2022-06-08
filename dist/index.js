"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
                    case 0: return [4 /*yield*/, core_1.loadComponent('fc-core')];
                    case 1:
                        fcCore = _f.sent();
                        return [4 /*yield*/, core_1.getCredential(access)];
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
                    case 3: return [2 /*return*/, new (_b.apply(fc2_1.default, _c.concat([(_e.endpoint = (_f.sent()) || "https://" + AccountID + "." + region + ".fc.aliyuncs.com",
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
                        _d.endpoint = (_f.sent()) || AccountID + "." + region + ".fc.aliyuncs.com";
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
                        return [4 /*yield*/, core_1.loadComponent('fc-default')];
                    case 1:
                        _a.fcDefault = _c.sent();
                        apts = {
                            boolean: ['help'],
                            alias: { help: 'h' },
                        };
                        // @ts-ignore
                        this.comParse = core_1.commandParse({ args: inputs.args, argsObj: inputs.argsObj }, apts);
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
                                    header: "api " + apiName,
                                    content: "[API Version: " + version + "]\n" + tempApiContent.description
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
                                            description: "[" + (tempApiContent['parameter'][eveArea].required ? 'Required' : 'Optional') + "] " + tempApiContent['parameter'][eveArea].description,
                                            type: String,
                                        });
                                    }
                                    else {
                                        tempOptions.optionList.push({
                                            name: eveArea,
                                            description: "Parameter details refer to [Detail: --" + eveArea + "], format is JSON String",
                                            type: String,
                                        });
                                        for (eveParameter in tempApiContent['parameter'][eveArea]) {
                                            tempParamter.push({
                                                name: eveParameter,
                                                summary: "<" + tempApiContent['parameter'][eveArea][eveParameter].type + "> [" + (tempApiContent['parameter'][eveArea][eveParameter].required ? "Required" : "Optional") + "] " + tempApiContent['parameter'][eveArea][eveParameter].description,
                                            });
                                        }
                                    }
                                    if (tempParamter.length > 0) {
                                        tempOptionsContent.push({
                                            header: "Detail: --" + eveArea,
                                            content: tempParamter
                                        });
                                    }
                                }
                                tempContent.push(tempOptions);
                                tempContent = tempContent.concat(tempOptionsContent);
                                tempContent.push({
                                    header: 'Examples',
                                    content: "s cli fc api " + apiName + " --path '{\"K1\": \"V1\"\\}' --body '{\"K2\": \"V2\"\\}'"
                                });
                                core_1.help(tempContent);
                                return [2 /*return*/];
                            }
                            else {
                                for (eveApi in this.apiContent) {
                                    tempContent.push({
                                        name: eveApi,
                                        summary: this.apiContent[eveApi]['description'] + ";",
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
                                core_1.help(helpmsg);
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
                                while (this.requestPath.includes("{" + evePath + "}")) {
                                    this.requestPath = this.requestPath.replace("{" + evePath + "}", evePath == 'qualifier' ? (pathAttr[evePath] ? "." + pathAttr[evePath] : '') : pathAttr[evePath]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsYUFBYTtBQUNiLHNEQUE4QjtBQUM5QixhQUFhO0FBQ2IsOENBQXdGO0FBQ3hGLGFBQWE7QUFDYiw4RUFBd0Q7QUFDeEQsYUFBYTtBQUNiLGlFQUFxRDtBQUNyRCxhQUFhO0FBQ2Isd0RBQTRDO0FBQzVDLDBDQUFtQjtBQUNuQiw4Q0FBdUI7QUFFdkI7SUFhSTtJQUNBLENBQUM7SUFFYSw2QkFBUyxHQUF2QixVQUF3QixNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQWtCLEVBQUUsT0FBaUI7UUFBckMsd0JBQUEsRUFBQSxrQkFBa0I7UUFBRSx3QkFBQSxFQUFBLGlCQUFpQjs7Ozs7OzRCQUMxRCxxQkFBTSxvQkFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFBOzt3QkFBdkMsTUFBTSxHQUFHLFNBQThCO3dCQUN1QixxQkFBTSxvQkFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBekYsS0FBNkQsQ0FBQyxTQUEyQixDQUFRLEVBQS9GLFNBQVMsZUFBQSxFQUFFLFdBQVcsaUJBQUEsRUFBRSxlQUFlLHFCQUFBLEVBQUUsYUFBYSxtQkFBQTs2QkFDMUQsQ0FBQSxPQUFPLElBQUksUUFBUSxDQUFBLEVBQW5CLHdCQUFtQjs2QkFDUixhQUFFO3NDQUFDLFNBQVM7OzRCQUNuQixXQUFXLEVBQUUsV0FBVzs0QkFDeEIsZUFBZSxFQUFFLGVBQWU7NEJBQ2hDLGFBQWEsRUFBRSxhQUFhOzRCQUM1QixNQUFNLEVBQUUsTUFBTSxJQUFJLGFBQWE7NEJBQy9CLE9BQU8sU0FBQTs7d0JBQ0kscUJBQU0sTUFBTSxDQUFDLHdCQUF3QixFQUFFLEVBQUE7NEJBTnRELHNCQUFPLGNBQUksYUFBRSxjQU1ULFdBQVEsR0FBRSxDQUFDLFNBQXVD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