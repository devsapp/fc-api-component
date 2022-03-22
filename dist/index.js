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
    Component.prototype.getClient = function (region, access, version) {
        if (version === void 0) { version = 20210406; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, AccountID, AccessKeyID, AccessKeySecret, SecurityToken, config;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, core_1.getCredential)(access)];
                    case 1:
                        _a = (_b.sent()), AccountID = _a.AccountID, AccessKeyID = _a.AccessKeyID, AccessKeySecret = _a.AccessKeySecret, SecurityToken = _a.SecurityToken;
                        if (version == 20160815) {
                            return [2 /*return*/, new fc2_1.default(AccountID, {
                                    accessKeyID: AccessKeyID,
                                    accessKeySecret: AccessKeySecret,
                                    securityToken: SecurityToken,
                                    region: region || 'cn-hangzhou',
                                    timeout: 6000000
                                })];
                        }
                        else if (version == 20210406) {
                            config = new $OpenApi.Config({
                                accessKeyId: AccessKeyID,
                                accessKeySecret: AccessKeySecret,
                                securityToken: SecurityToken,
                            });
                            config.endpoint = "".concat(AccountID, ".").concat(region, ".fc.aliyuncs.com");
                            return [2 /*return*/, new fc_open20210406_1.default(config)];
                        }
                        return [2 /*return*/];
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
                        console.log(inputs);
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
                                    tempOptions.optionList.push({
                                        name: eveArea,
                                        description: "[JsonString] Parameter details refer to [Detail: --".concat(eveArea, "]"),
                                        type: String,
                                    });
                                    for (eveParameter in tempApiContent['parameter'][eveArea]) {
                                        tempParamter.push({
                                            name: eveParameter,
                                            summary: "<".concat(tempApiContent['parameter'][eveArea][eveParameter].type, "> [").concat(tempApiContent['parameter'][eveArea][eveParameter].required ? "Required" : "Optional", "] ").concat(tempApiContent['parameter'][eveArea][eveParameter].description),
                                        });
                                    }
                                    tempOptionsContent.push({
                                        header: "Detail: --".concat(eveArea),
                                        content: tempParamter
                                    });
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
                        return [4 /*yield*/, this.getClient(this.requestRegion, this.inputs.project.access, 20210406)];
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
                            bodyType: "json",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNEQUE4QjtBQUM5Qiw4Q0FBc0Y7QUFDdEYsOEVBQXdEO0FBQ3hELGlFQUFxRDtBQUNyRCx3REFBNEM7QUFDNUMsMENBQW1CO0FBQ25CLDhDQUF1QjtBQUV2QjtJQVlJO0lBQ0EsQ0FBQztJQUVhLDZCQUFTLEdBQXZCLFVBQXdCLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBa0I7UUFBbEIsd0JBQUEsRUFBQSxrQkFBa0I7Ozs7OzRCQUNZLHFCQUFNLElBQUEsb0JBQWEsRUFBQyxNQUFNLENBQUMsRUFBQTs7d0JBQXZGLEtBQTJELENBQUMsU0FBMkIsQ0FBUSxFQUE5RixTQUFTLGVBQUEsRUFBRSxXQUFXLGlCQUFBLEVBQUUsZUFBZSxxQkFBQSxFQUFFLGFBQWEsbUJBQUE7d0JBQzdELElBQUksT0FBTyxJQUFJLFFBQVEsRUFBRTs0QkFDckIsc0JBQU8sSUFBSSxhQUFFLENBQUMsU0FBUyxFQUFFO29DQUNyQixXQUFXLEVBQUUsV0FBVztvQ0FDeEIsZUFBZSxFQUFFLGVBQWU7b0NBQ2hDLGFBQWEsRUFBRSxhQUFhO29DQUM1QixNQUFNLEVBQUUsTUFBTSxJQUFJLGFBQWE7b0NBQy9CLE9BQU8sRUFBRSxPQUFPO2lDQUNuQixDQUFDLEVBQUE7eUJBQ0w7NkJBQU0sSUFBSSxPQUFPLElBQUksUUFBUSxFQUFFOzRCQUN0QixNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO2dDQUMvQixXQUFXLEVBQUUsV0FBVztnQ0FDeEIsZUFBZSxFQUFFLGVBQWU7Z0NBQ2hDLGFBQWEsRUFBRSxhQUFhOzZCQUMvQixDQUFDLENBQUM7NEJBQ0gsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFHLFNBQVMsY0FBSSxN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