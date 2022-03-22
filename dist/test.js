"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFcEndpoint = void 0;
var core_1 = require("@serverless-devs/core");
function extract(regex, endpoint) {
    var matchs = endpoint.match(regex);
    if (matchs) {
        return matchs[1];
    }
    return null;
}
function extractAccountId(endpoint) {
    return extract(/^https?:\/\/([^.]+)\..+$/, endpoint);
}
function extractRegion(endpoint) {
    return extract(/^https?:\/\/[^.]+\.([^.]+)\..+$/, endpoint);
}
function extractProtocol(endpoint) {
    var array = endpoint.split(':', 1);
    return array.length !== 0 ? array[0] : '';
}
function getFcEndpoint() {
    return __awaiter(this, void 0, void 0, function () {
        var fcDefault, fcEndpoint, enableFcEndpoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, core_1.loadComponent('devsapp/fc-default')];
                case 1:
                    fcDefault = _a.sent();
                    return [4 /*yield*/, fcDefault.get({ args: 'fc-endpoint' })];
                case 2:
                    fcEndpoint = _a.sent();
                    if (!fcEndpoint) {
                        return [2 /*return*/, undefined];
                    }
                    return [4 /*yield*/, fcDefault.get({ args: 'enable-fc-endpoint' })];
                case 3:
                    enableFcEndpoint = _a.sent();
                    if (!(enableFcEndpoint === true || enableFcEndpoint === 'true')) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, {
                            fcEndpoint: fcEndpoint,
                            accountId: extractAccountId(fcEndpoint),
                            region: extractRegion(fcEndpoint),
                            protocol: extractProtocol(fcEndpoint),
                        }];
            }
        });
    });
}
exports.getFcEndpoint = getFcEndpoint;
var FunctionCompute = /** @class */ (function (_super) {
    __extends(FunctionCompute, _super);
    function FunctionCompute(inputs) {
        var _this = _super.call(this) || this;
        _this.inputs = inputs;
        return _this;
    }
    FunctionCompute.prototype.getConfigFromFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var yamlData, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, yaml.load(fs.readFileSync(defaultConfigFileObject, 'utf8'))];
                    case 1:
                        yamlData = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        yamlData = { "region": "cn-hangzhou", "access": "default" };
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, yamlData];
                }
            });
        });
    };
    FunctionCompute.prototype.writeToFile = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConfigFromFile()];
                    case 1:
                        config = _a.sent();
                        config[key] = value;
                        return [4 /*yield*/, fs.writeFileSync(defaultConfigFileObject, yaml.dump(config))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * 设置阿里云函数计算的默认值
     * @param inputs
     * @returns
     */
    FunctionCompute.prototype.set = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var apts, comParse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reportComponent('fc-api', {
                            command: 'set',
                            uid: '',
                        });
                        apts = {
                            boolean: ['help'],
                            alias: { help: 'h' },
                        };
                        comParse = commandParse({ args: inputs.args, argsObj: inputs.argsObj }, apts);
                        // @ts-ignore
                        if (comParse.data && comParse.data.help) {
                            help([{
                                    header: 'Usage',
                                    content: "s cli fc-api set [type] [value]"
                                }, {
                                    header: 'Examples',
                                    content: [
                                        {
                                            desc: 'region',
                                            example: 'The region of fc endpoint.'
                                        },
                                        {
                                            desc: 'access',
                                            example: 'Specify the key name.'
                                        },
                                        {
                                            desc: 'serviceName',
                                            example: 'Specify the serviceName.'
                                        },
                                        {
                                            desc: 'functionName',
                                            example: 'Specify the functionName.'
                                        }
                                    ],
                                },]);
                            return [2 /*return*/];
                        }
                        if (!(comParse.data && comParse.data['_'].length > 0)) return [3 /*break*/, 8];
                        if (!(comParse.data['_'][0] == "region")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.writeToFile("region", comParse.data['_'][1])];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(comParse.data['_'][0] == "access")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.writeToFile("access", comParse.data['_'][1])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!(comParse.data['_'][0] == "functionName")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.writeToFile("functionName", comParse.data['_'][1])];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        if (!(comParse.data['_'][0] == "serviceName")) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.writeToFile("serviceName", comParse.data['_'][1])];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        if (!comParse.data.region) return [3 /*break*/, 10];
                        // @ts-ignore
                        return [4 /*yield*/, this.writeToFile("region", comParse.data.region)];
                    case 9:
                        // @ts-ignore
                        _a.sent();
                        _a.label = 10;
                    case 10:
                        if (!comParse.data.access) return [3 /*break*/, 12];
                        // @ts-ignore
                        return [4 /*yield*/, this.writeToFile("access", comParse.data.access)];
                    case 11:
                        // @ts-ignore
                        _a.sent();
                        _a.label = 12;
                    case 12:
                        if (!comParse.data.functionName) return [3 /*break*/, 14];
                        // @ts-ignore
                        return [4 /*yield*/, this.writeToFile("functionName", comParse.data.functionName)];
                    case 13:
                        // @ts-ignore
                        _a.sent();
                        _a.label = 14;
                    case 14:
                        if (!comParse.data.serviceName) return [3 /*break*/, 16];
                        // @ts-ignore
                        return [4 /*yield*/, this.writeToFile("serviceName", comParse.data.serviceName)];
                    case 15:
                        // @ts-ignore
                        _a.sent();
                        _a.label = 16;
                    case 16: return [4 /*yield*/, this.getConfigFromFile()];
                    case 17: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 获取所配置的阿里云函数计算默认值
     * @param inputs
     * @returns
     */
    FunctionCompute.prototype.get = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reportComponent('fc-api', {
                            command: 'get',
                            uid: '',
                        });
                        return [4 /*yield*/, this.getConfigFromFile()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FunctionCompute.prototype.getClient = function (region, access) {
        return __awaiter(this, void 0, void 0, function () {
            var defaultData, customEndpoint, _a, AccountID, AccessKeyID, AccessKeySecret, SecurityToken, uid;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.client) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.get({})];
                    case 1:
                        defaultData = _b.sent();
                        return [4 /*yield*/, getFcEndpoint()];
                    case 2:
                        customEndpoint = _b.sent();
                        // TODO: 自定义
                        if (!access) {
                            access = defaultData.access;
                            console.log("  \uD83D\uDD11 Using default access: " + access + ", If you want to change the default access for fc-api, you can [s cli fc-api set access Your-Access-Alias] to set default value.");
                        }
                        if (!(region || (customEndpoint === null || customEndpoint === void 0 ? void 0 : customEndpoint.region))) {
                            region = defaultData.region;
                            console.log("  \uD83C\uDF0D Using default region: " + region + ", If you want to change the default region for fc-api, you can [s cli fc-api set region FC-Region] to set default value.");
                        }
                        return [4 /*yield*/, getCredential(access)];
                    case 3:
                        _a = (_b.sent()), AccountID = _a.AccountID, AccessKeyID = _a.AccessKeyID, AccessKeySecret = _a.AccessKeySecret, SecurityToken = _a.SecurityToken;
                        uid = (customEndpoint === null || customEndpoint === void 0 ? void 0 : customEndpoint.accountId) || AccountID;
                        reportComponent('fc-api', { uid: uid, command: 's cli' });
                        this.client = new fc(uid, {
                            accessKeyID: AccessKeyID,
                            accessKeySecret: AccessKeySecret,
                            securityToken: SecurityToken,
                            region: (customEndpoint === null || customEndpoint === void 0 ? void 0 : customEndpoint.region) || region || 'cn-hangzhou',
                            timeout: 6000000,
                            endpoint: customEndpoint === null || customEndpoint === void 0 ? void 0 : customEndpoint.fcEndpoint,
                        });
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FunctionCompute.prototype.fetchData = function (access, region, api, field, nextToken, limit, serviceName, functionName, qualifier) {
        return __awaiter(this, void 0, void 0, function () {
            var start, _loop_1, this_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resultData = [];
                        start = true;
                        _loop_1 = function () {
                            var optional, switchApi, _tempNextToken;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        start = false;
                                        optional = {
                                            limit: _limit,
                                            nextToken: _nextToken,
                                            prefix: _prefix,
                                            startKey: _startKey,
                                        };
                                        return [4 /*yield*/, this_1.getClient(region, access)];
                                    case 1:
                                        _a.sent();
                                        switchApi = {
                                            listServices: function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.client[api](__assign({}, optional))];
                                                        case 1:
                                                            result = _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); },
                                            listFunctions: function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.client[api](serviceName, __assign({}, optional), {}, qualifier)];
                                                        case 1:
                                                            result = _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); },
                                            listTriggers: function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.client[api](serviceName, functionName, __assign({}, optional))];
                                                        case 1:
                                                            result = _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); },
                                            listAliases: function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.client[api](serviceName, __assign({}, optional))];
                                                        case 1:
                                                            result = _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); },
                                            listVersions: function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.client[api](serviceName, __assign({}, optional))];
                                                        case 1:
                                                            result = _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); },
                                            listCustomDomains: function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.client[api](__assign({}, optional))];
                                                        case 1:
                                                            result = _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); },
                                            listProvisionConfigs: function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.client[api]({ limit: _limit, nextToken: _nextToken, serviceName: serviceName, qualifier: qualifier })];
                                                        case 1:
                                                            result = _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); },
                                            listFunctionAsyncConfigs: function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.client[api](serviceName, functionName, { limit: _limit, nextToken: _nextToken })];
                                                        case 1:
                                                            result = _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); },
                                        };
                                        return [4 /*yield*/, switchApi[api].call(this_1)];
                                    case 2:
                                        _a.sent();
                                        resultData = resultData.concat(result.data[field]);
                                        if (typeof nextToken === 'undefined' && typeof limit === 'undefined') {
                                            _tempNextToken = result.data.nextToken ? result.data.nextToken : null;
                                            _nextToken = _nextToken == _tempNextToken ? null : _tempNextToken;
                                        }
                                        else {
                                            _nextToken = null;
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 1;
                    case 1:
                        if (!(start || _nextToken)) return [3 /*break*/, 3];
                        return [5 /*yield**/, _loop_1()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, yaml.dump(resultData)];
                }
            });
        });
    };
    return FunctionCompute;
}(BaseComponent));
exports.default = FunctionCompute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUFzRDtBQUV0RCxTQUFTLE9BQU8sQ0FBQyxLQUFhLEVBQUUsUUFBZ0I7SUFDOUMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxJQUFJLE1BQU0sRUFBRTtRQUNWLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxRQUFnQjtJQUN4QyxPQUFPLE9BQU8sQ0FBQywwQkFBMEIsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsUUFBZ0I7SUFDckMsT0FBTyxPQUFPLENBQUMsaUNBQWlDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLFFBQWdCO0lBQ3ZDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzVDLENBQUM7QUFTRCxTQUFzQixhQUFhOzs7Ozt3QkFDZixxQkFBTSxvQkFBYSxDQUFDLG9CQUFvQixDQUFDLEVBQUE7O29CQUFyRCxTQUFTLEdBQUcsU0FBeUM7b0JBQ2hDLHFCQUFNLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUMsRUFBQTs7b0JBQWpFLFVBQVUsR0FBVyxT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