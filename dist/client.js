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
exports.ListTriggersResponseBodyTriggers = exports.ListServicesResponseBodyServices = exports.ListServiceVersionsResponseBodyVersions = exports.ListProvisionConfigsResponseBodyProvisionConfigs = exports.ListInstancesResponseBodyInstances = exports.ListFunctionsResponseBodyFunctions = exports.ListFunctionAsyncInvokeConfigsResponseBodyConfigs = exports.ListEventSourcesResponseBodyEventSources = exports.ListCustomDomainsResponseBodyCustomDomains = exports.ListAliasesResponseBodyAliases = exports.NASConfigMountPoints = exports.UpdateTriggerResponse = exports.UpdateTriggerResponseBody = exports.UpdateTriggerRequest = exports.UpdateTriggerHeaders = exports.UpdateServiceResponse = exports.UpdateServiceResponseBody = exports.UpdateServiceRequest = exports.UpdateServiceHeaders = exports.UpdateFunctionResponse = exports.UpdateFunctionResponseBody = exports.UpdateFunctionRequest = exports.UpdateFunctionHeaders = exports.UpdateCustomDomainResponse = exports.UpdateCustomDomainResponseBody = exports.UpdateCustomDomainRequest = exports.UpdateCustomDomainHeaders = exports.UpdateAliasResponse = exports.UpdateAliasResponseBody = exports.UpdateAliasRequest = exports.UpdateAliasHeaders = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.UntagResourceHeaders = exports.TagResourceResponse = exports.TagResourceRequest = exports.TagResourceHeaders = exports.StopStatefulAsyncInvocationResponse = exports.StopStatefulAsyncInvocationRequest = exports.StopStatefulAsyncInvocationHeaders = exports.RegisterEventSourceResponse = exports.RegisterEventSourceResponseBody = exports.RegisterEventSourceRequest = exports.RegisterEventSourceHeaders = exports.PutProvisionConfigResponse = exports.PutProvisionConfigResponseBody = exports.PutProvisionConfigRequest = exports.PutProvisionConfigHeaders = exports.PutFunctionOnDemandConfigResponse = exports.PutFunctionOnDemandConfigResponseBody = exports.PutFunctionOnDemandConfigRequest = exports.PutFunctionOnDemandConfigHeaders = exports.PutFunctionAsyncInvokeConfigResponse = exports.PutFunctionAsyncInvokeConfigResponseBody = exports.PutFunctionAsyncInvokeConfigRequest = exports.PutFunctionAsyncInvokeConfigHeaders = exports.PublishServiceVersionResponse = exports.PublishServiceVersionResponseBody = exports.PublishServiceVersionRequest = exports.PublishServiceVersionHeaders = exports.PublishLayerAsPublicResponse = exports.PublishLayerAsPublicHeaders = exports.PermanentDeleteLayerVersionResponse = exports.PermanentDeleteLayerVersionHeaders = exports.ListVpcBindingsResponse = exports.ListVpcBindingsResponseBody = exports.ListVpcBindingsHeaders = exports.ListTriggersResponse = exports.ListTriggersResponseBody = exports.ListTriggersRequest = exports.ListTriggersHeaders = exports.ListTaggedResourcesResponse = exports.ListTaggedResourcesResponseBody = exports.ListTaggedResourcesRequest = exports.ListTaggedResourcesHeaders = exports.ListStatefulAsyncInvocationsResponse = exports.ListStatefulAsyncInvocationsResponseBody = exports.ListStatefulAsyncInvocationsRequest = exports.ListStatefulAsyncInvocationsHeaders = exports.ListServicesResponse = exports.ListServicesResponseBody = exports.ListServicesRequest = exports.ListServicesHeaders = exports.ListServiceVersionsResponse = exports.ListServiceVersionsResponseBody = exports.ListServiceVersionsRequest = exports.ListServiceVersionsHeaders = exports.ListReservedCapacitiesResponse = exports.ListReservedCapacitiesResponseBody = exports.ListReservedCapacitiesRequest = exports.ListReservedCapacitiesHeaders = exports.ListProvisionConfigsResponse = exports.ListProvisionConfigsResponseBody = exports.ListProvisionConfigsRequest = exports.ListProvisionConfigsHeaders = exports.ListOnDemandConfigsResponse = exports.ListOnDemandConfigsResponseBody = exports.ListOnDemandConfigsRequest = exports.ListOnDemandConfigsHeaders = exports.ListLayersResponse = exports.ListLayersResponseBody = exports.ListLayersRequest = exports.ListLayersHeaders = exports.ListLayerVersionsResponse = exports.ListLayerVersionsResponseBody = exports.ListLayerVersionsRequest = exports.ListLayerVersionsHeaders = exports.ListInstancesResponse = exports.ListInstancesResponseBody = exports.ListInstancesRequest = exports.ListInstancesHeaders = exports.ListFunctionsResponse = exports.ListFunctionsResponseBody = exports.ListFunctionsRequest = exports.ListFunctionsHeaders = exports.ListFunctionAsyncInvokeConfigsResponse = exports.ListFunctionAsyncInvokeConfigsResponseBody = exports.ListFunctionAsyncInvokeConfigsRequest = exports.ListFunctionAsyncInvokeConfigsHeaders = exports.ListEventSourcesResponse = exports.ListEventSourcesResponseBody = exports.ListEventSourcesRequest = exports.ListEventSourcesHeaders = exports.ListCustomDomainsResponse = exports.ListCustomDomainsResponseBody = exports.ListCustomDomainsRequest = exports.ListCustomDomainsHeaders = exports.ListAliasesResponse = exports.ListAliasesResponseBody = exports.ListAliasesRequest = exports.ListAliasesHeaders = exports.InvokeFunctionResponse = exports.InvokeFunctionRequest = exports.InvokeFunctionHeaders = exports.GetTriggerResponse = exports.GetTriggerResponseBody = exports.GetTriggerHeaders = exports.GetStatefulAsyncInvocationResponse = exports.GetStatefulAsyncInvocationRequest = exports.GetStatefulAsyncInvocationHeaders = exports.GetServiceResponse = exports.GetServiceResponseBody = exports.GetServiceRequest = exports.GetServiceHeaders = exports.GetResourceTagsResponse = exports.GetResourceTagsResponseBody = exports.GetResourceTagsRequest = exports.GetResourceTagsHeaders = exports.GetProvisionConfigResponse = exports.GetProvisionConfigResponseBody = exports.GetProvisionConfigRequest = exports.GetProvisionConfigHeaders = exports.GetLayerVersionByArnResponse = exports.GetLayerVersionByArnResponseBody = exports.GetLayerVersionByArnHeaders = exports.GetLayerVersionResponse = exports.GetLayerVersionHeaders = exports.GetFunctionOnDemandConfigResponse = exports.GetFunctionOnDemandConfigResponseBody = exports.GetFunctionOnDemandConfigRequest = exports.GetFunctionOnDemandConfigHeaders = exports.GetFunctionCodeResponse = exports.GetFunctionCodeResponseBody = exports.GetFunctionCodeRequest = exports.GetFunctionCodeHeaders = exports.GetFunctionAsyncInvokeConfigResponse = exports.GetFunctionAsyncInvokeConfigResponseBody = exports.GetFunctionAsyncInvokeConfigRequest = exports.GetFunctionAsyncInvokeConfigHeaders = exports.GetFunctionResponse = exports.GetFunctionResponseBody = exports.GetFunctionRequest = exports.GetFunctionHeaders = exports.GetCustomDomainResponse = exports.GetCustomDomainResponseBody = exports.GetCustomDomainHeaders = exports.GetAliasResponse = exports.GetAliasResponseBody = exports.GetAliasHeaders = exports.GetAccountSettingsResponse = exports.GetAccountSettingsResponseBody = exports.GetAccountSettingsHeaders = exports.DeregisterEventSourceResponse = exports.DeregisterEventSourceRequest = exports.DeregisterEventSourceHeaders = exports.DeleteVpcBindingResponse = exports.DeleteVpcBindingHeaders = exports.DeleteTriggerResponse = exports.DeleteTriggerHeaders = exports.DeleteServiceVersionResponse = exports.DeleteServiceVersionHeaders = exports.DeleteServiceResponse = exports.DeleteServiceHeaders = exports.DeleteLayerVersionResponse = exports.DeleteLayerVersionHeaders = exports.DeleteFunctionOnDemandConfigResponse = exports.DeleteFunctionOnDemandConfigRequest = exports.DeleteFunctionOnDemandConfigHeaders = exports.DeleteFunctionAsyncInvokeConfigResponse = exports.DeleteFunctionAsyncInvokeConfigRequest = exports.DeleteFunctionAsyncInvokeConfigHeaders = exports.DeleteFunctionResponse = exports.DeleteFunctionHeaders = exports.DeleteCustomDomainResponse = exports.DeleteCustomDomainHeaders = exports.DeleteAliasResponse = exports.DeleteAliasHeaders = exports.CreateVpcBindingResponse = exports.CreateVpcBindingRequest = exports.CreateVpcBindingHeaders = exports.CreateTriggerResponse = exports.CreateTriggerResponseBody = exports.CreateTriggerRequest = exports.CreateTriggerHeaders = exports.CreateServiceResponse = exports.CreateServiceResponseBody = exports.CreateServiceRequest = exports.CreateServiceHeaders = exports.CreateLayerVersionResponse = exports.CreateLayerVersionResponseBody = exports.CreateLayerVersionRequest = exports.CreateLayerVersionHeaders = exports.CreateFunctionResponse = exports.CreateFunctionResponseBody = exports.CreateFunctionRequest = exports.CreateFunctionHeaders = exports.CreateCustomDomainResponse = exports.CreateCustomDomainResponseBody = exports.CreateCustomDomainRequest = exports.CreateCustomDomainHeaders = exports.CreateAliasResponse = exports.CreateAliasResponseBody = exports.CreateAliasRequest = exports.CreateAliasHeaders = exports.VPCConfig = exports.TracingConfig = exports.TargetTrackingPolicies = exports.StatefulAsyncInvocation = exports.ScheduledActions = exports.RouteConfig = exports.Resource = exports.PathConfig = exports.OutputCodeLocation = exports.OpenReservedCapacity = exports.OnDemandConfig = exports.NASConfig = exports.LogConfig = exports.LifecycleHook = exports.LayerCode = exports.Layer = exports.JaegerConfig = exports.InstanceLifecycleConfig = exports.DestinationConfig = exports.Destination = exports.DNSOption = exports.CustomRuntimeConfig = exports.CustomDNS = exports.CustomContainerConfigInfo = exports.CustomContainerConfig = exports.Code = exports.CertConfig = exports.AccelerationInfo = void 0;
// This file is auto-generated, don't edit it
/**
 *
 */
var tea_util_1 = __importStar(require("@alicloud/tea-util")), $Util = tea_util_1;
var openapi_client_1 = __importStar(require("@alicloud/openapi-client")), $OpenApi = openapi_client_1;
var openapi_util_1 = __importDefault(require("@alicloud/openapi-util"));
var endpoint_util_1 = __importDefault(require("@alicloud/endpoint-util"));
var $tea = __importStar(require("@alicloud/tea-typescript"));
var AccelerationInfo = /** @class */ (function (_super) {
    __extends(AccelerationInfo, _super);
    function AccelerationInfo(map) {
        return _super.call(this, map) || this;
    }
    AccelerationInfo.names = function () {
        return {
            status: 'status',
        };
    };
    AccelerationInfo.types = function () {
        return {
            status: 'string',
        };
    };
    return AccelerationInfo;
}($tea.Model));
exports.AccelerationInfo = AccelerationInfo;
var CertConfig = /** @class */ (function (_super) {
    __extends(CertConfig, _super);
    function CertConfig(map) {
        return _super.call(this, map) || this;
    }
    CertConfig.names = function () {
        return {
            certName: 'certName',
            certificate: 'certificate',
            privateKey: 'privateKey',
        };
    };
    CertConfig.types = function () {
        return {
            certName: 'string',
            certificate: 'string',
            privateKey: 'string',
        };
    };
    return CertConfig;
}($tea.Model));
exports.CertConfig = CertConfig;
var Code = /** @class */ (function (_super) {
    __extends(Code, _super);
    function Code(map) {
        return _super.call(this, map) || this;
    }
    Code.names = function () {
        return {
            codeCheckSum: 'codeCheckSum',
            err: 'err',
            ossBucketName: 'ossBucketName',
            ossObjectName: 'ossObjectName',
            zipFile: 'zipFile',
        };
    };
    Code.types = function () {
        return {
            codeCheckSum: 'string',
            err: 'string',
            ossBucketName: 'string',
            ossObjectName: 'string',
            zipFile: 'string',
        };
    };
    return Code;
}($tea.Model));
exports.Code = Code;
var CustomContainerConfig = /** @class */ (function (_super) {
    __extends(CustomContainerConfig, _super);
    function CustomContainerConfig(map) {
        return _super.call(this, map) || this;
    }
    CustomContainerConfig.names = function () {
        return {
            accelerationType: 'accelerationType',
            args: 'args',
            command: 'command',
            image: 'image',
        };
    };
    CustomContainerConfig.types = function () {
        return {
            accelerationType: 'string',
            args: 'string',
            command: 'string',
            image: 'string',
        };
    };
    return CustomContainerConfig;
}($tea.Model));
exports.CustomContainerConfig = CustomContainerConfig;
var CustomContainerConfigInfo = /** @class */ (function (_super) {
    __extends(CustomContainerConfigInfo, _super);
    function CustomContainerConfigInfo(map) {
        return _super.call(this, map) || this;
    }
    CustomContainerConfigInfo.names = function () {
        return {
            accelerationInfo: 'accelerationInfo',
            accelerationType: 'accelerationType',
            args: 'args',
            command: 'command',
            image: 'image',
        };
    };
    CustomContainerConfigInfo.types = function () {
        return {
            accelerationInfo: AccelerationInfo,
            accelerationType: 'string',
            args: 'string',
            command: 'string',
            image: 'string',
        };
    };
    return CustomContainerConfigInfo;
}($tea.Model));
exports.CustomContainerConfigInfo = CustomContainerConfigInfo;
var CustomDNS = /** @class */ (function (_super) {
    __extends(CustomDNS, _super);
    function CustomDNS(map) {
        return _super.call(this, map) || this;
    }
    CustomDNS.names = function () {
        return {
            dnsOptions: 'dnsOptions',
            nameServers: 'nameServers',
            searches: 'searches',
        };
    };
    CustomDNS.types = function () {
        return {
            dnsOptions: { 'type': 'array', 'itemType': DNSOption },
            nameServers: { 'type': 'array', 'itemType': 'string' },
            searches: { 'type': 'array', 'itemType': 'string' },
        };
    };
    return CustomDNS;
}($tea.Model));
exports.CustomDNS = CustomDNS;
var CustomRuntimeConfig = /** @class */ (function (_super) {
    __extends(CustomRuntimeConfig, _super);
    function CustomRuntimeConfig(map) {
        return _super.call(this, map) || this;
    }
    CustomRuntimeConfig.names = function () {
        return {
            args: 'args',
            command: 'command',
        };
    };
    CustomRuntimeConfig.types = function () {
        return {
            args: { 'type': 'array', 'itemType': 'string' },
            command: { 'type': 'array', 'itemType': 'string' },
        };
    };
    return CustomRuntimeConfig;
}($tea.Model));
exports.CustomRuntimeConfig = CustomRuntimeConfig;
var DNSOption = /** @class */ (function (_super) {
    __extends(DNSOption, _super);
    function DNSOption(map) {
        return _super.call(this, map) || this;
    }
    DNSOption.names = function () {
        return {
            name: 'name',
            value: 'value',
        };
    };
    DNSOption.types = function () {
        return {
            name: 'string',
            value: 'string',
        };
    };
    return DNSOption;
}($tea.Model));
exports.DNSOption = DNSOption;
var Destination = /** @class */ (function (_super) {
    __extends(Destination, _super);
    function Destination(map) {
        return _super.call(this, map) || this;
    }
    Destination.names = function () {
        return {
            destination: 'destination',
        };
    };
    Destination.types = function () {
        return {
            destination: 'string',
        };
    };
    return Destination;
}($tea.Model));
exports.Destination = Destination;
var DestinationConfig = /** @class */ (function (_super) {
    __extends(DestinationConfig, _super);
    function DestinationConfig(map) {
        return _super.call(this, map) || this;
    }
    DestinationConfig.names = function () {
        return {
            onFailure: 'onFailure',
            onSuccess: 'onSuccess',
        };
    };
    DestinationConfig.types = function () {
        return {
            onFailure: Destination,
            onSuccess: Destination,
        };
    };
    return DestinationConfig;
}($tea.Model));
exports.DestinationConfig = DestinationConfig;
var InstanceLifecycleConfig = /** @class */ (function (_super) {
    __extends(InstanceLifecycleConfig, _super);
    function InstanceLifecycleConfig(map) {
        return _super.call(this, map) || this;
    }
    InstanceLifecycleConfig.names = function () {
        return {
            preFreeze: 'preFreeze',
            preStop: 'preStop',
        };
    };
    InstanceLifecycleConfig.types = function () {
        return {
            preFreeze: LifecycleHook,
            preStop: LifecycleHook,
        };
    };
    return InstanceLifecycleConfig;
}($tea.Model));
exports.InstanceLifecycleConfig = InstanceLifecycleConfig;
var JaegerConfig = /** @class */ (function (_super) {
    __extends(JaegerConfig, _super);
    function JaegerConfig(map) {
        return _super.call(this, map) || this;
    }
    JaegerConfig.names = function () {
        return {
            endpoint: 'endpoint',
        };
    };
    JaegerConfig.types = function () {
        return {
            endpoint: 'string',
        };
    };
    return JaegerConfig;
}($tea.Model));
exports.JaegerConfig = JaegerConfig;
var Layer = /** @class */ (function (_super) {
    __extends(Layer, _super);
    function Layer(map) {
        return _super.call(this, map) || this;
    }
    Layer.names = function () {
        return {
            acl: 'acl',
            arn: 'arn',
            code: 'code',
            codeChecksum: 'codeChecksum',
            codeSize: 'codeSize',
            compatibleRuntime: 'compatibleRuntime',
            createTime: 'createTime',
            description: 'description',
            layerName: 'layerName',
            version: 'version',
        };
    };
    Layer.types = function () {
        return {
            acl: 'number',
            arn: 'string',
            code: LayerCode,
            codeChecksum: 'string',
            codeSize: 'number',
            compatibleRuntime: { 'type': 'array', 'itemType': 'string' },
            createTime: 'string',
            description: 'string',
            layerName: 'string',
            version: 'number',
        };
    };
    return Layer;
}($tea.Model));
exports.Layer = Layer;
var LayerCode = /** @class */ (function (_super) {
    __extends(LayerCode, _super);
    function LayerCode(map) {
        return _super.call(this, map) || this;
    }
    LayerCode.names = function () {
        return {
            location: 'location',
            repositoryType: 'repositoryType',
        };
    };
    LayerCode.types = function () {
        return {
            location: 'string',
            repositoryType: 'string',
        };
    };
    return LayerCode;
}($tea.Model));
exports.LayerCode = LayerCode;
var LifecycleHook = /** @class */ (function (_super) {
    __extends(LifecycleHook, _super);
    function LifecycleHook(map) {
        return _super.call(this, map) || this;
    }
    LifecycleHook.names = function () {
        return {
            handler: 'handler',
            timeout: 'timeout',
        };
    };
    LifecycleHook.types = function () {
        return {
            handler: 'string',
            timeout: 'number',
        };
    };
    return LifecycleHook;
}($tea.Model));
exports.LifecycleHook = LifecycleHook;
var LogConfig = /** @class */ (function (_super) {
    __extends(LogConfig, _super);
    function LogConfig(map) {
        return _super.call(this, map) || this;
    }
    LogConfig.names = function () {
        return {
            enableInstanceMetrics: 'enableInstanceMetrics',
            enableRequestMetrics: 'enableRequestMetrics',
            logBeginRule: 'logBeginRule',
            logstore: 'logstore',
            project: 'project',
        };
    };
    LogConfig.types = function () {
        return {
            enableInstanceMetrics: 'boolean',
            enableRequestMetrics: 'boolean',
            logBeginRule: 'string',
            logstore: 'string',
            project: 'string',
        };
    };
    return LogConfig;
}($tea.Model));
exports.LogConfig = LogConfig;
var NASConfig = /** @class */ (function (_super) {
    __extends(NASConfig, _super);
    function NASConfig(map) {
        return _super.call(this, map) || this;
    }
    NASConfig.names = function () {
        return {
            groupId: 'groupId',
            mountPoints: 'mountPoints',
            userId: 'userId',
        };
    };
    NASConfig.types = function () {
        return {
            groupId: 'string',
            mountPoints: { 'type': 'array', 'itemType': NASConfigMountPoints },
            userId: 'string',
        };
    };
    return NASConfig;
}($tea.Model));
exports.NASConfig = NASConfig;
var OnDemandConfig = /** @class */ (function (_super) {
    __extends(OnDemandConfig, _super);
    function OnDemandConfig(map) {
        return _super.call(this, map) || this;
    }
    OnDemandConfig.names = function () {
        return {
            maximumInstanceCount: 'maximumInstanceCount',
            resource: 'resource',
        };
    };
    OnDemandConfig.types = function () {
        return {
            maximumInstanceCount: 'number',
            resource: 'string',
        };
    };
    return OnDemandConfig;
}($tea.Model));
exports.OnDemandConfig = OnDemandConfig;
var OpenReservedCapacity = /** @class */ (function (_super) {
    __extends(OpenReservedCapacity, _super);
    function OpenReservedCapacity(map) {
        return _super.call(this, map) || this;
    }
    OpenReservedCapacity.names = function () {
        return {
            createdTime: 'createdTime',
            cu: 'cu',
            deadline: 'deadline',
            instanceId: 'instanceId',
            isRefunded: 'isRefunded',
            lastModifiedTime: 'lastModifiedTime',
        };
    };
    OpenReservedCapacity.types = function () {
        return {
            createdTime: 'string',
            cu: 'number',
            deadline: 'string',
            instanceId: 'string',
            isRefunded: 'string',
            lastModifiedTime: 'string',
        };
    };
    return OpenReservedCapacity;
}($tea.Model));
exports.OpenReservedCapacity = OpenReservedCapacity;
var OutputCodeLocation = /** @class */ (function (_super) {
    __extends(OutputCodeLocation, _super);
    function OutputCodeLocation(map) {
        return _super.call(this, map) || this;
    }
    OutputCodeLocation.names = function () {
        return {
            location: 'location',
            repositoryType: 'repositoryType',
        };
    };
    OutputCodeLocation.types = function () {
        return {
            location: 'string',
            repositoryType: 'string',
        };
    };
    return OutputCodeLocation;
}($tea.Model));
exports.OutputCodeLocation = OutputCodeLocation;
var PathConfig = /** @class */ (function (_super) {
    __extends(PathConfig, _super);
    function PathConfig(map) {
        return _super.call(this, map) || this;
    }
    PathConfig.names = function () {
        return {
            functionName: 'functionName',
            methods: 'methods',
            path: 'path',
            qualifier: 'qualifier',
            serviceName: 'serviceName',
        };
    };
    PathConfig.types = function () {
        return {
            functionName: 'string',
            methods: { 'type': 'array', 'itemType': 'string' },
            path: 'string',
            qualifier: 'string',
            serviceName: 'string',
        };
    };
    return PathConfig;
}($tea.Model));
exports.PathConfig = PathConfig;
var Resource = /** @class */ (function (_super) {
    __extends(Resource, _super);
    function Resource(map) {
        return _super.call(this, map) || this;
    }
    Resource.names = function () {
        return {
            resourceArn: 'resourceArn',
            tags: 'tags',
        };
    };
    Resource.types = function () {
        return {
            resourceArn: 'string',
            tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return Resource;
}($tea.Model));
exports.Resource = Resource;
var RouteConfig = /** @class */ (function (_super) {
    __extends(RouteConfig, _super);
    function RouteConfig(map) {
        return _super.call(this, map) || this;
    }
    RouteConfig.names = function () {
        return {
            routes: 'routes',
        };
    };
    RouteConfig.types = function () {
        return {
            routes: { 'type': 'array', 'itemType': PathConfig },
        };
    };
    return RouteConfig;
}($tea.Model));
exports.RouteConfig = RouteConfig;
var ScheduledActions = /** @class */ (function (_super) {
    __extends(ScheduledActions, _super);
    function ScheduledActions(map) {
        return _super.call(this, map) || this;
    }
    ScheduledActions.names = function () {
        return {
            endTime: 'endTime',
            name: 'name',
            scheduleExpression: 'scheduleExpression',
            startTime: 'startTime',
            target: 'target',
        };
    };
    ScheduledActions.types = function () {
        return {
            endTime: 'string',
            name: 'string',
            scheduleExpression: 'string',
            startTime: 'string',
            target: 'number',
        };
    };
    return ScheduledActions;
}($tea.Model));
exports.ScheduledActions = ScheduledActions;
var StatefulAsyncInvocation = /** @class */ (function (_super) {
    __extends(StatefulAsyncInvocation, _super);
    function StatefulAsyncInvocation(map) {
        return _super.call(this, map) || this;
    }
    StatefulAsyncInvocation.names = function () {
        return {
            alreadyRetriedTimes: 'alreadyRetriedTimes',
            destinationStatus: 'destinationStatus',
            endTime: 'endTime',
            functionName: 'functionName',
            invocationErrorMessage: 'invocationErrorMessage',
            invocationId: 'invocationId',
            invocationPayload: 'invocationPayload',
            qualifier: 'qualifier',
            requestId: 'requestId',
            serviceName: 'serviceName',
            startedTime: 'startedTime',
            status: 'status',
        };
    };
    StatefulAsyncInvocation.types = function () {
        return {
            alreadyRetriedTimes: 'number',
            destinationStatus: 'string',
            endTime: 'number',
            functionName: 'string',
            invocationErrorMessage: 'string',
            invocationId: 'string',
            invocationPayload: 'string',
            qualifier: 'string',
            requestId: 'string',
            serviceName: 'string',
            startedTime: 'number',
            status: 'string',
        };
    };
    return StatefulAsyncInvocation;
}($tea.Model));
exports.StatefulAsyncInvocation = StatefulAsyncInvocation;
var TargetTrackingPolicies = /** @class */ (function (_super) {
    __extends(TargetTrackingPolicies, _super);
    function TargetTrackingPolicies(map) {
        return _super.call(this, map) || this;
    }
    TargetTrackingPolicies.names = function () {
        return {
            endTime: 'endTime',
            maxCapacity: 'maxCapacity',
            metricTarget: 'metricTarget',
            metricType: 'metricType',
            minCapacity: 'minCapacity',
            name: 'name',
            startTime: 'startTime',
        };
    };
    TargetTrackingPolicies.types = function () {
        return {
            endTime: 'string',
            maxCapacity: 'number',
            metricTarget: 'number',
            metricType: 'string',
            minCapacity: 'number',
            name: 'string',
            startTime: 'string',
        };
    };
    return TargetTrackingPolicies;
}($tea.Model));
exports.TargetTrackingPolicies = TargetTrackingPolicies;
var TracingConfig = /** @class */ (function (_super) {
    __extends(TracingConfig, _super);
    function TracingConfig(map) {
        return _super.call(this, map) || this;
    }
    TracingConfig.names = function () {
        return {
            jaegerConfig: 'jaegerConfig',
            params: 'params',
            type: 'type',
        };
    };
    TracingConfig.types = function () {
        return {
            jaegerConfig: JaegerConfig,
            params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            type: 'string',
        };
    };
    return TracingConfig;
}($tea.Model));
exports.TracingConfig = TracingConfig;
var VPCConfig = /** @class */ (function (_super) {
    __extends(VPCConfig, _super);
    function VPCConfig(map) {
        return _super.call(this, map) || this;
    }
    VPCConfig.names = function () {
        return {
            role: 'role',
            securityGroupId: 'securityGroupId',
            vSwitchIds: 'vSwitchIds',
            vpcId: 'vpcId',
        };
    };
    VPCConfig.types = function () {
        return {
            role: 'string',
            securityGroupId: 'string',
            vSwitchIds: { 'type': 'array', 'itemType': 'string' },
            vpcId: 'string',
        };
    };
    return VPCConfig;
}($tea.Model));
exports.VPCConfig = VPCConfig;
var CreateAliasHeaders = /** @class */ (function (_super) {
    __extends(CreateAliasHeaders, _super);
    function CreateAliasHeaders(map) {
        return _super.call(this, map) || this;
    }
    CreateAliasHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    CreateAliasHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return CreateAliasHeaders;
}($tea.Model));
exports.CreateAliasHeaders = CreateAliasHeaders;
var CreateAliasRequest = /** @class */ (function (_super) {
    __extends(CreateAliasRequest, _super);
    function CreateAliasRequest(map) {
        return _super.call(this, map) || this;
    }
    CreateAliasRequest.names = function () {
        return {
            additionalVersionWeight: 'additionalVersionWeight',
            aliasName: 'aliasName',
            description: 'description',
            versionId: 'versionId',
        };
    };
    CreateAliasRequest.types = function () {
        return {
            additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
            aliasName: 'string',
            description: 'string',
            versionId: 'string',
        };
    };
    return CreateAliasRequest;
}($tea.Model));
exports.CreateAliasRequest = CreateAliasRequest;
var CreateAliasResponseBody = /** @class */ (function (_super) {
    __extends(CreateAliasResponseBody, _super);
    function CreateAliasResponseBody(map) {
        return _super.call(this, map) || this;
    }
    CreateAliasResponseBody.names = function () {
        return {
            additionalVersionWeight: 'additionalVersionWeight',
            aliasName: 'aliasName',
            createdTime: 'createdTime',
            description: 'description',
            lastModifiedTime: 'lastModifiedTime',
            versionId: 'versionId',
        };
    };
    CreateAliasResponseBody.types = function () {
        return {
            additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
            aliasName: 'string',
            createdTime: 'string',
            description: 'string',
            lastModifiedTime: 'string',
            versionId: 'string',
        };
    };
    return CreateAliasResponseBody;
}($tea.Model));
exports.CreateAliasResponseBody = CreateAliasResponseBody;
var CreateAliasResponse = /** @class */ (function (_super) {
    __extends(CreateAliasResponse, _super);
    function CreateAliasResponse(map) {
        return _super.call(this, map) || this;
    }
    CreateAliasResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    CreateAliasResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: CreateAliasResponseBody,
        };
    };
    return CreateAliasResponse;
}($tea.Model));
exports.CreateAliasResponse = CreateAliasResponse;
var CreateCustomDomainHeaders = /** @class */ (function (_super) {
    __extends(CreateCustomDomainHeaders, _super);
    function CreateCustomDomainHeaders(map) {
        return _super.call(this, map) || this;
    }
    CreateCustomDomainHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    CreateCustomDomainHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return CreateCustomDomainHeaders;
}($tea.Model));
exports.CreateCustomDomainHeaders = CreateCustomDomainHeaders;
var CreateCustomDomainRequest = /** @class */ (function (_super) {
    __extends(CreateCustomDomainRequest, _super);
    function CreateCustomDomainRequest(map) {
        return _super.call(this, map) || this;
    }
    CreateCustomDomainRequest.names = function () {
        return {
            certConfig: 'certConfig',
            domainName: 'domainName',
            protocol: 'protocol',
            routeConfig: 'routeConfig',
        };
    };
    CreateCustomDomainRequest.types = function () {
        return {
            certConfig: CertConfig,
            domainName: 'string',
            protocol: 'string',
            routeConfig: RouteConfig,
        };
    };
    return CreateCustomDomainRequest;
}($tea.Model));
exports.CreateCustomDomainRequest = CreateCustomDomainRequest;
var CreateCustomDomainResponseBody = /** @class */ (function (_super) {
    __extends(CreateCustomDomainResponseBody, _super);
    function CreateCustomDomainResponseBody(map) {
        return _super.call(this, map) || this;
    }
    CreateCustomDomainResponseBody.names = function () {
        return {
            accountId: 'accountId',
            apiVersion: 'apiVersion',
            certConfig: 'certConfig',
            createdTime: 'createdTime',
            domainName: 'domainName',
            lastModifiedTime: 'lastModifiedTime',
            protocol: 'protocol',
            routeConfig: 'routeConfig',
        };
    };
    CreateCustomDomainResponseBody.types = function () {
        return {
            accountId: 'string',
            apiVersion: 'string',
            certConfig: CertConfig,
            createdTime: 'string',
            domainName: 'string',
            lastModifiedTime: 'string',
            protocol: 'string',
            routeConfig: RouteConfig,
        };
    };
    return CreateCustomDomainResponseBody;
}($tea.Model));
exports.CreateCustomDomainResponseBody = CreateCustomDomainResponseBody;
var CreateCustomDomainResponse = /** @class */ (function (_super) {
    __extends(CreateCustomDomainResponse, _super);
    function CreateCustomDomainResponse(map) {
        return _super.call(this, map) || this;
    }
    CreateCustomDomainResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    CreateCustomDomainResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: CreateCustomDomainResponseBody,
        };
    };
    return CreateCustomDomainResponse;
}($tea.Model));
exports.CreateCustomDomainResponse = CreateCustomDomainResponse;
var CreateFunctionHeaders = /** @class */ (function (_super) {
    __extends(CreateFunctionHeaders, _super);
    function CreateFunctionHeaders(map) {
        return _super.call(this, map) || this;
    }
    CreateFunctionHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    CreateFunctionHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return CreateFunctionHeaders;
}($tea.Model));
exports.CreateFunctionHeaders = CreateFunctionHeaders;
var CreateFunctionRequest = /** @class */ (function (_super) {
    __extends(CreateFunctionRequest, _super);
    function CreateFunctionRequest(map) {
        return _super.call(this, map) || this;
    }
    CreateFunctionRequest.names = function () {
        return {
            caPort: 'caPort',
            code: 'code',
            customContainerConfig: 'customContainerConfig',
            customDNS: 'customDNS',
            customRuntimeConfig: 'customRuntimeConfig',
            description: 'description',
            environmentVariables: 'environmentVariables',
            functionName: 'functionName',
            handler: 'handler',
            initializationTimeout: 'initializationTimeout',
            initializer: 'initializer',
            instanceConcurrency: 'instanceConcurrency',
            instanceLifecycleConfig: 'instanceLifecycleConfig',
            instanceType: 'instanceType',
            layers: 'layers',
            memorySize: 'memorySize',
            runtime: 'runtime',
            timeout: 'timeout',
        };
    };
    CreateFunctionRequest.types = function () {
        return {
            caPort: 'number',
            code: Code,
            customContainerConfig: CustomContainerConfig,
            customDNS: CustomDNS,
            customRuntimeConfig: CustomRuntimeConfig,
            description: 'string',
            environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            functionName: 'string',
            handler: 'string',
            initializationTimeout: 'number',
            initializer: 'string',
            instanceConcurrency: 'number',
            instanceLifecycleConfig: InstanceLifecycleConfig,
            instanceType: 'string',
            layers: { 'type': 'array', 'itemType': 'string' },
            memorySize: 'number',
            runtime: 'string',
            timeout: 'number',
        };
    };
    return CreateFunctionRequest;
}($tea.Model));
exports.CreateFunctionRequest = CreateFunctionRequest;
var CreateFunctionResponseBody = /** @class */ (function (_super) {
    __extends(CreateFunctionResponseBody, _super);
    function CreateFunctionResponseBody(map) {
        return _super.call(this, map) || this;
    }
    CreateFunctionResponseBody.names = function () {
        return {
            caPort: 'caPort',
            codeChecksum: 'codeChecksum',
            codeSize: 'codeSize',
            createdTime: 'createdTime',
            customContainerConfig: 'customContainerConfig',
            customDNS: 'customDNS',
            customRuntimeConfig: 'customRuntimeConfig',
            description: 'description',
            environmentVariables: 'environmentVariables',
            functionId: 'functionId',
            functionName: 'functionName',
            handler: 'handler',
            initializationTimeout: 'initializationTimeout',
            initializer: 'initializer',
            instanceConcurrency: 'instanceConcurrency',
            instanceLifecycleConfig: 'instanceLifecycleConfig',
            instanceType: 'instanceType',
            lastModifiedTime: 'lastModifiedTime',
            layers: 'layers',
            memorySize: 'memorySize',
            runtime: 'runtime',
            timeout: 'timeout',
        };
    };
    CreateFunctionResponseBody.types = function () {
        return {
            caPort: 'number',
            codeChecksum: 'string',
            codeSize: 'number',
            createdTime: 'string',
            customContainerConfig: CustomContainerConfig,
            customDNS: CustomDNS,
            customRuntimeConfig: CustomRuntimeConfig,
            description: 'string',
            environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            functionId: 'string',
            functionName: 'string',
            handler: 'string',
            initializationTimeout: 'number',
            initializer: 'string',
            instanceConcurrency: 'number',
            instanceLifecycleConfig: InstanceLifecycleConfig,
            instanceType: 'string',
            lastModifiedTime: 'string',
            layers: { 'type': 'array', 'itemType': 'string' },
            memorySize: 'number',
            runtime: 'string',
            timeout: 'number',
        };
    };
    return CreateFunctionResponseBody;
}($tea.Model));
exports.CreateFunctionResponseBody = CreateFunctionResponseBody;
var CreateFunctionResponse = /** @class */ (function (_super) {
    __extends(CreateFunctionResponse, _super);
    function CreateFunctionResponse(map) {
        return _super.call(this, map) || this;
    }
    CreateFunctionResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    CreateFunctionResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: CreateFunctionResponseBody,
        };
    };
    return CreateFunctionResponse;
}($tea.Model));
exports.CreateFunctionResponse = CreateFunctionResponse;
var CreateLayerVersionHeaders = /** @class */ (function (_super) {
    __extends(CreateLayerVersionHeaders, _super);
    function CreateLayerVersionHeaders(map) {
        return _super.call(this, map) || this;
    }
    CreateLayerVersionHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    CreateLayerVersionHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return CreateLayerVersionHeaders;
}($tea.Model));
exports.CreateLayerVersionHeaders = CreateLayerVersionHeaders;
var CreateLayerVersionRequest = /** @class */ (function (_super) {
    __extends(CreateLayerVersionRequest, _super);
    function CreateLayerVersionRequest(map) {
        return _super.call(this, map) || this;
    }
    CreateLayerVersionRequest.names = function () {
        return {
            code: 'Code',
            compatibleRuntime: 'compatibleRuntime',
            description: 'description',
        };
    };
    CreateLayerVersionRequest.types = function () {
        return {
            code: Code,
            compatibleRuntime: { 'type': 'array', 'itemType': 'string' },
            description: 'string',
        };
    };
    return CreateLayerVersionRequest;
}($tea.Model));
exports.CreateLayerVersionRequest = CreateLayerVersionRequest;
var CreateLayerVersionResponseBody = /** @class */ (function (_super) {
    __extends(CreateLayerVersionResponseBody, _super);
    function CreateLayerVersionResponseBody(map) {
        return _super.call(this, map) || this;
    }
    CreateLayerVersionResponseBody.names = function () {
        return {
            acl: 'acl',
            arn: 'arn',
            code: 'code',
            codeChecksum: 'codeChecksum',
            codesize: 'codesize',
            compatibleRuntime: 'compatibleRuntime',
            createTime: 'createTime',
            description: 'description',
            layerName: 'layerName',
            version: 'version',
        };
    };
    CreateLayerVersionResponseBody.types = function () {
        return {
            acl: 'number',
            arn: 'string',
            code: OutputCodeLocation,
            codeChecksum: 'string',
            codesize: 'number',
            compatibleRuntime: { 'type': 'array', 'itemType': 'string' },
            createTime: 'string',
            description: 'string',
            layerName: 'string',
            version: 'number',
        };
    };
    return CreateLayerVersionResponseBody;
}($tea.Model));
exports.CreateLayerVersionResponseBody = CreateLayerVersionResponseBody;
var CreateLayerVersionResponse = /** @class */ (function (_super) {
    __extends(CreateLayerVersionResponse, _super);
    function CreateLayerVersionResponse(map) {
        return _super.call(this, map) || this;
    }
    CreateLayerVersionResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    CreateLayerVersionResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: CreateLayerVersionResponseBody,
        };
    };
    return CreateLayerVersionResponse;
}($tea.Model));
exports.CreateLayerVersionResponse = CreateLayerVersionResponse;
var CreateServiceHeaders = /** @class */ (function (_super) {
    __extends(CreateServiceHeaders, _super);
    function CreateServiceHeaders(map) {
        return _super.call(this, map) || this;
    }
    CreateServiceHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    CreateServiceHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return CreateServiceHeaders;
}($tea.Model));
exports.CreateServiceHeaders = CreateServiceHeaders;
var CreateServiceRequest = /** @class */ (function (_super) {
    __extends(CreateServiceRequest, _super);
    function CreateServiceRequest(map) {
        return _super.call(this, map) || this;
    }
    CreateServiceRequest.names = function () {
        return {
            description: 'description',
            internetAccess: 'internetAccess',
            logConfig: 'logConfig',
            nasConfig: 'nasConfig',
            role: 'role',
            serviceName: 'serviceName',
            tracingConfig: 'tracingConfig',
            vpcConfig: 'vpcConfig',
        };
    };
    CreateServiceRequest.types = function () {
        return {
            description: 'string',
            internetAccess: 'boolean',
            logConfig: LogConfig,
            nasConfig: NASConfig,
            role: 'string',
            serviceName: 'string',
            tracingConfig: TracingConfig,
            vpcConfig: VPCConfig,
        };
    };
    return CreateServiceRequest;
}($tea.Model));
exports.CreateServiceRequest = CreateServiceRequest;
var CreateServiceResponseBody = /** @class */ (function (_super) {
    __extends(CreateServiceResponseBody, _super);
    function CreateServiceResponseBody(map) {
        return _super.call(this, map) || this;
    }
    CreateServiceResponseBody.names = function () {
        return {
            createdTime: 'createdTime',
            description: 'description',
            internetAccess: 'internetAccess',
            lastModifiedTime: 'lastModifiedTime',
            logConfig: 'logConfig',
            nasConfig: 'nasConfig',
            role: 'role',
            serviceId: 'serviceId',
            serviceName: 'serviceName',
            tracingConfig: 'tracingConfig',
            vpcConfig: 'vpcConfig',
        };
    };
    CreateServiceResponseBody.types = function () {
        return {
            createdTime: 'string',
            description: 'string',
            internetAccess: 'boolean',
            lastModifiedTime: 'string',
            logConfig: LogConfig,
            nasConfig: NASConfig,
            role: 'string',
            serviceId: 'string',
            serviceName: 'string',
            tracingConfig: TracingConfig,
            vpcConfig: VPCConfig,
        };
    };
    return CreateServiceResponseBody;
}($tea.Model));
exports.CreateServiceResponseBody = CreateServiceResponseBody;
var CreateServiceResponse = /** @class */ (function (_super) {
    __extends(CreateServiceResponse, _super);
    function CreateServiceResponse(map) {
        return _super.call(this, map) || this;
    }
    CreateServiceResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    CreateServiceResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: CreateServiceResponseBody,
        };
    };
    return CreateServiceResponse;
}($tea.Model));
exports.CreateServiceResponse = CreateServiceResponse;
var CreateTriggerHeaders = /** @class */ (function (_super) {
    __extends(CreateTriggerHeaders, _super);
    function CreateTriggerHeaders(map) {
        return _super.call(this, map) || this;
    }
    CreateTriggerHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    CreateTriggerHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return CreateTriggerHeaders;
}($tea.Model));
exports.CreateTriggerHeaders = CreateTriggerHeaders;
var CreateTriggerRequest = /** @class */ (function (_super) {
    __extends(CreateTriggerRequest, _super);
    function CreateTriggerRequest(map) {
        return _super.call(this, map) || this;
    }
    CreateTriggerRequest.names = function () {
        return {
            description: 'description',
            invocationRole: 'invocationRole',
            qualifier: 'qualifier',
            sourceArn: 'sourceArn',
            triggerConfig: 'triggerConfig',
            triggerName: 'triggerName',
            triggerType: 'triggerType',
        };
    };
    CreateTriggerRequest.types = function () {
        return {
            description: 'string',
            invocationRole: 'string',
            qualifier: 'string',
            sourceArn: 'string',
            triggerConfig: 'string',
            triggerName: 'string',
            triggerType: 'string',
        };
    };
    return CreateTriggerRequest;
}($tea.Model));
exports.CreateTriggerRequest = CreateTriggerRequest;
var CreateTriggerResponseBody = /** @class */ (function (_super) {
    __extends(CreateTriggerResponseBody, _super);
    function CreateTriggerResponseBody(map) {
        return _super.call(this, map) || this;
    }
    CreateTriggerResponseBody.names = function () {
        return {
            createdTime: 'createdTime',
            description: 'description',
            domainName: 'domainName',
            invocationRole: 'invocationRole',
            lastModifiedTime: 'lastModifiedTime',
            qualifier: 'qualifier',
            sourceArn: 'sourceArn',
            triggerConfig: 'triggerConfig',
            triggerId: 'triggerId',
            triggerName: 'triggerName',
            triggerType: 'triggerType',
        };
    };
    CreateTriggerResponseBody.types = function () {
        return {
            createdTime: 'string',
            description: 'string',
            domainName: 'string',
            invocationRole: 'string',
            lastModifiedTime: 'string',
            qualifier: 'string',
            sourceArn: 'string',
            triggerConfig: 'string',
            triggerId: 'string',
            triggerName: 'string',
            triggerType: 'string',
        };
    };
    return CreateTriggerResponseBody;
}($tea.Model));
exports.CreateTriggerResponseBody = CreateTriggerResponseBody;
var CreateTriggerResponse = /** @class */ (function (_super) {
    __extends(CreateTriggerResponse, _super);
    function CreateTriggerResponse(map) {
        return _super.call(this, map) || this;
    }
    CreateTriggerResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    CreateTriggerResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: CreateTriggerResponseBody,
        };
    };
    return CreateTriggerResponse;
}($tea.Model));
exports.CreateTriggerResponse = CreateTriggerResponse;
var CreateVpcBindingHeaders = /** @class */ (function (_super) {
    __extends(CreateVpcBindingHeaders, _super);
    function CreateVpcBindingHeaders(map) {
        return _super.call(this, map) || this;
    }
    CreateVpcBindingHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    CreateVpcBindingHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return CreateVpcBindingHeaders;
}($tea.Model));
exports.CreateVpcBindingHeaders = CreateVpcBindingHeaders;
var CreateVpcBindingRequest = /** @class */ (function (_super) {
    __extends(CreateVpcBindingRequest, _super);
    function CreateVpcBindingRequest(map) {
        return _super.call(this, map) || this;
    }
    CreateVpcBindingRequest.names = function () {
        return {
            vpcId: 'vpcId',
        };
    };
    CreateVpcBindingRequest.types = function () {
        return {
            vpcId: 'string',
        };
    };
    return CreateVpcBindingRequest;
}($tea.Model));
exports.CreateVpcBindingRequest = CreateVpcBindingRequest;
var CreateVpcBindingResponse = /** @class */ (function (_super) {
    __extends(CreateVpcBindingResponse, _super);
    function CreateVpcBindingResponse(map) {
        return _super.call(this, map) || this;
    }
    CreateVpcBindingResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    CreateVpcBindingResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return CreateVpcBindingResponse;
}($tea.Model));
exports.CreateVpcBindingResponse = CreateVpcBindingResponse;
var DeleteAliasHeaders = /** @class */ (function (_super) {
    __extends(DeleteAliasHeaders, _super);
    function DeleteAliasHeaders(map) {
        return _super.call(this, map) || this;
    }
    DeleteAliasHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            ifMatch: 'If-Match',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    DeleteAliasHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            ifMatch: 'string',
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return DeleteAliasHeaders;
}($tea.Model));
exports.DeleteAliasHeaders = DeleteAliasHeaders;
var DeleteAliasResponse = /** @class */ (function (_super) {
    __extends(DeleteAliasResponse, _super);
    function DeleteAliasResponse(map) {
        return _super.call(this, map) || this;
    }
    DeleteAliasResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    DeleteAliasResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return DeleteAliasResponse;
}($tea.Model));
exports.DeleteAliasResponse = DeleteAliasResponse;
var DeleteCustomDomainHeaders = /** @class */ (function (_super) {
    __extends(DeleteCustomDomainHeaders, _super);
    function DeleteCustomDomainHeaders(map) {
        return _super.call(this, map) || this;
    }
    DeleteCustomDomainHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    DeleteCustomDomainHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return DeleteCustomDomainHeaders;
}($tea.Model));
exports.DeleteCustomDomainHeaders = DeleteCustomDomainHeaders;
var DeleteCustomDomainResponse = /** @class */ (function (_super) {
    __extends(DeleteCustomDomainResponse, _super);
    function DeleteCustomDomainResponse(map) {
        return _super.call(this, map) || this;
    }
    DeleteCustomDomainResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    DeleteCustomDomainResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return DeleteCustomDomainResponse;
}($tea.Model));
exports.DeleteCustomDomainResponse = DeleteCustomDomainResponse;
var DeleteFunctionHeaders = /** @class */ (function (_super) {
    __extends(DeleteFunctionHeaders, _super);
    function DeleteFunctionHeaders(map) {
        return _super.call(this, map) || this;
    }
    DeleteFunctionHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            ifMatch: 'If-Match',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    DeleteFunctionHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            ifMatch: 'string',
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return DeleteFunctionHeaders;
}($tea.Model));
exports.DeleteFunctionHeaders = DeleteFunctionHeaders;
var DeleteFunctionResponse = /** @class */ (function (_super) {
    __extends(DeleteFunctionResponse, _super);
    function DeleteFunctionResponse(map) {
        return _super.call(this, map) || this;
    }
    DeleteFunctionResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    DeleteFunctionResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return DeleteFunctionResponse;
}($tea.Model));
exports.DeleteFunctionResponse = DeleteFunctionResponse;
var DeleteFunctionAsyncInvokeConfigHeaders = /** @class */ (function (_super) {
    __extends(DeleteFunctionAsyncInvokeConfigHeaders, _super);
    function DeleteFunctionAsyncInvokeConfigHeaders(map) {
        return _super.call(this, map) || this;
    }
    DeleteFunctionAsyncInvokeConfigHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    DeleteFunctionAsyncInvokeConfigHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return DeleteFunctionAsyncInvokeConfigHeaders;
}($tea.Model));
exports.DeleteFunctionAsyncInvokeConfigHeaders = DeleteFunctionAsyncInvokeConfigHeaders;
var DeleteFunctionAsyncInvokeConfigRequest = /** @class */ (function (_super) {
    __extends(DeleteFunctionAsyncInvokeConfigRequest, _super);
    function DeleteFunctionAsyncInvokeConfigRequest(map) {
        return _super.call(this, map) || this;
    }
    DeleteFunctionAsyncInvokeConfigRequest.names = function () {
        return {
            qualifier: 'qualifier',
        };
    };
    DeleteFunctionAsyncInvokeConfigRequest.types = function () {
        return {
            qualifier: 'string',
        };
    };
    return DeleteFunctionAsyncInvokeConfigRequest;
}($tea.Model));
exports.DeleteFunctionAsyncInvokeConfigRequest = DeleteFunctionAsyncInvokeConfigRequest;
var DeleteFunctionAsyncInvokeConfigResponse = /** @class */ (function (_super) {
    __extends(DeleteFunctionAsyncInvokeConfigResponse, _super);
    function DeleteFunctionAsyncInvokeConfigResponse(map) {
        return _super.call(this, map) || this;
    }
    DeleteFunctionAsyncInvokeConfigResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    DeleteFunctionAsyncInvokeConfigResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return DeleteFunctionAsyncInvokeConfigResponse;
}($tea.Model));
exports.DeleteFunctionAsyncInvokeConfigResponse = DeleteFunctionAsyncInvokeConfigResponse;
var DeleteFunctionOnDemandConfigHeaders = /** @class */ (function (_super) {
    __extends(DeleteFunctionOnDemandConfigHeaders, _super);
    function DeleteFunctionOnDemandConfigHeaders(map) {
        return _super.call(this, map) || this;
    }
    DeleteFunctionOnDemandConfigHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            ifMatch: 'If-Match',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    DeleteFunctionOnDemandConfigHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            ifMatch: 'string',
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return DeleteFunctionOnDemandConfigHeaders;
}($tea.Model));
exports.DeleteFunctionOnDemandConfigHeaders = DeleteFunctionOnDemandConfigHeaders;
var DeleteFunctionOnDemandConfigRequest = /** @class */ (function (_super) {
    __extends(DeleteFunctionOnDemandConfigRequest, _super);
    function DeleteFunctionOnDemandConfigRequest(map) {
        return _super.call(this, map) || this;
    }
    DeleteFunctionOnDemandConfigRequest.names = function () {
        return {
            qualifier: 'qualifier',
        };
    };
    DeleteFunctionOnDemandConfigRequest.types = function () {
        return {
            qualifier: 'string',
        };
    };
    return DeleteFunctionOnDemandConfigRequest;
}($tea.Model));
exports.DeleteFunctionOnDemandConfigRequest = DeleteFunctionOnDemandConfigRequest;
var DeleteFunctionOnDemandConfigResponse = /** @class */ (function (_super) {
    __extends(DeleteFunctionOnDemandConfigResponse, _super);
    function DeleteFunctionOnDemandConfigResponse(map) {
        return _super.call(this, map) || this;
    }
    DeleteFunctionOnDemandConfigResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    DeleteFunctionOnDemandConfigResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return DeleteFunctionOnDemandConfigResponse;
}($tea.Model));
exports.DeleteFunctionOnDemandConfigResponse = DeleteFunctionOnDemandConfigResponse;
var DeleteLayerVersionHeaders = /** @class */ (function (_super) {
    __extends(DeleteLayerVersionHeaders, _super);
    function DeleteLayerVersionHeaders(map) {
        return _super.call(this, map) || this;
    }
    DeleteLayerVersionHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    DeleteLayerVersionHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return DeleteLayerVersionHeaders;
}($tea.Model));
exports.DeleteLayerVersionHeaders = DeleteLayerVersionHeaders;
var DeleteLayerVersionResponse = /** @class */ (function (_super) {
    __extends(DeleteLayerVersionResponse, _super);
    function DeleteLayerVersionResponse(map) {
        return _super.call(this, map) || this;
    }
    DeleteLayerVersionResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    DeleteLayerVersionResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return DeleteLayerVersionResponse;
}($tea.Model));
exports.DeleteLayerVersionResponse = DeleteLayerVersionResponse;
var DeleteServiceHeaders = /** @class */ (function (_super) {
    __extends(DeleteServiceHeaders, _super);
    function DeleteServiceHeaders(map) {
        return _super.call(this, map) || this;
    }
    DeleteServiceHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            ifMatch: 'If-Match',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    DeleteServiceHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            ifMatch: 'string',
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return DeleteServiceHeaders;
}($tea.Model));
exports.DeleteServiceHeaders = DeleteServiceHeaders;
var DeleteServiceResponse = /** @class */ (function (_super) {
    __extends(DeleteServiceResponse, _super);
    function DeleteServiceResponse(map) {
        return _super.call(this, map) || this;
    }
    DeleteServiceResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    DeleteServiceResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return DeleteServiceResponse;
}($tea.Model));
exports.DeleteServiceResponse = DeleteServiceResponse;
var DeleteServiceVersionHeaders = /** @class */ (function (_super) {
    __extends(DeleteServiceVersionHeaders, _super);
    function DeleteServiceVersionHeaders(map) {
        return _super.call(this, map) || this;
    }
    DeleteServiceVersionHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    DeleteServiceVersionHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return DeleteServiceVersionHeaders;
}($tea.Model));
exports.DeleteServiceVersionHeaders = DeleteServiceVersionHeaders;
var DeleteServiceVersionResponse = /** @class */ (function (_super) {
    __extends(DeleteServiceVersionResponse, _super);
    function DeleteServiceVersionResponse(map) {
        return _super.call(this, map) || this;
    }
    DeleteServiceVersionResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    DeleteServiceVersionResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return DeleteServiceVersionResponse;
}($tea.Model));
exports.DeleteServiceVersionResponse = DeleteServiceVersionResponse;
var DeleteTriggerHeaders = /** @class */ (function (_super) {
    __extends(DeleteTriggerHeaders, _super);
    function DeleteTriggerHeaders(map) {
        return _super.call(this, map) || this;
    }
    DeleteTriggerHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            ifMatch: 'If-Match',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    DeleteTriggerHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            ifMatch: 'string',
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return DeleteTriggerHeaders;
}($tea.Model));
exports.DeleteTriggerHeaders = DeleteTriggerHeaders;
var DeleteTriggerResponse = /** @class */ (function (_super) {
    __extends(DeleteTriggerResponse, _super);
    function DeleteTriggerResponse(map) {
        return _super.call(this, map) || this;
    }
    DeleteTriggerResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    DeleteTriggerResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return DeleteTriggerResponse;
}($tea.Model));
exports.DeleteTriggerResponse = DeleteTriggerResponse;
var DeleteVpcBindingHeaders = /** @class */ (function (_super) {
    __extends(DeleteVpcBindingHeaders, _super);
    function DeleteVpcBindingHeaders(map) {
        return _super.call(this, map) || this;
    }
    DeleteVpcBindingHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    DeleteVpcBindingHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return DeleteVpcBindingHeaders;
}($tea.Model));
exports.DeleteVpcBindingHeaders = DeleteVpcBindingHeaders;
var DeleteVpcBindingResponse = /** @class */ (function (_super) {
    __extends(DeleteVpcBindingResponse, _super);
    function DeleteVpcBindingResponse(map) {
        return _super.call(this, map) || this;
    }
    DeleteVpcBindingResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    DeleteVpcBindingResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return DeleteVpcBindingResponse;
}($tea.Model));
exports.DeleteVpcBindingResponse = DeleteVpcBindingResponse;
var DeregisterEventSourceHeaders = /** @class */ (function (_super) {
    __extends(DeregisterEventSourceHeaders, _super);
    function DeregisterEventSourceHeaders(map) {
        return _super.call(this, map) || this;
    }
    DeregisterEventSourceHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    DeregisterEventSourceHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return DeregisterEventSourceHeaders;
}($tea.Model));
exports.DeregisterEventSourceHeaders = DeregisterEventSourceHeaders;
var DeregisterEventSourceRequest = /** @class */ (function (_super) {
    __extends(DeregisterEventSourceRequest, _super);
    function DeregisterEventSourceRequest(map) {
        return _super.call(this, map) || this;
    }
    DeregisterEventSourceRequest.names = function () {
        return {
            qualifier: 'qualifier',
        };
    };
    DeregisterEventSourceRequest.types = function () {
        return {
            qualifier: 'string',
        };
    };
    return DeregisterEventSourceRequest;
}($tea.Model));
exports.DeregisterEventSourceRequest = DeregisterEventSourceRequest;
var DeregisterEventSourceResponse = /** @class */ (function (_super) {
    __extends(DeregisterEventSourceResponse, _super);
    function DeregisterEventSourceResponse(map) {
        return _super.call(this, map) || this;
    }
    DeregisterEventSourceResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    DeregisterEventSourceResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return DeregisterEventSourceResponse;
}($tea.Model));
exports.DeregisterEventSourceResponse = DeregisterEventSourceResponse;
var GetAccountSettingsHeaders = /** @class */ (function (_super) {
    __extends(GetAccountSettingsHeaders, _super);
    function GetAccountSettingsHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetAccountSettingsHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetAccountSettingsHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetAccountSettingsHeaders;
}($tea.Model));
exports.GetAccountSettingsHeaders = GetAccountSettingsHeaders;
var GetAccountSettingsResponseBody = /** @class */ (function (_super) {
    __extends(GetAccountSettingsResponseBody, _super);
    function GetAccountSettingsResponseBody(map) {
        return _super.call(this, map) || this;
    }
    GetAccountSettingsResponseBody.names = function () {
        return {
            availableAZs: 'availableAZs',
        };
    };
    GetAccountSettingsResponseBody.types = function () {
        return {
            availableAZs: { 'type': 'array', 'itemType': 'string' },
        };
    };
    return GetAccountSettingsResponseBody;
}($tea.Model));
exports.GetAccountSettingsResponseBody = GetAccountSettingsResponseBody;
var GetAccountSettingsResponse = /** @class */ (function (_super) {
    __extends(GetAccountSettingsResponse, _super);
    function GetAccountSettingsResponse(map) {
        return _super.call(this, map) || this;
    }
    GetAccountSettingsResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetAccountSettingsResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: GetAccountSettingsResponseBody,
        };
    };
    return GetAccountSettingsResponse;
}($tea.Model));
exports.GetAccountSettingsResponse = GetAccountSettingsResponse;
var GetAliasHeaders = /** @class */ (function (_super) {
    __extends(GetAliasHeaders, _super);
    function GetAliasHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetAliasHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetAliasHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetAliasHeaders;
}($tea.Model));
exports.GetAliasHeaders = GetAliasHeaders;
var GetAliasResponseBody = /** @class */ (function (_super) {
    __extends(GetAliasResponseBody, _super);
    function GetAliasResponseBody(map) {
        return _super.call(this, map) || this;
    }
    GetAliasResponseBody.names = function () {
        return {
            additionalVersionWeight: 'additionalVersionWeight',
            aliasName: 'aliasName',
            createdTime: 'createdTime',
            description: 'description',
            lastModifiedTime: 'lastModifiedTime',
            versionId: 'versionId',
        };
    };
    GetAliasResponseBody.types = function () {
        return {
            additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
            aliasName: 'string',
            createdTime: 'string',
            description: 'string',
            lastModifiedTime: 'string',
            versionId: 'string',
        };
    };
    return GetAliasResponseBody;
}($tea.Model));
exports.GetAliasResponseBody = GetAliasResponseBody;
var GetAliasResponse = /** @class */ (function (_super) {
    __extends(GetAliasResponse, _super);
    function GetAliasResponse(map) {
        return _super.call(this, map) || this;
    }
    GetAliasResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetAliasResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: GetAliasResponseBody,
        };
    };
    return GetAliasResponse;
}($tea.Model));
exports.GetAliasResponse = GetAliasResponse;
var GetCustomDomainHeaders = /** @class */ (function (_super) {
    __extends(GetCustomDomainHeaders, _super);
    function GetCustomDomainHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetCustomDomainHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetCustomDomainHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetCustomDomainHeaders;
}($tea.Model));
exports.GetCustomDomainHeaders = GetCustomDomainHeaders;
var GetCustomDomainResponseBody = /** @class */ (function (_super) {
    __extends(GetCustomDomainResponseBody, _super);
    function GetCustomDomainResponseBody(map) {
        return _super.call(this, map) || this;
    }
    GetCustomDomainResponseBody.names = function () {
        return {
            accountId: 'accountId',
            apiVersion: 'apiVersion',
            certConfig: 'certConfig',
            createdTime: 'createdTime',
            domainName: 'domainName',
            lastModifiedTime: 'lastModifiedTime',
            protocol: 'protocol',
            routeConfig: 'routeConfig',
        };
    };
    GetCustomDomainResponseBody.types = function () {
        return {
            accountId: 'string',
            apiVersion: 'string',
            certConfig: CertConfig,
            createdTime: 'string',
            domainName: 'string',
            lastModifiedTime: 'string',
            protocol: 'string',
            routeConfig: RouteConfig,
        };
    };
    return GetCustomDomainResponseBody;
}($tea.Model));
exports.GetCustomDomainResponseBody = GetCustomDomainResponseBody;
var GetCustomDomainResponse = /** @class */ (function (_super) {
    __extends(GetCustomDomainResponse, _super);
    function GetCustomDomainResponse(map) {
        return _super.call(this, map) || this;
    }
    GetCustomDomainResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetCustomDomainResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: GetCustomDomainResponseBody,
        };
    };
    return GetCustomDomainResponse;
}($tea.Model));
exports.GetCustomDomainResponse = GetCustomDomainResponse;
var GetFunctionHeaders = /** @class */ (function (_super) {
    __extends(GetFunctionHeaders, _super);
    function GetFunctionHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetFunctionHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetFunctionHeaders;
}($tea.Model));
exports.GetFunctionHeaders = GetFunctionHeaders;
var GetFunctionRequest = /** @class */ (function (_super) {
    __extends(GetFunctionRequest, _super);
    function GetFunctionRequest(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionRequest.names = function () {
        return {
            qualifier: 'qualifier',
        };
    };
    GetFunctionRequest.types = function () {
        return {
            qualifier: 'string',
        };
    };
    return GetFunctionRequest;
}($tea.Model));
exports.GetFunctionRequest = GetFunctionRequest;
var GetFunctionResponseBody = /** @class */ (function (_super) {
    __extends(GetFunctionResponseBody, _super);
    function GetFunctionResponseBody(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionResponseBody.names = function () {
        return {
            caPort: 'caPort',
            codeChecksum: 'codeChecksum',
            codeSize: 'codeSize',
            createdTime: 'createdTime',
            customContainerConfig: 'customContainerConfig',
            customDNS: 'customDNS',
            customRuntimeConfig: 'customRuntimeConfig',
            description: 'description',
            environmentVariables: 'environmentVariables',
            functionId: 'functionId',
            functionName: 'functionName',
            handler: 'handler',
            initializationTimeout: 'initializationTimeout',
            initializer: 'initializer',
            instanceConcurrency: 'instanceConcurrency',
            instanceLifecycleConfig: 'instanceLifecycleConfig',
            instanceType: 'instanceType',
            lastModifiedTime: 'lastModifiedTime',
            layers: 'layers',
            memorySize: 'memorySize',
            runtime: 'runtime',
            timeout: 'timeout',
        };
    };
    GetFunctionResponseBody.types = function () {
        return {
            caPort: 'number',
            codeChecksum: 'string',
            codeSize: 'number',
            createdTime: 'string',
            customContainerConfig: CustomContainerConfigInfo,
            customDNS: CustomDNS,
            customRuntimeConfig: CustomRuntimeConfig,
            description: 'string',
            environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            functionId: 'string',
            functionName: 'string',
            handler: 'string',
            initializationTimeout: 'number',
            initializer: 'string',
            instanceConcurrency: 'number',
            instanceLifecycleConfig: InstanceLifecycleConfig,
            instanceType: 'string',
            lastModifiedTime: 'string',
            layers: { 'type': 'array', 'itemType': 'string' },
            memorySize: 'number',
            runtime: 'string',
            timeout: 'number',
        };
    };
    return GetFunctionResponseBody;
}($tea.Model));
exports.GetFunctionResponseBody = GetFunctionResponseBody;
var GetFunctionResponse = /** @class */ (function (_super) {
    __extends(GetFunctionResponse, _super);
    function GetFunctionResponse(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetFunctionResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: GetFunctionResponseBody,
        };
    };
    return GetFunctionResponse;
}($tea.Model));
exports.GetFunctionResponse = GetFunctionResponse;
var GetFunctionAsyncInvokeConfigHeaders = /** @class */ (function (_super) {
    __extends(GetFunctionAsyncInvokeConfigHeaders, _super);
    function GetFunctionAsyncInvokeConfigHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionAsyncInvokeConfigHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetFunctionAsyncInvokeConfigHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetFunctionAsyncInvokeConfigHeaders;
}($tea.Model));
exports.GetFunctionAsyncInvokeConfigHeaders = GetFunctionAsyncInvokeConfigHeaders;
var GetFunctionAsyncInvokeConfigRequest = /** @class */ (function (_super) {
    __extends(GetFunctionAsyncInvokeConfigRequest, _super);
    function GetFunctionAsyncInvokeConfigRequest(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionAsyncInvokeConfigRequest.names = function () {
        return {
            qualifier: 'qualifier',
        };
    };
    GetFunctionAsyncInvokeConfigRequest.types = function () {
        return {
            qualifier: 'string',
        };
    };
    return GetFunctionAsyncInvokeConfigRequest;
}($tea.Model));
exports.GetFunctionAsyncInvokeConfigRequest = GetFunctionAsyncInvokeConfigRequest;
var GetFunctionAsyncInvokeConfigResponseBody = /** @class */ (function (_super) {
    __extends(GetFunctionAsyncInvokeConfigResponseBody, _super);
    function GetFunctionAsyncInvokeConfigResponseBody(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionAsyncInvokeConfigResponseBody.names = function () {
        return {
            createdTime: 'createdTime',
            destinationConfig: 'destinationConfig',
            function: 'function',
            lastModifiedTime: 'lastModifiedTime',
            maxAsyncEventAgeInSeconds: 'maxAsyncEventAgeInSeconds',
            maxAsyncRetryAttempts: 'maxAsyncRetryAttempts',
            qualifier: 'qualifier',
            service: 'service',
            statefulInvocation: 'statefulInvocation',
        };
    };
    GetFunctionAsyncInvokeConfigResponseBody.types = function () {
        return {
            createdTime: 'string',
            destinationConfig: DestinationConfig,
            function: 'string',
            lastModifiedTime: 'string',
            maxAsyncEventAgeInSeconds: 'number',
            maxAsyncRetryAttempts: 'number',
            qualifier: 'string',
            service: 'string',
            statefulInvocation: 'boolean',
        };
    };
    return GetFunctionAsyncInvokeConfigResponseBody;
}($tea.Model));
exports.GetFunctionAsyncInvokeConfigResponseBody = GetFunctionAsyncInvokeConfigResponseBody;
var GetFunctionAsyncInvokeConfigResponse = /** @class */ (function (_super) {
    __extends(GetFunctionAsyncInvokeConfigResponse, _super);
    function GetFunctionAsyncInvokeConfigResponse(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionAsyncInvokeConfigResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetFunctionAsyncInvokeConfigResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: GetFunctionAsyncInvokeConfigResponseBody,
        };
    };
    return GetFunctionAsyncInvokeConfigResponse;
}($tea.Model));
exports.GetFunctionAsyncInvokeConfigResponse = GetFunctionAsyncInvokeConfigResponse;
var GetFunctionCodeHeaders = /** @class */ (function (_super) {
    __extends(GetFunctionCodeHeaders, _super);
    function GetFunctionCodeHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionCodeHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetFunctionCodeHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetFunctionCodeHeaders;
}($tea.Model));
exports.GetFunctionCodeHeaders = GetFunctionCodeHeaders;
var GetFunctionCodeRequest = /** @class */ (function (_super) {
    __extends(GetFunctionCodeRequest, _super);
    function GetFunctionCodeRequest(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionCodeRequest.names = function () {
        return {
            qualifier: 'qualifier',
        };
    };
    GetFunctionCodeRequest.types = function () {
        return {
            qualifier: 'string',
        };
    };
    return GetFunctionCodeRequest;
}($tea.Model));
exports.GetFunctionCodeRequest = GetFunctionCodeRequest;
var GetFunctionCodeResponseBody = /** @class */ (function (_super) {
    __extends(GetFunctionCodeResponseBody, _super);
    function GetFunctionCodeResponseBody(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionCodeResponseBody.names = function () {
        return {
            checksum: 'checksum',
            url: 'url',
        };
    };
    GetFunctionCodeResponseBody.types = function () {
        return {
            checksum: 'string',
            url: 'string',
        };
    };
    return GetFunctionCodeResponseBody;
}($tea.Model));
exports.GetFunctionCodeResponseBody = GetFunctionCodeResponseBody;
var GetFunctionCodeResponse = /** @class */ (function (_super) {
    __extends(GetFunctionCodeResponse, _super);
    function GetFunctionCodeResponse(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionCodeResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetFunctionCodeResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: GetFunctionCodeResponseBody,
        };
    };
    return GetFunctionCodeResponse;
}($tea.Model));
exports.GetFunctionCodeResponse = GetFunctionCodeResponse;
var GetFunctionOnDemandConfigHeaders = /** @class */ (function (_super) {
    __extends(GetFunctionOnDemandConfigHeaders, _super);
    function GetFunctionOnDemandConfigHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionOnDemandConfigHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetFunctionOnDemandConfigHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetFunctionOnDemandConfigHeaders;
}($tea.Model));
exports.GetFunctionOnDemandConfigHeaders = GetFunctionOnDemandConfigHeaders;
var GetFunctionOnDemandConfigRequest = /** @class */ (function (_super) {
    __extends(GetFunctionOnDemandConfigRequest, _super);
    function GetFunctionOnDemandConfigRequest(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionOnDemandConfigRequest.names = function () {
        return {
            qualifier: 'qualifier',
        };
    };
    GetFunctionOnDemandConfigRequest.types = function () {
        return {
            qualifier: 'string',
        };
    };
    return GetFunctionOnDemandConfigRequest;
}($tea.Model));
exports.GetFunctionOnDemandConfigRequest = GetFunctionOnDemandConfigRequest;
var GetFunctionOnDemandConfigResponseBody = /** @class */ (function (_super) {
    __extends(GetFunctionOnDemandConfigResponseBody, _super);
    function GetFunctionOnDemandConfigResponseBody(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionOnDemandConfigResponseBody.names = function () {
        return {
            maximumInstanceCount: 'maximumInstanceCount',
            resource: 'resource',
        };
    };
    GetFunctionOnDemandConfigResponseBody.types = function () {
        return {
            maximumInstanceCount: 'number',
            resource: 'string',
        };
    };
    return GetFunctionOnDemandConfigResponseBody;
}($tea.Model));
exports.GetFunctionOnDemandConfigResponseBody = GetFunctionOnDemandConfigResponseBody;
var GetFunctionOnDemandConfigResponse = /** @class */ (function (_super) {
    __extends(GetFunctionOnDemandConfigResponse, _super);
    function GetFunctionOnDemandConfigResponse(map) {
        return _super.call(this, map) || this;
    }
    GetFunctionOnDemandConfigResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetFunctionOnDemandConfigResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: GetFunctionOnDemandConfigResponseBody,
        };
    };
    return GetFunctionOnDemandConfigResponse;
}($tea.Model));
exports.GetFunctionOnDemandConfigResponse = GetFunctionOnDemandConfigResponse;
var GetLayerVersionHeaders = /** @class */ (function (_super) {
    __extends(GetLayerVersionHeaders, _super);
    function GetLayerVersionHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetLayerVersionHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetLayerVersionHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetLayerVersionHeaders;
}($tea.Model));
exports.GetLayerVersionHeaders = GetLayerVersionHeaders;
var GetLayerVersionResponse = /** @class */ (function (_super) {
    __extends(GetLayerVersionResponse, _super);
    function GetLayerVersionResponse(map) {
        return _super.call(this, map) || this;
    }
    GetLayerVersionResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetLayerVersionResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: Layer,
        };
    };
    return GetLayerVersionResponse;
}($tea.Model));
exports.GetLayerVersionResponse = GetLayerVersionResponse;
var GetLayerVersionByArnHeaders = /** @class */ (function (_super) {
    __extends(GetLayerVersionByArnHeaders, _super);
    function GetLayerVersionByArnHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetLayerVersionByArnHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetLayerVersionByArnHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetLayerVersionByArnHeaders;
}($tea.Model));
exports.GetLayerVersionByArnHeaders = GetLayerVersionByArnHeaders;
var GetLayerVersionByArnResponseBody = /** @class */ (function (_super) {
    __extends(GetLayerVersionByArnResponseBody, _super);
    function GetLayerVersionByArnResponseBody(map) {
        return _super.call(this, map) || this;
    }
    GetLayerVersionByArnResponseBody.names = function () {
        return {
            acl: 'acl',
            arn: 'arn',
            code: 'code',
            codeChecksum: 'codeChecksum',
            codesize: 'codesize',
            compatibleRuntime: 'compatibleRuntime',
            createTime: 'createTime',
            description: 'description',
            layerName: 'layerName',
            version: 'version',
        };
    };
    GetLayerVersionByArnResponseBody.types = function () {
        return {
            acl: 'number',
            arn: 'string',
            code: OutputCodeLocation,
            codeChecksum: 'string',
            codesize: 'number',
            compatibleRuntime: { 'type': 'array', 'itemType': 'string' },
            createTime: 'string',
            description: 'string',
            layerName: 'string',
            version: 'number',
        };
    };
    return GetLayerVersionByArnResponseBody;
}($tea.Model));
exports.GetLayerVersionByArnResponseBody = GetLayerVersionByArnResponseBody;
var GetLayerVersionByArnResponse = /** @class */ (function (_super) {
    __extends(GetLayerVersionByArnResponse, _super);
    function GetLayerVersionByArnResponse(map) {
        return _super.call(this, map) || this;
    }
    GetLayerVersionByArnResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetLayerVersionByArnResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: GetLayerVersionByArnResponseBody,
        };
    };
    return GetLayerVersionByArnResponse;
}($tea.Model));
exports.GetLayerVersionByArnResponse = GetLayerVersionByArnResponse;
var GetProvisionConfigHeaders = /** @class */ (function (_super) {
    __extends(GetProvisionConfigHeaders, _super);
    function GetProvisionConfigHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetProvisionConfigHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetProvisionConfigHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetProvisionConfigHeaders;
}($tea.Model));
exports.GetProvisionConfigHeaders = GetProvisionConfigHeaders;
var GetProvisionConfigRequest = /** @class */ (function (_super) {
    __extends(GetProvisionConfigRequest, _super);
    function GetProvisionConfigRequest(map) {
        return _super.call(this, map) || this;
    }
    GetProvisionConfigRequest.names = function () {
        return {
            qualifier: 'qualifier',
        };
    };
    GetProvisionConfigRequest.types = function () {
        return {
            qualifier: 'string',
        };
    };
    return GetProvisionConfigRequest;
}($tea.Model));
exports.GetProvisionConfigRequest = GetProvisionConfigRequest;
var GetProvisionConfigResponseBody = /** @class */ (function (_super) {
    __extends(GetProvisionConfigResponseBody, _super);
    function GetProvisionConfigResponseBody(map) {
        return _super.call(this, map) || this;
    }
    GetProvisionConfigResponseBody.names = function () {
        return {
            current: 'current',
            currentError: 'currentError',
            resource: 'resource',
            scheduledActions: 'scheduledActions',
            target: 'target',
            targetTrackingPolicies: 'targetTrackingPolicies',
        };
    };
    GetProvisionConfigResponseBody.types = function () {
        return {
            current: 'number',
            currentError: 'string',
            resource: 'string',
            scheduledActions: { 'type': 'array', 'itemType': ScheduledActions },
            target: 'number',
            targetTrackingPolicies: { 'type': 'array', 'itemType': TargetTrackingPolicies },
        };
    };
    return GetProvisionConfigResponseBody;
}($tea.Model));
exports.GetProvisionConfigResponseBody = GetProvisionConfigResponseBody;
var GetProvisionConfigResponse = /** @class */ (function (_super) {
    __extends(GetProvisionConfigResponse, _super);
    function GetProvisionConfigResponse(map) {
        return _super.call(this, map) || this;
    }
    GetProvisionConfigResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetProvisionConfigResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: GetProvisionConfigResponseBody,
        };
    };
    return GetProvisionConfigResponse;
}($tea.Model));
exports.GetProvisionConfigResponse = GetProvisionConfigResponse;
var GetResourceTagsHeaders = /** @class */ (function (_super) {
    __extends(GetResourceTagsHeaders, _super);
    function GetResourceTagsHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetResourceTagsHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetResourceTagsHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetResourceTagsHeaders;
}($tea.Model));
exports.GetResourceTagsHeaders = GetResourceTagsHeaders;
var GetResourceTagsRequest = /** @class */ (function (_super) {
    __extends(GetResourceTagsRequest, _super);
    function GetResourceTagsRequest(map) {
        return _super.call(this, map) || this;
    }
    GetResourceTagsRequest.names = function () {
        return {
            resourceArn: 'resourceArn',
        };
    };
    GetResourceTagsRequest.types = function () {
        return {
            resourceArn: 'string',
        };
    };
    return GetResourceTagsRequest;
}($tea.Model));
exports.GetResourceTagsRequest = GetResourceTagsRequest;
var GetResourceTagsResponseBody = /** @class */ (function (_super) {
    __extends(GetResourceTagsResponseBody, _super);
    function GetResourceTagsResponseBody(map) {
        return _super.call(this, map) || this;
    }
    GetResourceTagsResponseBody.names = function () {
        return {
            resourceArn: 'resourceArn',
            tags: 'tags',
        };
    };
    GetResourceTagsResponseBody.types = function () {
        return {
            resourceArn: 'string',
            tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return GetResourceTagsResponseBody;
}($tea.Model));
exports.GetResourceTagsResponseBody = GetResourceTagsResponseBody;
var GetResourceTagsResponse = /** @class */ (function (_super) {
    __extends(GetResourceTagsResponse, _super);
    function GetResourceTagsResponse(map) {
        return _super.call(this, map) || this;
    }
    GetResourceTagsResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetResourceTagsResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: GetResourceTagsResponseBody,
        };
    };
    return GetResourceTagsResponse;
}($tea.Model));
exports.GetResourceTagsResponse = GetResourceTagsResponse;
var GetServiceHeaders = /** @class */ (function (_super) {
    __extends(GetServiceHeaders, _super);
    function GetServiceHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetServiceHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetServiceHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetServiceHeaders;
}($tea.Model));
exports.GetServiceHeaders = GetServiceHeaders;
var GetServiceRequest = /** @class */ (function (_super) {
    __extends(GetServiceRequest, _super);
    function GetServiceRequest(map) {
        return _super.call(this, map) || this;
    }
    GetServiceRequest.names = function () {
        return {
            qualifier: 'qualifier',
        };
    };
    GetServiceRequest.types = function () {
        return {
            qualifier: 'string',
        };
    };
    return GetServiceRequest;
}($tea.Model));
exports.GetServiceRequest = GetServiceRequest;
var GetServiceResponseBody = /** @class */ (function (_super) {
    __extends(GetServiceResponseBody, _super);
    function GetServiceResponseBody(map) {
        return _super.call(this, map) || this;
    }
    GetServiceResponseBody.names = function () {
        return {
            createdTime: 'createdTime',
            description: 'description',
            internetAccess: 'internetAccess',
            lastModifiedTime: 'lastModifiedTime',
            logConfig: 'logConfig',
            nasConfig: 'nasConfig',
            role: 'role',
            serviceId: 'serviceId',
            serviceName: 'serviceName',
            tracingConfig: 'tracingConfig',
            vpcConfig: 'vpcConfig',
        };
    };
    GetServiceResponseBody.types = function () {
        return {
            createdTime: 'string',
            description: 'string',
            internetAccess: 'boolean',
            lastModifiedTime: 'string',
            logConfig: LogConfig,
            nasConfig: NASConfig,
            role: 'string',
            serviceId: 'string',
            serviceName: 'string',
            tracingConfig: TracingConfig,
            vpcConfig: VPCConfig,
        };
    };
    return GetServiceResponseBody;
}($tea.Model));
exports.GetServiceResponseBody = GetServiceResponseBody;
var GetServiceResponse = /** @class */ (function (_super) {
    __extends(GetServiceResponse, _super);
    function GetServiceResponse(map) {
        return _super.call(this, map) || this;
    }
    GetServiceResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetServiceResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: GetServiceResponseBody,
        };
    };
    return GetServiceResponse;
}($tea.Model));
exports.GetServiceResponse = GetServiceResponse;
var GetStatefulAsyncInvocationHeaders = /** @class */ (function (_super) {
    __extends(GetStatefulAsyncInvocationHeaders, _super);
    function GetStatefulAsyncInvocationHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetStatefulAsyncInvocationHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetStatefulAsyncInvocationHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetStatefulAsyncInvocationHeaders;
}($tea.Model));
exports.GetStatefulAsyncInvocationHeaders = GetStatefulAsyncInvocationHeaders;
var GetStatefulAsyncInvocationRequest = /** @class */ (function (_super) {
    __extends(GetStatefulAsyncInvocationRequest, _super);
    function GetStatefulAsyncInvocationRequest(map) {
        return _super.call(this, map) || this;
    }
    GetStatefulAsyncInvocationRequest.names = function () {
        return {
            qualifier: 'qualifier',
        };
    };
    GetStatefulAsyncInvocationRequest.types = function () {
        return {
            qualifier: 'string',
        };
    };
    return GetStatefulAsyncInvocationRequest;
}($tea.Model));
exports.GetStatefulAsyncInvocationRequest = GetStatefulAsyncInvocationRequest;
var GetStatefulAsyncInvocationResponse = /** @class */ (function (_super) {
    __extends(GetStatefulAsyncInvocationResponse, _super);
    function GetStatefulAsyncInvocationResponse(map) {
        return _super.call(this, map) || this;
    }
    GetStatefulAsyncInvocationResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetStatefulAsyncInvocationResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: StatefulAsyncInvocation,
        };
    };
    return GetStatefulAsyncInvocationResponse;
}($tea.Model));
exports.GetStatefulAsyncInvocationResponse = GetStatefulAsyncInvocationResponse;
var GetTriggerHeaders = /** @class */ (function (_super) {
    __extends(GetTriggerHeaders, _super);
    function GetTriggerHeaders(map) {
        return _super.call(this, map) || this;
    }
    GetTriggerHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    GetTriggerHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return GetTriggerHeaders;
}($tea.Model));
exports.GetTriggerHeaders = GetTriggerHeaders;
var GetTriggerResponseBody = /** @class */ (function (_super) {
    __extends(GetTriggerResponseBody, _super);
    function GetTriggerResponseBody(map) {
        return _super.call(this, map) || this;
    }
    GetTriggerResponseBody.names = function () {
        return {
            createdTime: 'createdTime',
            description: 'description',
            domainName: 'domainName',
            invocationRole: 'invocationRole',
            lastModifiedTime: 'lastModifiedTime',
            qualifier: 'qualifier',
            sourceArn: 'sourceArn',
            triggerConfig: 'triggerConfig',
            triggerId: 'triggerId',
            triggerName: 'triggerName',
            triggerType: 'triggerType',
        };
    };
    GetTriggerResponseBody.types = function () {
        return {
            createdTime: 'string',
            description: 'string',
            domainName: 'string',
            invocationRole: 'string',
            lastModifiedTime: 'string',
            qualifier: 'string',
            sourceArn: 'string',
            triggerConfig: 'string',
            triggerId: 'string',
            triggerName: 'string',
            triggerType: 'string',
        };
    };
    return GetTriggerResponseBody;
}($tea.Model));
exports.GetTriggerResponseBody = GetTriggerResponseBody;
var GetTriggerResponse = /** @class */ (function (_super) {
    __extends(GetTriggerResponse, _super);
    function GetTriggerResponse(map) {
        return _super.call(this, map) || this;
    }
    GetTriggerResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    GetTriggerResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: GetTriggerResponseBody,
        };
    };
    return GetTriggerResponse;
}($tea.Model));
exports.GetTriggerResponse = GetTriggerResponse;
var InvokeFunctionHeaders = /** @class */ (function (_super) {
    __extends(InvokeFunctionHeaders, _super);
    function InvokeFunctionHeaders(map) {
        return _super.call(this, map) || this;
    }
    InvokeFunctionHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcStatefulAsyncInvocationId: 'X-Fc-Stateful-Async-Invocation-Id',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    InvokeFunctionHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcStatefulAsyncInvocationId: 'string',
            xFcTraceId: 'string',
        };
    };
    return InvokeFunctionHeaders;
}($tea.Model));
exports.InvokeFunctionHeaders = InvokeFunctionHeaders;
var InvokeFunctionRequest = /** @class */ (function (_super) {
    __extends(InvokeFunctionRequest, _super);
    function InvokeFunctionRequest(map) {
        return _super.call(this, map) || this;
    }
    InvokeFunctionRequest.names = function () {
        return {
            body: 'body',
            qualifier: 'qualifier',
        };
    };
    InvokeFunctionRequest.types = function () {
        return {
            body: 'Buffer',
            qualifier: 'string',
        };
    };
    return InvokeFunctionRequest;
}($tea.Model));
exports.InvokeFunctionRequest = InvokeFunctionRequest;
var InvokeFunctionResponse = /** @class */ (function (_super) {
    __extends(InvokeFunctionResponse, _super);
    function InvokeFunctionResponse(map) {
        return _super.call(this, map) || this;
    }
    InvokeFunctionResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    InvokeFunctionResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: 'Buffer',
        };
    };
    return InvokeFunctionResponse;
}($tea.Model));
exports.InvokeFunctionResponse = InvokeFunctionResponse;
var ListAliasesHeaders = /** @class */ (function (_super) {
    __extends(ListAliasesHeaders, _super);
    function ListAliasesHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListAliasesHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListAliasesHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListAliasesHeaders;
}($tea.Model));
exports.ListAliasesHeaders = ListAliasesHeaders;
var ListAliasesRequest = /** @class */ (function (_super) {
    __extends(ListAliasesRequest, _super);
    function ListAliasesRequest(map) {
        return _super.call(this, map) || this;
    }
    ListAliasesRequest.names = function () {
        return {
            limit: 'limit',
            nextToken: 'nextToken',
            prefix: 'prefix',
            startKey: 'startKey',
        };
    };
    ListAliasesRequest.types = function () {
        return {
            limit: 'number',
            nextToken: 'string',
            prefix: 'string',
            startKey: 'string',
        };
    };
    return ListAliasesRequest;
}($tea.Model));
exports.ListAliasesRequest = ListAliasesRequest;
var ListAliasesResponseBody = /** @class */ (function (_super) {
    __extends(ListAliasesResponseBody, _super);
    function ListAliasesResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListAliasesResponseBody.names = function () {
        return {
            aliases: 'aliases',
            nextToken: 'nextToken',
        };
    };
    ListAliasesResponseBody.types = function () {
        return {
            aliases: { 'type': 'array', 'itemType': ListAliasesResponseBodyAliases },
            nextToken: 'string',
        };
    };
    return ListAliasesResponseBody;
}($tea.Model));
exports.ListAliasesResponseBody = ListAliasesResponseBody;
var ListAliasesResponse = /** @class */ (function (_super) {
    __extends(ListAliasesResponse, _super);
    function ListAliasesResponse(map) {
        return _super.call(this, map) || this;
    }
    ListAliasesResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListAliasesResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListAliasesResponseBody,
        };
    };
    return ListAliasesResponse;
}($tea.Model));
exports.ListAliasesResponse = ListAliasesResponse;
var ListCustomDomainsHeaders = /** @class */ (function (_super) {
    __extends(ListCustomDomainsHeaders, _super);
    function ListCustomDomainsHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListCustomDomainsHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListCustomDomainsHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListCustomDomainsHeaders;
}($tea.Model));
exports.ListCustomDomainsHeaders = ListCustomDomainsHeaders;
var ListCustomDomainsRequest = /** @class */ (function (_super) {
    __extends(ListCustomDomainsRequest, _super);
    function ListCustomDomainsRequest(map) {
        return _super.call(this, map) || this;
    }
    ListCustomDomainsRequest.names = function () {
        return {
            limit: 'limit',
            nextToken: 'nextToken',
            prefix: 'prefix',
            startKey: 'startKey',
        };
    };
    ListCustomDomainsRequest.types = function () {
        return {
            limit: 'number',
            nextToken: 'string',
            prefix: 'string',
            startKey: 'string',
        };
    };
    return ListCustomDomainsRequest;
}($tea.Model));
exports.ListCustomDomainsRequest = ListCustomDomainsRequest;
var ListCustomDomainsResponseBody = /** @class */ (function (_super) {
    __extends(ListCustomDomainsResponseBody, _super);
    function ListCustomDomainsResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListCustomDomainsResponseBody.names = function () {
        return {
            customDomains: 'customDomains',
            nextToken: 'nextToken',
        };
    };
    ListCustomDomainsResponseBody.types = function () {
        return {
            customDomains: { 'type': 'array', 'itemType': ListCustomDomainsResponseBodyCustomDomains },
            nextToken: 'string',
        };
    };
    return ListCustomDomainsResponseBody;
}($tea.Model));
exports.ListCustomDomainsResponseBody = ListCustomDomainsResponseBody;
var ListCustomDomainsResponse = /** @class */ (function (_super) {
    __extends(ListCustomDomainsResponse, _super);
    function ListCustomDomainsResponse(map) {
        return _super.call(this, map) || this;
    }
    ListCustomDomainsResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListCustomDomainsResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListCustomDomainsResponseBody,
        };
    };
    return ListCustomDomainsResponse;
}($tea.Model));
exports.ListCustomDomainsResponse = ListCustomDomainsResponse;
var ListEventSourcesHeaders = /** @class */ (function (_super) {
    __extends(ListEventSourcesHeaders, _super);
    function ListEventSourcesHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListEventSourcesHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListEventSourcesHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListEventSourcesHeaders;
}($tea.Model));
exports.ListEventSourcesHeaders = ListEventSourcesHeaders;
var ListEventSourcesRequest = /** @class */ (function (_super) {
    __extends(ListEventSourcesRequest, _super);
    function ListEventSourcesRequest(map) {
        return _super.call(this, map) || this;
    }
    ListEventSourcesRequest.names = function () {
        return {
            qualifier: 'qualifier',
        };
    };
    ListEventSourcesRequest.types = function () {
        return {
            qualifier: 'string',
        };
    };
    return ListEventSourcesRequest;
}($tea.Model));
exports.ListEventSourcesRequest = ListEventSourcesRequest;
var ListEventSourcesResponseBody = /** @class */ (function (_super) {
    __extends(ListEventSourcesResponseBody, _super);
    function ListEventSourcesResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListEventSourcesResponseBody.names = function () {
        return {
            eventSources: 'eventSources',
        };
    };
    ListEventSourcesResponseBody.types = function () {
        return {
            eventSources: { 'type': 'array', 'itemType': ListEventSourcesResponseBodyEventSources },
        };
    };
    return ListEventSourcesResponseBody;
}($tea.Model));
exports.ListEventSourcesResponseBody = ListEventSourcesResponseBody;
var ListEventSourcesResponse = /** @class */ (function (_super) {
    __extends(ListEventSourcesResponse, _super);
    function ListEventSourcesResponse(map) {
        return _super.call(this, map) || this;
    }
    ListEventSourcesResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListEventSourcesResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListEventSourcesResponseBody,
        };
    };
    return ListEventSourcesResponse;
}($tea.Model));
exports.ListEventSourcesResponse = ListEventSourcesResponse;
var ListFunctionAsyncInvokeConfigsHeaders = /** @class */ (function (_super) {
    __extends(ListFunctionAsyncInvokeConfigsHeaders, _super);
    function ListFunctionAsyncInvokeConfigsHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListFunctionAsyncInvokeConfigsHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListFunctionAsyncInvokeConfigsHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListFunctionAsyncInvokeConfigsHeaders;
}($tea.Model));
exports.ListFunctionAsyncInvokeConfigsHeaders = ListFunctionAsyncInvokeConfigsHeaders;
var ListFunctionAsyncInvokeConfigsRequest = /** @class */ (function (_super) {
    __extends(ListFunctionAsyncInvokeConfigsRequest, _super);
    function ListFunctionAsyncInvokeConfigsRequest(map) {
        return _super.call(this, map) || this;
    }
    ListFunctionAsyncInvokeConfigsRequest.names = function () {
        return {
            limit: 'limit',
            nextToken: 'nextToken',
        };
    };
    ListFunctionAsyncInvokeConfigsRequest.types = function () {
        return {
            limit: 'number',
            nextToken: 'string',
        };
    };
    return ListFunctionAsyncInvokeConfigsRequest;
}($tea.Model));
exports.ListFunctionAsyncInvokeConfigsRequest = ListFunctionAsyncInvokeConfigsRequest;
var ListFunctionAsyncInvokeConfigsResponseBody = /** @class */ (function (_super) {
    __extends(ListFunctionAsyncInvokeConfigsResponseBody, _super);
    function ListFunctionAsyncInvokeConfigsResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListFunctionAsyncInvokeConfigsResponseBody.names = function () {
        return {
            configs: 'configs',
            nextToken: 'nextToken',
        };
    };
    ListFunctionAsyncInvokeConfigsResponseBody.types = function () {
        return {
            configs: { 'type': 'array', 'itemType': ListFunctionAsyncInvokeConfigsResponseBodyConfigs },
            nextToken: 'string',
        };
    };
    return ListFunctionAsyncInvokeConfigsResponseBody;
}($tea.Model));
exports.ListFunctionAsyncInvokeConfigsResponseBody = ListFunctionAsyncInvokeConfigsResponseBody;
var ListFunctionAsyncInvokeConfigsResponse = /** @class */ (function (_super) {
    __extends(ListFunctionAsyncInvokeConfigsResponse, _super);
    function ListFunctionAsyncInvokeConfigsResponse(map) {
        return _super.call(this, map) || this;
    }
    ListFunctionAsyncInvokeConfigsResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListFunctionAsyncInvokeConfigsResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListFunctionAsyncInvokeConfigsResponseBody,
        };
    };
    return ListFunctionAsyncInvokeConfigsResponse;
}($tea.Model));
exports.ListFunctionAsyncInvokeConfigsResponse = ListFunctionAsyncInvokeConfigsResponse;
var ListFunctionsHeaders = /** @class */ (function (_super) {
    __extends(ListFunctionsHeaders, _super);
    function ListFunctionsHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListFunctionsHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListFunctionsHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListFunctionsHeaders;
}($tea.Model));
exports.ListFunctionsHeaders = ListFunctionsHeaders;
var ListFunctionsRequest = /** @class */ (function (_super) {
    __extends(ListFunctionsRequest, _super);
    function ListFunctionsRequest(map) {
        return _super.call(this, map) || this;
    }
    ListFunctionsRequest.names = function () {
        return {
            limit: 'limit',
            nextToken: 'nextToken',
            prefix: 'prefix',
            qualifier: 'qualifier',
            startKey: 'startKey',
        };
    };
    ListFunctionsRequest.types = function () {
        return {
            limit: 'number',
            nextToken: 'string',
            prefix: 'string',
            qualifier: 'string',
            startKey: 'string',
        };
    };
    return ListFunctionsRequest;
}($tea.Model));
exports.ListFunctionsRequest = ListFunctionsRequest;
var ListFunctionsResponseBody = /** @class */ (function (_super) {
    __extends(ListFunctionsResponseBody, _super);
    function ListFunctionsResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListFunctionsResponseBody.names = function () {
        return {
            functions: 'functions',
            nextToken: 'nextToken',
        };
    };
    ListFunctionsResponseBody.types = function () {
        return {
            functions: { 'type': 'array', 'itemType': ListFunctionsResponseBodyFunctions },
            nextToken: 'string',
        };
    };
    return ListFunctionsResponseBody;
}($tea.Model));
exports.ListFunctionsResponseBody = ListFunctionsResponseBody;
var ListFunctionsResponse = /** @class */ (function (_super) {
    __extends(ListFunctionsResponse, _super);
    function ListFunctionsResponse(map) {
        return _super.call(this, map) || this;
    }
    ListFunctionsResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListFunctionsResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListFunctionsResponseBody,
        };
    };
    return ListFunctionsResponse;
}($tea.Model));
exports.ListFunctionsResponse = ListFunctionsResponse;
var ListInstancesHeaders = /** @class */ (function (_super) {
    __extends(ListInstancesHeaders, _super);
    function ListInstancesHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListInstancesHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
        };
    };
    ListInstancesHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
        };
    };
    return ListInstancesHeaders;
}($tea.Model));
exports.ListInstancesHeaders = ListInstancesHeaders;
var ListInstancesRequest = /** @class */ (function (_super) {
    __extends(ListInstancesRequest, _super);
    function ListInstancesRequest(map) {
        return _super.call(this, map) || this;
    }
    ListInstancesRequest.names = function () {
        return {
            limit: 'limit',
            nextToken: 'nextToken',
            qualifier: 'qualifier',
        };
    };
    ListInstancesRequest.types = function () {
        return {
            limit: 'number',
            nextToken: 'string',
            qualifier: 'string',
        };
    };
    return ListInstancesRequest;
}($tea.Model));
exports.ListInstancesRequest = ListInstancesRequest;
var ListInstancesResponseBody = /** @class */ (function (_super) {
    __extends(ListInstancesResponseBody, _super);
    function ListInstancesResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListInstancesResponseBody.names = function () {
        return {
            instances: 'instances',
        };
    };
    ListInstancesResponseBody.types = function () {
        return {
            instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
        };
    };
    return ListInstancesResponseBody;
}($tea.Model));
exports.ListInstancesResponseBody = ListInstancesResponseBody;
var ListInstancesResponse = /** @class */ (function (_super) {
    __extends(ListInstancesResponse, _super);
    function ListInstancesResponse(map) {
        return _super.call(this, map) || this;
    }
    ListInstancesResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListInstancesResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListInstancesResponseBody,
        };
    };
    return ListInstancesResponse;
}($tea.Model));
exports.ListInstancesResponse = ListInstancesResponse;
var ListLayerVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListLayerVersionsHeaders, _super);
    function ListLayerVersionsHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListLayerVersionsHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListLayerVersionsHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListLayerVersionsHeaders;
}($tea.Model));
exports.ListLayerVersionsHeaders = ListLayerVersionsHeaders;
var ListLayerVersionsRequest = /** @class */ (function (_super) {
    __extends(ListLayerVersionsRequest, _super);
    function ListLayerVersionsRequest(map) {
        return _super.call(this, map) || this;
    }
    ListLayerVersionsRequest.names = function () {
        return {
            limit: 'limit',
            startVersion: 'startVersion',
        };
    };
    ListLayerVersionsRequest.types = function () {
        return {
            limit: 'number',
            startVersion: 'number',
        };
    };
    return ListLayerVersionsRequest;
}($tea.Model));
exports.ListLayerVersionsRequest = ListLayerVersionsRequest;
var ListLayerVersionsResponseBody = /** @class */ (function (_super) {
    __extends(ListLayerVersionsResponseBody, _super);
    function ListLayerVersionsResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListLayerVersionsResponseBody.names = function () {
        return {
            layers: 'layers',
            nextVersion: 'nextVersion',
        };
    };
    ListLayerVersionsResponseBody.types = function () {
        return {
            layers: { 'type': 'array', 'itemType': Layer },
            nextVersion: 'number',
        };
    };
    return ListLayerVersionsResponseBody;
}($tea.Model));
exports.ListLayerVersionsResponseBody = ListLayerVersionsResponseBody;
var ListLayerVersionsResponse = /** @class */ (function (_super) {
    __extends(ListLayerVersionsResponse, _super);
    function ListLayerVersionsResponse(map) {
        return _super.call(this, map) || this;
    }
    ListLayerVersionsResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListLayerVersionsResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListLayerVersionsResponseBody,
        };
    };
    return ListLayerVersionsResponse;
}($tea.Model));
exports.ListLayerVersionsResponse = ListLayerVersionsResponse;
var ListLayersHeaders = /** @class */ (function (_super) {
    __extends(ListLayersHeaders, _super);
    function ListLayersHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListLayersHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListLayersHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListLayersHeaders;
}($tea.Model));
exports.ListLayersHeaders = ListLayersHeaders;
var ListLayersRequest = /** @class */ (function (_super) {
    __extends(ListLayersRequest, _super);
    function ListLayersRequest(map) {
        return _super.call(this, map) || this;
    }
    ListLayersRequest.names = function () {
        return {
            limit: 'limit',
            nextToken: 'nextToken',
            prefix: 'prefix',
            startKey: 'startKey',
        };
    };
    ListLayersRequest.types = function () {
        return {
            limit: 'number',
            nextToken: 'string',
            prefix: 'string',
            startKey: 'string',
        };
    };
    return ListLayersRequest;
}($tea.Model));
exports.ListLayersRequest = ListLayersRequest;
var ListLayersResponseBody = /** @class */ (function (_super) {
    __extends(ListLayersResponseBody, _super);
    function ListLayersResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListLayersResponseBody.names = function () {
        return {
            layers: 'layers',
            nextToken: 'nextToken',
        };
    };
    ListLayersResponseBody.types = function () {
        return {
            layers: { 'type': 'array', 'itemType': Layer },
            nextToken: 'string',
        };
    };
    return ListLayersResponseBody;
}($tea.Model));
exports.ListLayersResponseBody = ListLayersResponseBody;
var ListLayersResponse = /** @class */ (function (_super) {
    __extends(ListLayersResponse, _super);
    function ListLayersResponse(map) {
        return _super.call(this, map) || this;
    }
    ListLayersResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListLayersResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListLayersResponseBody,
        };
    };
    return ListLayersResponse;
}($tea.Model));
exports.ListLayersResponse = ListLayersResponse;
var ListOnDemandConfigsHeaders = /** @class */ (function (_super) {
    __extends(ListOnDemandConfigsHeaders, _super);
    function ListOnDemandConfigsHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListOnDemandConfigsHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListOnDemandConfigsHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListOnDemandConfigsHeaders;
}($tea.Model));
exports.ListOnDemandConfigsHeaders = ListOnDemandConfigsHeaders;
var ListOnDemandConfigsRequest = /** @class */ (function (_super) {
    __extends(ListOnDemandConfigsRequest, _super);
    function ListOnDemandConfigsRequest(map) {
        return _super.call(this, map) || this;
    }
    ListOnDemandConfigsRequest.names = function () {
        return {
            limit: 'limit',
            nextToken: 'nextToken',
            prefix: 'prefix',
            startKey: 'startKey',
        };
    };
    ListOnDemandConfigsRequest.types = function () {
        return {
            limit: 'number',
            nextToken: 'string',
            prefix: 'string',
            startKey: 'string',
        };
    };
    return ListOnDemandConfigsRequest;
}($tea.Model));
exports.ListOnDemandConfigsRequest = ListOnDemandConfigsRequest;
var ListOnDemandConfigsResponseBody = /** @class */ (function (_super) {
    __extends(ListOnDemandConfigsResponseBody, _super);
    function ListOnDemandConfigsResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListOnDemandConfigsResponseBody.names = function () {
        return {
            configs: 'configs',
            nextToken: 'nextToken',
        };
    };
    ListOnDemandConfigsResponseBody.types = function () {
        return {
            configs: { 'type': 'array', 'itemType': OnDemandConfig },
            nextToken: 'string',
        };
    };
    return ListOnDemandConfigsResponseBody;
}($tea.Model));
exports.ListOnDemandConfigsResponseBody = ListOnDemandConfigsResponseBody;
var ListOnDemandConfigsResponse = /** @class */ (function (_super) {
    __extends(ListOnDemandConfigsResponse, _super);
    function ListOnDemandConfigsResponse(map) {
        return _super.call(this, map) || this;
    }
    ListOnDemandConfigsResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListOnDemandConfigsResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListOnDemandConfigsResponseBody,
        };
    };
    return ListOnDemandConfigsResponse;
}($tea.Model));
exports.ListOnDemandConfigsResponse = ListOnDemandConfigsResponse;
var ListProvisionConfigsHeaders = /** @class */ (function (_super) {
    __extends(ListProvisionConfigsHeaders, _super);
    function ListProvisionConfigsHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListProvisionConfigsHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListProvisionConfigsHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListProvisionConfigsHeaders;
}($tea.Model));
exports.ListProvisionConfigsHeaders = ListProvisionConfigsHeaders;
var ListProvisionConfigsRequest = /** @class */ (function (_super) {
    __extends(ListProvisionConfigsRequest, _super);
    function ListProvisionConfigsRequest(map) {
        return _super.call(this, map) || this;
    }
    ListProvisionConfigsRequest.names = function () {
        return {
            limit: 'limit',
            nextToken: 'nextToken',
            qualifier: 'qualifier',
            serviceName: 'serviceName',
        };
    };
    ListProvisionConfigsRequest.types = function () {
        return {
            limit: 'number',
            nextToken: 'string',
            qualifier: 'string',
            serviceName: 'string',
        };
    };
    return ListProvisionConfigsRequest;
}($tea.Model));
exports.ListProvisionConfigsRequest = ListProvisionConfigsRequest;
var ListProvisionConfigsResponseBody = /** @class */ (function (_super) {
    __extends(ListProvisionConfigsResponseBody, _super);
    function ListProvisionConfigsResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListProvisionConfigsResponseBody.names = function () {
        return {
            nextToken: 'nextToken',
            provisionConfigs: 'provisionConfigs',
        };
    };
    ListProvisionConfigsResponseBody.types = function () {
        return {
            nextToken: 'string',
            provisionConfigs: { 'type': 'array', 'itemType': ListProvisionConfigsResponseBodyProvisionConfigs },
        };
    };
    return ListProvisionConfigsResponseBody;
}($tea.Model));
exports.ListProvisionConfigsResponseBody = ListProvisionConfigsResponseBody;
var ListProvisionConfigsResponse = /** @class */ (function (_super) {
    __extends(ListProvisionConfigsResponse, _super);
    function ListProvisionConfigsResponse(map) {
        return _super.call(this, map) || this;
    }
    ListProvisionConfigsResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListProvisionConfigsResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListProvisionConfigsResponseBody,
        };
    };
    return ListProvisionConfigsResponse;
}($tea.Model));
exports.ListProvisionConfigsResponse = ListProvisionConfigsResponse;
var ListReservedCapacitiesHeaders = /** @class */ (function (_super) {
    __extends(ListReservedCapacitiesHeaders, _super);
    function ListReservedCapacitiesHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListReservedCapacitiesHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListReservedCapacitiesHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListReservedCapacitiesHeaders;
}($tea.Model));
exports.ListReservedCapacitiesHeaders = ListReservedCapacitiesHeaders;
var ListReservedCapacitiesRequest = /** @class */ (function (_super) {
    __extends(ListReservedCapacitiesRequest, _super);
    function ListReservedCapacitiesRequest(map) {
        return _super.call(this, map) || this;
    }
    ListReservedCapacitiesRequest.names = function () {
        return {
            limit: 'limit',
            nextToken: 'nextToken',
        };
    };
    ListReservedCapacitiesRequest.types = function () {
        return {
            limit: 'string',
            nextToken: 'string',
        };
    };
    return ListReservedCapacitiesRequest;
}($tea.Model));
exports.ListReservedCapacitiesRequest = ListReservedCapacitiesRequest;
var ListReservedCapacitiesResponseBody = /** @class */ (function (_super) {
    __extends(ListReservedCapacitiesResponseBody, _super);
    function ListReservedCapacitiesResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListReservedCapacitiesResponseBody.names = function () {
        return {
            nextToken: 'nextToken',
            reservedCapacities: 'reservedCapacities',
        };
    };
    ListReservedCapacitiesResponseBody.types = function () {
        return {
            nextToken: 'string',
            reservedCapacities: { 'type': 'array', 'itemType': OpenReservedCapacity },
        };
    };
    return ListReservedCapacitiesResponseBody;
}($tea.Model));
exports.ListReservedCapacitiesResponseBody = ListReservedCapacitiesResponseBody;
var ListReservedCapacitiesResponse = /** @class */ (function (_super) {
    __extends(ListReservedCapacitiesResponse, _super);
    function ListReservedCapacitiesResponse(map) {
        return _super.call(this, map) || this;
    }
    ListReservedCapacitiesResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListReservedCapacitiesResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListReservedCapacitiesResponseBody,
        };
    };
    return ListReservedCapacitiesResponse;
}($tea.Model));
exports.ListReservedCapacitiesResponse = ListReservedCapacitiesResponse;
var ListServiceVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListServiceVersionsHeaders, _super);
    function ListServiceVersionsHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListServiceVersionsHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListServiceVersionsHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListServiceVersionsHeaders;
}($tea.Model));
exports.ListServiceVersionsHeaders = ListServiceVersionsHeaders;
var ListServiceVersionsRequest = /** @class */ (function (_super) {
    __extends(ListServiceVersionsRequest, _super);
    function ListServiceVersionsRequest(map) {
        return _super.call(this, map) || this;
    }
    ListServiceVersionsRequest.names = function () {
        return {
            direction: 'direction',
            limit: 'limit',
            nextToken: 'nextToken',
            startKey: 'startKey',
        };
    };
    ListServiceVersionsRequest.types = function () {
        return {
            direction: 'string',
            limit: 'number',
            nextToken: 'string',
            startKey: 'string',
        };
    };
    return ListServiceVersionsRequest;
}($tea.Model));
exports.ListServiceVersionsRequest = ListServiceVersionsRequest;
var ListServiceVersionsResponseBody = /** @class */ (function (_super) {
    __extends(ListServiceVersionsResponseBody, _super);
    function ListServiceVersionsResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListServiceVersionsResponseBody.names = function () {
        return {
            direction: 'direction',
            nextToken: 'nextToken',
            versions: 'versions',
        };
    };
    ListServiceVersionsResponseBody.types = function () {
        return {
            direction: 'string',
            nextToken: 'string',
            versions: { 'type': 'array', 'itemType': ListServiceVersionsResponseBodyVersions },
        };
    };
    return ListServiceVersionsResponseBody;
}($tea.Model));
exports.ListServiceVersionsResponseBody = ListServiceVersionsResponseBody;
var ListServiceVersionsResponse = /** @class */ (function (_super) {
    __extends(ListServiceVersionsResponse, _super);
    function ListServiceVersionsResponse(map) {
        return _super.call(this, map) || this;
    }
    ListServiceVersionsResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListServiceVersionsResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListServiceVersionsResponseBody,
        };
    };
    return ListServiceVersionsResponse;
}($tea.Model));
exports.ListServiceVersionsResponse = ListServiceVersionsResponse;
var ListServicesHeaders = /** @class */ (function (_super) {
    __extends(ListServicesHeaders, _super);
    function ListServicesHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListServicesHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListServicesHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListServicesHeaders;
}($tea.Model));
exports.ListServicesHeaders = ListServicesHeaders;
var ListServicesRequest = /** @class */ (function (_super) {
    __extends(ListServicesRequest, _super);
    function ListServicesRequest(map) {
        return _super.call(this, map) || this;
    }
    ListServicesRequest.names = function () {
        return {
            limit: 'limit',
            nextToken: 'nextToken',
            prefix: 'prefix',
            startKey: 'startKey',
        };
    };
    ListServicesRequest.types = function () {
        return {
            limit: 'number',
            nextToken: 'string',
            prefix: 'string',
            startKey: 'string',
        };
    };
    return ListServicesRequest;
}($tea.Model));
exports.ListServicesRequest = ListServicesRequest;
var ListServicesResponseBody = /** @class */ (function (_super) {
    __extends(ListServicesResponseBody, _super);
    function ListServicesResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListServicesResponseBody.names = function () {
        return {
            nextToken: 'nextToken',
            services: 'services',
        };
    };
    ListServicesResponseBody.types = function () {
        return {
            nextToken: 'string',
            services: { 'type': 'array', 'itemType': ListServicesResponseBodyServices },
        };
    };
    return ListServicesResponseBody;
}($tea.Model));
exports.ListServicesResponseBody = ListServicesResponseBody;
var ListServicesResponse = /** @class */ (function (_super) {
    __extends(ListServicesResponse, _super);
    function ListServicesResponse(map) {
        return _super.call(this, map) || this;
    }
    ListServicesResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListServicesResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListServicesResponseBody,
        };
    };
    return ListServicesResponse;
}($tea.Model));
exports.ListServicesResponse = ListServicesResponse;
var ListStatefulAsyncInvocationsHeaders = /** @class */ (function (_super) {
    __extends(ListStatefulAsyncInvocationsHeaders, _super);
    function ListStatefulAsyncInvocationsHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListStatefulAsyncInvocationsHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListStatefulAsyncInvocationsHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListStatefulAsyncInvocationsHeaders;
}($tea.Model));
exports.ListStatefulAsyncInvocationsHeaders = ListStatefulAsyncInvocationsHeaders;
var ListStatefulAsyncInvocationsRequest = /** @class */ (function (_super) {
    __extends(ListStatefulAsyncInvocationsRequest, _super);
    function ListStatefulAsyncInvocationsRequest(map) {
        return _super.call(this, map) || this;
    }
    ListStatefulAsyncInvocationsRequest.names = function () {
        return {
            includePayload: 'includePayload',
            invocationIdPrefix: 'invocationIdPrefix',
            limit: 'limit',
            nextToken: 'nextToken',
            qualifier: 'qualifier',
            sortOrderByTime: 'sortOrderByTime',
            startedTimeBegin: 'startedTimeBegin',
            startedTimeEnd: 'startedTimeEnd',
            status: 'status',
        };
    };
    ListStatefulAsyncInvocationsRequest.types = function () {
        return {
            includePayload: 'boolean',
            invocationIdPrefix: 'string',
            limit: 'number',
            nextToken: 'string',
            qualifier: 'string',
            sortOrderByTime: 'string',
            startedTimeBegin: 'number',
            startedTimeEnd: 'number',
            status: 'string',
        };
    };
    return ListStatefulAsyncInvocationsRequest;
}($tea.Model));
exports.ListStatefulAsyncInvocationsRequest = ListStatefulAsyncInvocationsRequest;
var ListStatefulAsyncInvocationsResponseBody = /** @class */ (function (_super) {
    __extends(ListStatefulAsyncInvocationsResponseBody, _super);
    function ListStatefulAsyncInvocationsResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListStatefulAsyncInvocationsResponseBody.names = function () {
        return {
            invocations: 'invocations',
            nextToken: 'nextToken',
        };
    };
    ListStatefulAsyncInvocationsResponseBody.types = function () {
        return {
            invocations: { 'type': 'array', 'itemType': StatefulAsyncInvocation },
            nextToken: 'string',
        };
    };
    return ListStatefulAsyncInvocationsResponseBody;
}($tea.Model));
exports.ListStatefulAsyncInvocationsResponseBody = ListStatefulAsyncInvocationsResponseBody;
var ListStatefulAsyncInvocationsResponse = /** @class */ (function (_super) {
    __extends(ListStatefulAsyncInvocationsResponse, _super);
    function ListStatefulAsyncInvocationsResponse(map) {
        return _super.call(this, map) || this;
    }
    ListStatefulAsyncInvocationsResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListStatefulAsyncInvocationsResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListStatefulAsyncInvocationsResponseBody,
        };
    };
    return ListStatefulAsyncInvocationsResponse;
}($tea.Model));
exports.ListStatefulAsyncInvocationsResponse = ListStatefulAsyncInvocationsResponse;
var ListTaggedResourcesHeaders = /** @class */ (function (_super) {
    __extends(ListTaggedResourcesHeaders, _super);
    function ListTaggedResourcesHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListTaggedResourcesHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListTaggedResourcesHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListTaggedResourcesHeaders;
}($tea.Model));
exports.ListTaggedResourcesHeaders = ListTaggedResourcesHeaders;
var ListTaggedResourcesRequest = /** @class */ (function (_super) {
    __extends(ListTaggedResourcesRequest, _super);
    function ListTaggedResourcesRequest(map) {
        return _super.call(this, map) || this;
    }
    ListTaggedResourcesRequest.names = function () {
        return {
            limit: 'limit',
            nextToken: 'nextToken',
        };
    };
    ListTaggedResourcesRequest.types = function () {
        return {
            limit: 'number',
            nextToken: 'string',
        };
    };
    return ListTaggedResourcesRequest;
}($tea.Model));
exports.ListTaggedResourcesRequest = ListTaggedResourcesRequest;
var ListTaggedResourcesResponseBody = /** @class */ (function (_super) {
    __extends(ListTaggedResourcesResponseBody, _super);
    function ListTaggedResourcesResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListTaggedResourcesResponseBody.names = function () {
        return {
            nextToken: 'nextToken',
            resources: 'resources',
        };
    };
    ListTaggedResourcesResponseBody.types = function () {
        return {
            nextToken: 'string',
            resources: { 'type': 'array', 'itemType': Resource },
        };
    };
    return ListTaggedResourcesResponseBody;
}($tea.Model));
exports.ListTaggedResourcesResponseBody = ListTaggedResourcesResponseBody;
var ListTaggedResourcesResponse = /** @class */ (function (_super) {
    __extends(ListTaggedResourcesResponse, _super);
    function ListTaggedResourcesResponse(map) {
        return _super.call(this, map) || this;
    }
    ListTaggedResourcesResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListTaggedResourcesResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListTaggedResourcesResponseBody,
        };
    };
    return ListTaggedResourcesResponse;
}($tea.Model));
exports.ListTaggedResourcesResponse = ListTaggedResourcesResponse;
var ListTriggersHeaders = /** @class */ (function (_super) {
    __extends(ListTriggersHeaders, _super);
    function ListTriggersHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListTriggersHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListTriggersHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListTriggersHeaders;
}($tea.Model));
exports.ListTriggersHeaders = ListTriggersHeaders;
var ListTriggersRequest = /** @class */ (function (_super) {
    __extends(ListTriggersRequest, _super);
    function ListTriggersRequest(map) {
        return _super.call(this, map) || this;
    }
    ListTriggersRequest.names = function () {
        return {
            limit: 'limit',
            nextToken: 'nextToken',
            prefix: 'prefix',
            startKey: 'startKey',
        };
    };
    ListTriggersRequest.types = function () {
        return {
            limit: 'number',
            nextToken: 'number',
            prefix: 'string',
            startKey: 'string',
        };
    };
    return ListTriggersRequest;
}($tea.Model));
exports.ListTriggersRequest = ListTriggersRequest;
var ListTriggersResponseBody = /** @class */ (function (_super) {
    __extends(ListTriggersResponseBody, _super);
    function ListTriggersResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListTriggersResponseBody.names = function () {
        return {
            nextToken: 'nextToken',
            triggers: 'triggers',
        };
    };
    ListTriggersResponseBody.types = function () {
        return {
            nextToken: 'string',
            triggers: { 'type': 'array', 'itemType': ListTriggersResponseBodyTriggers },
        };
    };
    return ListTriggersResponseBody;
}($tea.Model));
exports.ListTriggersResponseBody = ListTriggersResponseBody;
var ListTriggersResponse = /** @class */ (function (_super) {
    __extends(ListTriggersResponse, _super);
    function ListTriggersResponse(map) {
        return _super.call(this, map) || this;
    }
    ListTriggersResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListTriggersResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListTriggersResponseBody,
        };
    };
    return ListTriggersResponse;
}($tea.Model));
exports.ListTriggersResponse = ListTriggersResponse;
var ListVpcBindingsHeaders = /** @class */ (function (_super) {
    __extends(ListVpcBindingsHeaders, _super);
    function ListVpcBindingsHeaders(map) {
        return _super.call(this, map) || this;
    }
    ListVpcBindingsHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    ListVpcBindingsHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return ListVpcBindingsHeaders;
}($tea.Model));
exports.ListVpcBindingsHeaders = ListVpcBindingsHeaders;
var ListVpcBindingsResponseBody = /** @class */ (function (_super) {
    __extends(ListVpcBindingsResponseBody, _super);
    function ListVpcBindingsResponseBody(map) {
        return _super.call(this, map) || this;
    }
    ListVpcBindingsResponseBody.names = function () {
        return {
            vpcIds: 'vpcIds',
        };
    };
    ListVpcBindingsResponseBody.types = function () {
        return {
            vpcIds: { 'type': 'array', 'itemType': 'string' },
        };
    };
    return ListVpcBindingsResponseBody;
}($tea.Model));
exports.ListVpcBindingsResponseBody = ListVpcBindingsResponseBody;
var ListVpcBindingsResponse = /** @class */ (function (_super) {
    __extends(ListVpcBindingsResponse, _super);
    function ListVpcBindingsResponse(map) {
        return _super.call(this, map) || this;
    }
    ListVpcBindingsResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    ListVpcBindingsResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: ListVpcBindingsResponseBody,
        };
    };
    return ListVpcBindingsResponse;
}($tea.Model));
exports.ListVpcBindingsResponse = ListVpcBindingsResponse;
var PermanentDeleteLayerVersionHeaders = /** @class */ (function (_super) {
    __extends(PermanentDeleteLayerVersionHeaders, _super);
    function PermanentDeleteLayerVersionHeaders(map) {
        return _super.call(this, map) || this;
    }
    PermanentDeleteLayerVersionHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    PermanentDeleteLayerVersionHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return PermanentDeleteLayerVersionHeaders;
}($tea.Model));
exports.PermanentDeleteLayerVersionHeaders = PermanentDeleteLayerVersionHeaders;
var PermanentDeleteLayerVersionResponse = /** @class */ (function (_super) {
    __extends(PermanentDeleteLayerVersionResponse, _super);
    function PermanentDeleteLayerVersionResponse(map) {
        return _super.call(this, map) || this;
    }
    PermanentDeleteLayerVersionResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    PermanentDeleteLayerVersionResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return PermanentDeleteLayerVersionResponse;
}($tea.Model));
exports.PermanentDeleteLayerVersionResponse = PermanentDeleteLayerVersionResponse;
var PublishLayerAsPublicHeaders = /** @class */ (function (_super) {
    __extends(PublishLayerAsPublicHeaders, _super);
    function PublishLayerAsPublicHeaders(map) {
        return _super.call(this, map) || this;
    }
    PublishLayerAsPublicHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    PublishLayerAsPublicHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return PublishLayerAsPublicHeaders;
}($tea.Model));
exports.PublishLayerAsPublicHeaders = PublishLayerAsPublicHeaders;
var PublishLayerAsPublicResponse = /** @class */ (function (_super) {
    __extends(PublishLayerAsPublicResponse, _super);
    function PublishLayerAsPublicResponse(map) {
        return _super.call(this, map) || this;
    }
    PublishLayerAsPublicResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    PublishLayerAsPublicResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return PublishLayerAsPublicResponse;
}($tea.Model));
exports.PublishLayerAsPublicResponse = PublishLayerAsPublicResponse;
var PublishServiceVersionHeaders = /** @class */ (function (_super) {
    __extends(PublishServiceVersionHeaders, _super);
    function PublishServiceVersionHeaders(map) {
        return _super.call(this, map) || this;
    }
    PublishServiceVersionHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            ifMatch: 'If-Match',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    PublishServiceVersionHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            ifMatch: 'string',
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return PublishServiceVersionHeaders;
}($tea.Model));
exports.PublishServiceVersionHeaders = PublishServiceVersionHeaders;
var PublishServiceVersionRequest = /** @class */ (function (_super) {
    __extends(PublishServiceVersionRequest, _super);
    function PublishServiceVersionRequest(map) {
        return _super.call(this, map) || this;
    }
    PublishServiceVersionRequest.names = function () {
        return {
            description: 'description',
        };
    };
    PublishServiceVersionRequest.types = function () {
        return {
            description: 'string',
        };
    };
    return PublishServiceVersionRequest;
}($tea.Model));
exports.PublishServiceVersionRequest = PublishServiceVersionRequest;
var PublishServiceVersionResponseBody = /** @class */ (function (_super) {
    __extends(PublishServiceVersionResponseBody, _super);
    function PublishServiceVersionResponseBody(map) {
        return _super.call(this, map) || this;
    }
    PublishServiceVersionResponseBody.names = function () {
        return {
            createdTime: 'createdTime',
            description: 'description',
            lastModifiedTime: 'lastModifiedTime',
            versionId: 'versionId',
        };
    };
    PublishServiceVersionResponseBody.types = function () {
        return {
            createdTime: 'string',
            description: 'string',
            lastModifiedTime: 'string',
            versionId: 'string',
        };
    };
    return PublishServiceVersionResponseBody;
}($tea.Model));
exports.PublishServiceVersionResponseBody = PublishServiceVersionResponseBody;
var PublishServiceVersionResponse = /** @class */ (function (_super) {
    __extends(PublishServiceVersionResponse, _super);
    function PublishServiceVersionResponse(map) {
        return _super.call(this, map) || this;
    }
    PublishServiceVersionResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    PublishServiceVersionResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: PublishServiceVersionResponseBody,
        };
    };
    return PublishServiceVersionResponse;
}($tea.Model));
exports.PublishServiceVersionResponse = PublishServiceVersionResponse;
var PutFunctionAsyncInvokeConfigHeaders = /** @class */ (function (_super) {
    __extends(PutFunctionAsyncInvokeConfigHeaders, _super);
    function PutFunctionAsyncInvokeConfigHeaders(map) {
        return _super.call(this, map) || this;
    }
    PutFunctionAsyncInvokeConfigHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    PutFunctionAsyncInvokeConfigHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return PutFunctionAsyncInvokeConfigHeaders;
}($tea.Model));
exports.PutFunctionAsyncInvokeConfigHeaders = PutFunctionAsyncInvokeConfigHeaders;
var PutFunctionAsyncInvokeConfigRequest = /** @class */ (function (_super) {
    __extends(PutFunctionAsyncInvokeConfigRequest, _super);
    function PutFunctionAsyncInvokeConfigRequest(map) {
        return _super.call(this, map) || this;
    }
    PutFunctionAsyncInvokeConfigRequest.names = function () {
        return {
            destinationConfig: 'destinationConfig',
            maxAsyncEventAgeInSeconds: 'maxAsyncEventAgeInSeconds',
            maxAsyncRetryAttempts: 'maxAsyncRetryAttempts',
            statefulInvocation: 'statefulInvocation',
            qualifier: 'qualifier',
        };
    };
    PutFunctionAsyncInvokeConfigRequest.types = function () {
        return {
            destinationConfig: DestinationConfig,
            maxAsyncEventAgeInSeconds: 'number',
            maxAsyncRetryAttempts: 'number',
            statefulInvocation: 'boolean',
            qualifier: 'string',
        };
    };
    return PutFunctionAsyncInvokeConfigRequest;
}($tea.Model));
exports.PutFunctionAsyncInvokeConfigRequest = PutFunctionAsyncInvokeConfigRequest;
var PutFunctionAsyncInvokeConfigResponseBody = /** @class */ (function (_super) {
    __extends(PutFunctionAsyncInvokeConfigResponseBody, _super);
    function PutFunctionAsyncInvokeConfigResponseBody(map) {
        return _super.call(this, map) || this;
    }
    PutFunctionAsyncInvokeConfigResponseBody.names = function () {
        return {
            createdTime: 'createdTime',
            destinationConfig: 'destinationConfig',
            function: 'function',
            lastModifiedTime: 'lastModifiedTime',
            maxAsyncEventAgeInSeconds: 'maxAsyncEventAgeInSeconds',
            maxAsyncRetryAttempts: 'maxAsyncRetryAttempts',
            qualifier: 'qualifier',
            service: 'service',
            statefulInvocation: 'statefulInvocation',
        };
    };
    PutFunctionAsyncInvokeConfigResponseBody.types = function () {
        return {
            createdTime: 'string',
            destinationConfig: DestinationConfig,
            function: 'string',
            lastModifiedTime: 'string',
            maxAsyncEventAgeInSeconds: 'number',
            maxAsyncRetryAttempts: 'number',
            qualifier: 'string',
            service: 'string',
            statefulInvocation: 'boolean',
        };
    };
    return PutFunctionAsyncInvokeConfigResponseBody;
}($tea.Model));
exports.PutFunctionAsyncInvokeConfigResponseBody = PutFunctionAsyncInvokeConfigResponseBody;
var PutFunctionAsyncInvokeConfigResponse = /** @class */ (function (_super) {
    __extends(PutFunctionAsyncInvokeConfigResponse, _super);
    function PutFunctionAsyncInvokeConfigResponse(map) {
        return _super.call(this, map) || this;
    }
    PutFunctionAsyncInvokeConfigResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    PutFunctionAsyncInvokeConfigResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: PutFunctionAsyncInvokeConfigResponseBody,
        };
    };
    return PutFunctionAsyncInvokeConfigResponse;
}($tea.Model));
exports.PutFunctionAsyncInvokeConfigResponse = PutFunctionAsyncInvokeConfigResponse;
var PutFunctionOnDemandConfigHeaders = /** @class */ (function (_super) {
    __extends(PutFunctionOnDemandConfigHeaders, _super);
    function PutFunctionOnDemandConfigHeaders(map) {
        return _super.call(this, map) || this;
    }
    PutFunctionOnDemandConfigHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            ifMatch: 'If-Match',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    PutFunctionOnDemandConfigHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            ifMatch: 'string',
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return PutFunctionOnDemandConfigHeaders;
}($tea.Model));
exports.PutFunctionOnDemandConfigHeaders = PutFunctionOnDemandConfigHeaders;
var PutFunctionOnDemandConfigRequest = /** @class */ (function (_super) {
    __extends(PutFunctionOnDemandConfigRequest, _super);
    function PutFunctionOnDemandConfigRequest(map) {
        return _super.call(this, map) || this;
    }
    PutFunctionOnDemandConfigRequest.names = function () {
        return {
            maximumInstanceCount: 'maximumInstanceCount',
            qualifier: 'qualifier',
        };
    };
    PutFunctionOnDemandConfigRequest.types = function () {
        return {
            maximumInstanceCount: 'number',
            qualifier: 'string',
        };
    };
    return PutFunctionOnDemandConfigRequest;
}($tea.Model));
exports.PutFunctionOnDemandConfigRequest = PutFunctionOnDemandConfigRequest;
var PutFunctionOnDemandConfigResponseBody = /** @class */ (function (_super) {
    __extends(PutFunctionOnDemandConfigResponseBody, _super);
    function PutFunctionOnDemandConfigResponseBody(map) {
        return _super.call(this, map) || this;
    }
    PutFunctionOnDemandConfigResponseBody.names = function () {
        return {
            maximumInstanceCount: 'maximumInstanceCount',
            resource: 'resource',
        };
    };
    PutFunctionOnDemandConfigResponseBody.types = function () {
        return {
            maximumInstanceCount: 'number',
            resource: 'string',
        };
    };
    return PutFunctionOnDemandConfigResponseBody;
}($tea.Model));
exports.PutFunctionOnDemandConfigResponseBody = PutFunctionOnDemandConfigResponseBody;
var PutFunctionOnDemandConfigResponse = /** @class */ (function (_super) {
    __extends(PutFunctionOnDemandConfigResponse, _super);
    function PutFunctionOnDemandConfigResponse(map) {
        return _super.call(this, map) || this;
    }
    PutFunctionOnDemandConfigResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    PutFunctionOnDemandConfigResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: PutFunctionOnDemandConfigResponseBody,
        };
    };
    return PutFunctionOnDemandConfigResponse;
}($tea.Model));
exports.PutFunctionOnDemandConfigResponse = PutFunctionOnDemandConfigResponse;
var PutProvisionConfigHeaders = /** @class */ (function (_super) {
    __extends(PutProvisionConfigHeaders, _super);
    function PutProvisionConfigHeaders(map) {
        return _super.call(this, map) || this;
    }
    PutProvisionConfigHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    PutProvisionConfigHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return PutProvisionConfigHeaders;
}($tea.Model));
exports.PutProvisionConfigHeaders = PutProvisionConfigHeaders;
var PutProvisionConfigRequest = /** @class */ (function (_super) {
    __extends(PutProvisionConfigRequest, _super);
    function PutProvisionConfigRequest(map) {
        return _super.call(this, map) || this;
    }
    PutProvisionConfigRequest.names = function () {
        return {
            scheduledActions: 'scheduledActions',
            target: 'target',
            targetTrackingPolicies: 'targetTrackingPolicies',
            qualifier: 'qualifier',
        };
    };
    PutProvisionConfigRequest.types = function () {
        return {
            scheduledActions: { 'type': 'array', 'itemType': ScheduledActions },
            target: 'number',
            targetTrackingPolicies: { 'type': 'array', 'itemType': TargetTrackingPolicies },
            qualifier: 'string',
        };
    };
    return PutProvisionConfigRequest;
}($tea.Model));
exports.PutProvisionConfigRequest = PutProvisionConfigRequest;
var PutProvisionConfigResponseBody = /** @class */ (function (_super) {
    __extends(PutProvisionConfigResponseBody, _super);
    function PutProvisionConfigResponseBody(map) {
        return _super.call(this, map) || this;
    }
    PutProvisionConfigResponseBody.names = function () {
        return {
            current: 'current',
            resource: 'resource',
            scheduledActions: 'scheduledActions',
            target: 'target',
            targetTrackingPolicies: 'targetTrackingPolicies',
        };
    };
    PutProvisionConfigResponseBody.types = function () {
        return {
            current: 'number',
            resource: 'string',
            scheduledActions: { 'type': 'array', 'itemType': ScheduledActions },
            target: 'number',
            targetTrackingPolicies: { 'type': 'array', 'itemType': TargetTrackingPolicies },
        };
    };
    return PutProvisionConfigResponseBody;
}($tea.Model));
exports.PutProvisionConfigResponseBody = PutProvisionConfigResponseBody;
var PutProvisionConfigResponse = /** @class */ (function (_super) {
    __extends(PutProvisionConfigResponse, _super);
    function PutProvisionConfigResponse(map) {
        return _super.call(this, map) || this;
    }
    PutProvisionConfigResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    PutProvisionConfigResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: PutProvisionConfigResponseBody,
        };
    };
    return PutProvisionConfigResponse;
}($tea.Model));
exports.PutProvisionConfigResponse = PutProvisionConfigResponse;
var RegisterEventSourceHeaders = /** @class */ (function (_super) {
    __extends(RegisterEventSourceHeaders, _super);
    function RegisterEventSourceHeaders(map) {
        return _super.call(this, map) || this;
    }
    RegisterEventSourceHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    RegisterEventSourceHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return RegisterEventSourceHeaders;
}($tea.Model));
exports.RegisterEventSourceHeaders = RegisterEventSourceHeaders;
var RegisterEventSourceRequest = /** @class */ (function (_super) {
    __extends(RegisterEventSourceRequest, _super);
    function RegisterEventSourceRequest(map) {
        return _super.call(this, map) || this;
    }
    RegisterEventSourceRequest.names = function () {
        return {
            sourceArn: 'sourceArn',
            qualifier: 'qualifier',
        };
    };
    RegisterEventSourceRequest.types = function () {
        return {
            sourceArn: 'string',
            qualifier: 'string',
        };
    };
    return RegisterEventSourceRequest;
}($tea.Model));
exports.RegisterEventSourceRequest = RegisterEventSourceRequest;
var RegisterEventSourceResponseBody = /** @class */ (function (_super) {
    __extends(RegisterEventSourceResponseBody, _super);
    function RegisterEventSourceResponseBody(map) {
        return _super.call(this, map) || this;
    }
    RegisterEventSourceResponseBody.names = function () {
        return {
            createdTime: 'createdTime',
            sourceArn: 'sourceArn',
        };
    };
    RegisterEventSourceResponseBody.types = function () {
        return {
            createdTime: 'string',
            sourceArn: 'string',
        };
    };
    return RegisterEventSourceResponseBody;
}($tea.Model));
exports.RegisterEventSourceResponseBody = RegisterEventSourceResponseBody;
var RegisterEventSourceResponse = /** @class */ (function (_super) {
    __extends(RegisterEventSourceResponse, _super);
    function RegisterEventSourceResponse(map) {
        return _super.call(this, map) || this;
    }
    RegisterEventSourceResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    RegisterEventSourceResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: RegisterEventSourceResponseBody,
        };
    };
    return RegisterEventSourceResponse;
}($tea.Model));
exports.RegisterEventSourceResponse = RegisterEventSourceResponse;
var StopStatefulAsyncInvocationHeaders = /** @class */ (function (_super) {
    __extends(StopStatefulAsyncInvocationHeaders, _super);
    function StopStatefulAsyncInvocationHeaders(map) {
        return _super.call(this, map) || this;
    }
    StopStatefulAsyncInvocationHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    StopStatefulAsyncInvocationHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return StopStatefulAsyncInvocationHeaders;
}($tea.Model));
exports.StopStatefulAsyncInvocationHeaders = StopStatefulAsyncInvocationHeaders;
var StopStatefulAsyncInvocationRequest = /** @class */ (function (_super) {
    __extends(StopStatefulAsyncInvocationRequest, _super);
    function StopStatefulAsyncInvocationRequest(map) {
        return _super.call(this, map) || this;
    }
    StopStatefulAsyncInvocationRequest.names = function () {
        return {
            qualifier: 'qualifier',
        };
    };
    StopStatefulAsyncInvocationRequest.types = function () {
        return {
            qualifier: 'string',
        };
    };
    return StopStatefulAsyncInvocationRequest;
}($tea.Model));
exports.StopStatefulAsyncInvocationRequest = StopStatefulAsyncInvocationRequest;
var StopStatefulAsyncInvocationResponse = /** @class */ (function (_super) {
    __extends(StopStatefulAsyncInvocationResponse, _super);
    function StopStatefulAsyncInvocationResponse(map) {
        return _super.call(this, map) || this;
    }
    StopStatefulAsyncInvocationResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    StopStatefulAsyncInvocationResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return StopStatefulAsyncInvocationResponse;
}($tea.Model));
exports.StopStatefulAsyncInvocationResponse = StopStatefulAsyncInvocationResponse;
var TagResourceHeaders = /** @class */ (function (_super) {
    __extends(TagResourceHeaders, _super);
    function TagResourceHeaders(map) {
        return _super.call(this, map) || this;
    }
    TagResourceHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    TagResourceHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return TagResourceHeaders;
}($tea.Model));
exports.TagResourceHeaders = TagResourceHeaders;
var TagResourceRequest = /** @class */ (function (_super) {
    __extends(TagResourceRequest, _super);
    function TagResourceRequest(map) {
        return _super.call(this, map) || this;
    }
    TagResourceRequest.names = function () {
        return {
            resourceArn: 'resourceArn',
            tags: 'tags',
        };
    };
    TagResourceRequest.types = function () {
        return {
            resourceArn: 'string',
            tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return TagResourceRequest;
}($tea.Model));
exports.TagResourceRequest = TagResourceRequest;
var TagResourceResponse = /** @class */ (function (_super) {
    __extends(TagResourceResponse, _super);
    function TagResourceResponse(map) {
        return _super.call(this, map) || this;
    }
    TagResourceResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    TagResourceResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return TagResourceResponse;
}($tea.Model));
exports.TagResourceResponse = TagResourceResponse;
var UntagResourceHeaders = /** @class */ (function (_super) {
    __extends(UntagResourceHeaders, _super);
    function UntagResourceHeaders(map) {
        return _super.call(this, map) || this;
    }
    UntagResourceHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    UntagResourceHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return UntagResourceHeaders;
}($tea.Model));
exports.UntagResourceHeaders = UntagResourceHeaders;
var UntagResourceRequest = /** @class */ (function (_super) {
    __extends(UntagResourceRequest, _super);
    function UntagResourceRequest(map) {
        return _super.call(this, map) || this;
    }
    UntagResourceRequest.names = function () {
        return {
            all: 'all',
            resourceArn: 'resourceArn',
            tagKeys: 'tagKeys	',
        };
    };
    UntagResourceRequest.types = function () {
        return {
            all: 'boolean',
            resourceArn: 'string',
            tagKeys: { 'type': 'array', 'itemType': 'string' },
        };
    };
    return UntagResourceRequest;
}($tea.Model));
exports.UntagResourceRequest = UntagResourceRequest;
var UntagResourceResponse = /** @class */ (function (_super) {
    __extends(UntagResourceResponse, _super);
    function UntagResourceResponse(map) {
        return _super.call(this, map) || this;
    }
    UntagResourceResponse.names = function () {
        return {
            headers: 'headers',
        };
    };
    UntagResourceResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    };
    return UntagResourceResponse;
}($tea.Model));
exports.UntagResourceResponse = UntagResourceResponse;
var UpdateAliasHeaders = /** @class */ (function (_super) {
    __extends(UpdateAliasHeaders, _super);
    function UpdateAliasHeaders(map) {
        return _super.call(this, map) || this;
    }
    UpdateAliasHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            ifMatch: 'If-Match',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    UpdateAliasHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            ifMatch: 'string',
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return UpdateAliasHeaders;
}($tea.Model));
exports.UpdateAliasHeaders = UpdateAliasHeaders;
var UpdateAliasRequest = /** @class */ (function (_super) {
    __extends(UpdateAliasRequest, _super);
    function UpdateAliasRequest(map) {
        return _super.call(this, map) || this;
    }
    UpdateAliasRequest.names = function () {
        return {
            additionalVersionWeight: 'additionalVersionWeight',
            description: 'description',
            versionId: 'versionId',
        };
    };
    UpdateAliasRequest.types = function () {
        return {
            additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
            description: 'string',
            versionId: 'string',
        };
    };
    return UpdateAliasRequest;
}($tea.Model));
exports.UpdateAliasRequest = UpdateAliasRequest;
var UpdateAliasResponseBody = /** @class */ (function (_super) {
    __extends(UpdateAliasResponseBody, _super);
    function UpdateAliasResponseBody(map) {
        return _super.call(this, map) || this;
    }
    UpdateAliasResponseBody.names = function () {
        return {
            additionalVersionWeight: 'additionalVersionWeight',
            aliasName: 'aliasName',
            createdTime: 'createdTime',
            description: 'description',
            lastModifiedTime: 'lastModifiedTime',
            versionId: 'versionId',
        };
    };
    UpdateAliasResponseBody.types = function () {
        return {
            additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
            aliasName: 'string',
            createdTime: 'string',
            description: 'string',
            lastModifiedTime: 'string',
            versionId: 'string',
        };
    };
    return UpdateAliasResponseBody;
}($tea.Model));
exports.UpdateAliasResponseBody = UpdateAliasResponseBody;
var UpdateAliasResponse = /** @class */ (function (_super) {
    __extends(UpdateAliasResponse, _super);
    function UpdateAliasResponse(map) {
        return _super.call(this, map) || this;
    }
    UpdateAliasResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    UpdateAliasResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: UpdateAliasResponseBody,
        };
    };
    return UpdateAliasResponse;
}($tea.Model));
exports.UpdateAliasResponse = UpdateAliasResponse;
var UpdateCustomDomainHeaders = /** @class */ (function (_super) {
    __extends(UpdateCustomDomainHeaders, _super);
    function UpdateCustomDomainHeaders(map) {
        return _super.call(this, map) || this;
    }
    UpdateCustomDomainHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    UpdateCustomDomainHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return UpdateCustomDomainHeaders;
}($tea.Model));
exports.UpdateCustomDomainHeaders = UpdateCustomDomainHeaders;
var UpdateCustomDomainRequest = /** @class */ (function (_super) {
    __extends(UpdateCustomDomainRequest, _super);
    function UpdateCustomDomainRequest(map) {
        return _super.call(this, map) || this;
    }
    UpdateCustomDomainRequest.names = function () {
        return {
            certConfig: 'certConfig',
            protocol: 'protocol',
            routeConfig: 'routeConfig',
        };
    };
    UpdateCustomDomainRequest.types = function () {
        return {
            certConfig: CertConfig,
            protocol: 'string',
            routeConfig: RouteConfig,
        };
    };
    return UpdateCustomDomainRequest;
}($tea.Model));
exports.UpdateCustomDomainRequest = UpdateCustomDomainRequest;
var UpdateCustomDomainResponseBody = /** @class */ (function (_super) {
    __extends(UpdateCustomDomainResponseBody, _super);
    function UpdateCustomDomainResponseBody(map) {
        return _super.call(this, map) || this;
    }
    UpdateCustomDomainResponseBody.names = function () {
        return {
            accountId: 'accountId',
            apiVersion: 'apiVersion',
            certConfig: 'certConfig',
            createdTime: 'createdTime',
            domainName: 'domainName',
            lastModifiedTime: 'lastModifiedTime',
            protocol: 'protocol',
            routeConfig: 'routeConfig',
        };
    };
    UpdateCustomDomainResponseBody.types = function () {
        return {
            accountId: 'string',
            apiVersion: 'string',
            certConfig: CertConfig,
            createdTime: 'string',
            domainName: 'string',
            lastModifiedTime: 'string',
            protocol: 'string',
            routeConfig: RouteConfig,
        };
    };
    return UpdateCustomDomainResponseBody;
}($tea.Model));
exports.UpdateCustomDomainResponseBody = UpdateCustomDomainResponseBody;
var UpdateCustomDomainResponse = /** @class */ (function (_super) {
    __extends(UpdateCustomDomainResponse, _super);
    function UpdateCustomDomainResponse(map) {
        return _super.call(this, map) || this;
    }
    UpdateCustomDomainResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    UpdateCustomDomainResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: UpdateCustomDomainResponseBody,
        };
    };
    return UpdateCustomDomainResponse;
}($tea.Model));
exports.UpdateCustomDomainResponse = UpdateCustomDomainResponse;
var UpdateFunctionHeaders = /** @class */ (function (_super) {
    __extends(UpdateFunctionHeaders, _super);
    function UpdateFunctionHeaders(map) {
        return _super.call(this, map) || this;
    }
    UpdateFunctionHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            ifMatch: 'If-Match',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    UpdateFunctionHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            ifMatch: 'string',
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return UpdateFunctionHeaders;
}($tea.Model));
exports.UpdateFunctionHeaders = UpdateFunctionHeaders;
var UpdateFunctionRequest = /** @class */ (function (_super) {
    __extends(UpdateFunctionRequest, _super);
    function UpdateFunctionRequest(map) {
        return _super.call(this, map) || this;
    }
    UpdateFunctionRequest.names = function () {
        return {
            instanceConcurrency: 'InstanceConcurrency',
            caPort: 'caPort',
            code: 'code',
            customContainerConfig: 'customContainerConfig',
            customDNS: 'customDNS',
            customRuntimeConfig: 'customRuntimeConfig',
            description: 'description',
            environmentVariables: 'environmentVariables',
            handler: 'handler',
            initializationTimeout: 'initializationTimeout',
            initializer: 'initializer',
            instanceLifecycleConfig: 'instanceLifecycleConfig',
            instanceType: 'instanceType',
            layers: 'layers',
            memorySize: 'memorySize',
            runtime: 'runtime',
            timeout: 'timeout',
        };
    };
    UpdateFunctionRequest.types = function () {
        return {
            instanceConcurrency: 'number',
            caPort: 'number',
            code: Code,
            customContainerConfig: CustomContainerConfig,
            customDNS: CustomDNS,
            customRuntimeConfig: CustomRuntimeConfig,
            description: 'string',
            environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            handler: 'string',
            initializationTimeout: 'number',
            initializer: 'string',
            instanceLifecycleConfig: InstanceLifecycleConfig,
            instanceType: 'string',
            layers: { 'type': 'array', 'itemType': 'string' },
            memorySize: 'number',
            runtime: 'string',
            timeout: 'number',
        };
    };
    return UpdateFunctionRequest;
}($tea.Model));
exports.UpdateFunctionRequest = UpdateFunctionRequest;
var UpdateFunctionResponseBody = /** @class */ (function (_super) {
    __extends(UpdateFunctionResponseBody, _super);
    function UpdateFunctionResponseBody(map) {
        return _super.call(this, map) || this;
    }
    UpdateFunctionResponseBody.names = function () {
        return {
            caPort: 'caPort',
            codeChecksum: 'codeChecksum',
            codeSize: 'codeSize',
            createdTime: 'createdTime',
            customContainerConfig: 'customContainerConfig',
            customDNS: 'customDNS',
            customRuntimeConfig: 'customRuntimeConfig',
            description: 'description',
            environmentVariables: 'environmentVariables',
            functionId: 'functionId',
            functionName: 'functionName',
            handler: 'handler',
            initializationTimeout: 'initializationTimeout',
            initializer: 'initializer',
            instanceLifecycleConfig: 'instanceLifecycleConfig',
            instanceType: 'instanceType',
            lastModifiedTime: 'lastModifiedTime',
            layers: 'layers',
            memorySize: 'memorySize',
            runtime: 'runtime',
            timeout: 'timeout',
        };
    };
    UpdateFunctionResponseBody.types = function () {
        return {
            caPort: 'number',
            codeChecksum: 'string',
            codeSize: 'number',
            createdTime: 'string',
            customContainerConfig: CustomContainerConfig,
            customDNS: CustomDNS,
            customRuntimeConfig: CustomRuntimeConfig,
            description: 'string',
            environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            functionId: 'string',
            functionName: 'string',
            handler: 'string',
            initializationTimeout: 'number',
            initializer: 'string',
            instanceLifecycleConfig: InstanceLifecycleConfig,
            instanceType: 'string',
            lastModifiedTime: 'string',
            layers: { 'type': 'array', 'itemType': 'string' },
            memorySize: 'number',
            runtime: 'string',
            timeout: 'number',
        };
    };
    return UpdateFunctionResponseBody;
}($tea.Model));
exports.UpdateFunctionResponseBody = UpdateFunctionResponseBody;
var UpdateFunctionResponse = /** @class */ (function (_super) {
    __extends(UpdateFunctionResponse, _super);
    function UpdateFunctionResponse(map) {
        return _super.call(this, map) || this;
    }
    UpdateFunctionResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    UpdateFunctionResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: UpdateFunctionResponseBody,
        };
    };
    return UpdateFunctionResponse;
}($tea.Model));
exports.UpdateFunctionResponse = UpdateFunctionResponse;
var UpdateServiceHeaders = /** @class */ (function (_super) {
    __extends(UpdateServiceHeaders, _super);
    function UpdateServiceHeaders(map) {
        return _super.call(this, map) || this;
    }
    UpdateServiceHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            ifMatch: 'If-Match',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    UpdateServiceHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            ifMatch: 'string',
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return UpdateServiceHeaders;
}($tea.Model));
exports.UpdateServiceHeaders = UpdateServiceHeaders;
var UpdateServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateServiceRequest, _super);
    function UpdateServiceRequest(map) {
        return _super.call(this, map) || this;
    }
    UpdateServiceRequest.names = function () {
        return {
            description: 'description',
            internetAccess: 'internetAccess',
            logConfig: 'logConfig',
            nasConfig: 'nasConfig',
            role: 'role',
            tracingConfig: 'tracingConfig',
            vpcConfig: 'vpcConfig',
        };
    };
    UpdateServiceRequest.types = function () {
        return {
            description: 'string',
            internetAccess: 'boolean',
            logConfig: LogConfig,
            nasConfig: NASConfig,
            role: 'string',
            tracingConfig: TracingConfig,
            vpcConfig: VPCConfig,
        };
    };
    return UpdateServiceRequest;
}($tea.Model));
exports.UpdateServiceRequest = UpdateServiceRequest;
var UpdateServiceResponseBody = /** @class */ (function (_super) {
    __extends(UpdateServiceResponseBody, _super);
    function UpdateServiceResponseBody(map) {
        return _super.call(this, map) || this;
    }
    UpdateServiceResponseBody.names = function () {
        return {
            createdTime: 'createdTime',
            description: 'description',
            internetAccess: 'internetAccess',
            lastModifiedTime: 'lastModifiedTime',
            logConfig: 'logConfig',
            nasConfig: 'nasConfig',
            role: 'role',
            serviceId: 'serviceId',
            serviceName: 'serviceName',
            tracingConfig: 'tracingConfig',
            vpcConfig: 'vpcConfig',
        };
    };
    UpdateServiceResponseBody.types = function () {
        return {
            createdTime: 'string',
            description: 'string',
            internetAccess: 'boolean',
            lastModifiedTime: 'string',
            logConfig: LogConfig,
            nasConfig: NASConfig,
            role: 'string',
            serviceId: 'string',
            serviceName: 'string',
            tracingConfig: TracingConfig,
            vpcConfig: VPCConfig,
        };
    };
    return UpdateServiceResponseBody;
}($tea.Model));
exports.UpdateServiceResponseBody = UpdateServiceResponseBody;
var UpdateServiceResponse = /** @class */ (function (_super) {
    __extends(UpdateServiceResponse, _super);
    function UpdateServiceResponse(map) {
        return _super.call(this, map) || this;
    }
    UpdateServiceResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    UpdateServiceResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: UpdateServiceResponseBody,
        };
    };
    return UpdateServiceResponse;
}($tea.Model));
exports.UpdateServiceResponse = UpdateServiceResponse;
var UpdateTriggerHeaders = /** @class */ (function (_super) {
    __extends(UpdateTriggerHeaders, _super);
    function UpdateTriggerHeaders(map) {
        return _super.call(this, map) || this;
    }
    UpdateTriggerHeaders.names = function () {
        return {
            commonHeaders: 'commonHeaders',
            ifMatch: 'If-Match',
            xFcAccountId: 'X-Fc-Account-Id',
            xFcCodeChecksum: 'X-Fc-Code-Checksum',
            xFcDate: 'X-Fc-Date',
            xFcInvocationType: 'X-Fc-Invocation-Type',
            xFcLogType: 'X-Fc-Log-Type',
            xFcTraceId: 'X-Fc-Trace-Id',
        };
    };
    UpdateTriggerHeaders.types = function () {
        return {
            commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            ifMatch: 'string',
            xFcAccountId: 'string',
            xFcCodeChecksum: 'string',
            xFcDate: 'string',
            xFcInvocationType: 'string',
            xFcLogType: 'string',
            xFcTraceId: 'string',
        };
    };
    return UpdateTriggerHeaders;
}($tea.Model));
exports.UpdateTriggerHeaders = UpdateTriggerHeaders;
var UpdateTriggerRequest = /** @class */ (function (_super) {
    __extends(UpdateTriggerRequest, _super);
    function UpdateTriggerRequest(map) {
        return _super.call(this, map) || this;
    }
    UpdateTriggerRequest.names = function () {
        return {
            description: 'description',
            invocationRole: 'invocationRole',
            qualifier: 'qualifier',
            triggerConfig: 'triggerConfig',
        };
    };
    UpdateTriggerRequest.types = function () {
        return {
            description: 'string',
            invocationRole: 'string',
            qualifier: 'string',
            triggerConfig: 'string',
        };
    };
    return UpdateTriggerRequest;
}($tea.Model));
exports.UpdateTriggerRequest = UpdateTriggerRequest;
var UpdateTriggerResponseBody = /** @class */ (function (_super) {
    __extends(UpdateTriggerResponseBody, _super);
    function UpdateTriggerResponseBody(map) {
        return _super.call(this, map) || this;
    }
    UpdateTriggerResponseBody.names = function () {
        return {
            createdTime: 'createdTime',
            description: 'description',
            domainName: 'domainName',
            invocationRole: 'invocationRole',
            lastModifiedTime: 'lastModifiedTime',
            qualifier: 'qualifier',
            sourceArn: 'sourceArn',
            triggerConfig: 'triggerConfig',
            triggerId: 'triggerId',
            triggerName: 'triggerName',
            triggerType: 'triggerType',
        };
    };
    UpdateTriggerResponseBody.types = function () {
        return {
            createdTime: 'string',
            description: 'string',
            domainName: 'string',
            invocationRole: 'string',
            lastModifiedTime: 'string',
            qualifier: 'string',
            sourceArn: 'string',
            triggerConfig: 'string',
            triggerId: 'string',
            triggerName: 'string',
            triggerType: 'string',
        };
    };
    return UpdateTriggerResponseBody;
}($tea.Model));
exports.UpdateTriggerResponseBody = UpdateTriggerResponseBody;
var UpdateTriggerResponse = /** @class */ (function (_super) {
    __extends(UpdateTriggerResponse, _super);
    function UpdateTriggerResponse(map) {
        return _super.call(this, map) || this;
    }
    UpdateTriggerResponse.names = function () {
        return {
            headers: 'headers',
            body: 'body',
        };
    };
    UpdateTriggerResponse.types = function () {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            body: UpdateTriggerResponseBody,
        };
    };
    return UpdateTriggerResponse;
}($tea.Model));
exports.UpdateTriggerResponse = UpdateTriggerResponse;
var NASConfigMountPoints = /** @class */ (function (_super) {
    __extends(NASConfigMountPoints, _super);
    function NASConfigMountPoints(map) {
        return _super.call(this, map) || this;
    }
    NASConfigMountPoints.names = function () {
        return {
            mountDir: 'mountDir',
            serverAddr: 'serverAddr',
        };
    };
    NASConfigMountPoints.types = function () {
        return {
            mountDir: 'string',
            serverAddr: 'string',
        };
    };
    return NASConfigMountPoints;
}($tea.Model));
exports.NASConfigMountPoints = NASConfigMountPoints;
var ListAliasesResponseBodyAliases = /** @class */ (function (_super) {
    __extends(ListAliasesResponseBodyAliases, _super);
    function ListAliasesResponseBodyAliases(map) {
        return _super.call(this, map) || this;
    }
    ListAliasesResponseBodyAliases.names = function () {
        return {
            additionalVersionWeight: 'additionalVersionWeight',
            aliasName: 'aliasName',
            createdTime: 'createdTime',
            description: 'description',
            lastModifiedTime: 'lastModifiedTime',
            versionId: 'versionId',
        };
    };
    ListAliasesResponseBodyAliases.types = function () {
        return {
            additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
            aliasName: 'string',
            createdTime: 'string',
            description: 'string',
            lastModifiedTime: 'string',
            versionId: 'string',
        };
    };
    return ListAliasesResponseBodyAliases;
}($tea.Model));
exports.ListAliasesResponseBodyAliases = ListAliasesResponseBodyAliases;
var ListCustomDomainsResponseBodyCustomDomains = /** @class */ (function (_super) {
    __extends(ListCustomDomainsResponseBodyCustomDomains, _super);
    function ListCustomDomainsResponseBodyCustomDomains(map) {
        return _super.call(this, map) || this;
    }
    ListCustomDomainsResponseBodyCustomDomains.names = function () {
        return {
            accountId: 'accountId',
            apiVersion: 'apiVersion',
            certConfig: 'certConfig',
            createdTime: 'createdTime',
            domainName: 'domainName',
            lastModifiedTime: 'lastModifiedTime',
            protocol: 'protocol',
            routeConfig: 'routeConfig',
        };
    };
    ListCustomDomainsResponseBodyCustomDomains.types = function () {
        return {
            accountId: 'string',
            apiVersion: 'string',
            certConfig: CertConfig,
            createdTime: 'string',
            domainName: 'string',
            lastModifiedTime: 'string',
            protocol: 'string',
            routeConfig: RouteConfig,
        };
    };
    return ListCustomDomainsResponseBodyCustomDomains;
}($tea.Model));
exports.ListCustomDomainsResponseBodyCustomDomains = ListCustomDomainsResponseBodyCustomDomains;
var ListEventSourcesResponseBodyEventSources = /** @class */ (function (_super) {
    __extends(ListEventSourcesResponseBodyEventSources, _super);
    function ListEventSourcesResponseBodyEventSources(map) {
        return _super.call(this, map) || this;
    }
    ListEventSourcesResponseBodyEventSources.names = function () {
        return {
            createdTime: 'createdTime',
            sourceArn: 'sourceArn',
        };
    };
    ListEventSourcesResponseBodyEventSources.types = function () {
        return {
            createdTime: 'string',
            sourceArn: 'string',
        };
    };
    return ListEventSourcesResponseBodyEventSources;
}($tea.Model));
exports.ListEventSourcesResponseBodyEventSources = ListEventSourcesResponseBodyEventSources;
var ListFunctionAsyncInvokeConfigsResponseBodyConfigs = /** @class */ (function (_super) {
    __extends(ListFunctionAsyncInvokeConfigsResponseBodyConfigs, _super);
    function ListFunctionAsyncInvokeConfigsResponseBodyConfigs(map) {
        return _super.call(this, map) || this;
    }
    ListFunctionAsyncInvokeConfigsResponseBodyConfigs.names = function () {
        return {
            createdTime: 'createdTime',
            destinationConfig: 'destinationConfig',
            function: 'function',
            lastModifiedTime: 'lastModifiedTime',
            maxAsyncEventAgeInSeconds: 'maxAsyncEventAgeInSeconds',
            maxAsyncRetryAttempts: 'maxAsyncRetryAttempts',
            qualifier: 'qualifier',
            service: 'service',
            statefulInvocation: 'statefulInvocation',
        };
    };
    ListFunctionAsyncInvokeConfigsResponseBodyConfigs.types = function () {
        return {
            createdTime: 'string',
            destinationConfig: DestinationConfig,
            function: 'string',
            lastModifiedTime: 'string',
            maxAsyncEventAgeInSeconds: 'number',
            maxAsyncRetryAttempts: 'number',
            qualifier: 'string',
            service: 'string',
            statefulInvocation: 'boolean',
        };
    };
    return ListFunctionAsyncInvokeConfigsResponseBodyConfigs;
}($tea.Model));
exports.ListFunctionAsyncInvokeConfigsResponseBodyConfigs = ListFunctionAsyncInvokeConfigsResponseBodyConfigs;
var ListFunctionsResponseBodyFunctions = /** @class */ (function (_super) {
    __extends(ListFunctionsResponseBodyFunctions, _super);
    function ListFunctionsResponseBodyFunctions(map) {
        return _super.call(this, map) || this;
    }
    ListFunctionsResponseBodyFunctions.names = function () {
        return {
            caPort: 'caPort',
            codeChecksum: 'codeChecksum',
            codeSize: 'codeSize',
            createdTime: 'createdTime',
            customContainerConfig: 'customContainerConfig',
            description: 'description',
            environmentVariables: 'environmentVariables',
            functionId: 'functionId',
            functionName: 'functionName',
            handler: 'handler',
            initializationTimeout: 'initializationTimeout',
            initializer: 'initializer',
            instanceConcurrency: 'instanceConcurrency',
            instanceLifecycleConfig: 'instanceLifecycleConfig',
            instanceType: 'instanceType',
            lastModifiedTime: 'lastModifiedTime',
            layers: 'layers',
            memorySize: 'memorySize',
            runtime: 'runtime',
            timeout: 'timeout',
        };
    };
    ListFunctionsResponseBodyFunctions.types = function () {
        return {
            caPort: 'number',
            codeChecksum: 'string',
            codeSize: 'number',
            createdTime: 'string',
            customContainerConfig: CustomContainerConfig,
            description: 'string',
            environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            functionId: 'string',
            functionName: 'string',
            handler: 'string',
            initializationTimeout: 'number',
            initializer: 'string',
            instanceConcurrency: 'number',
            instanceLifecycleConfig: InstanceLifecycleConfig,
            instanceType: 'string',
            lastModifiedTime: 'string',
            layers: { 'type': 'array', 'itemType': 'string' },
            memorySize: 'number',
            runtime: 'string',
            timeout: 'number',
        };
    };
    return ListFunctionsResponseBodyFunctions;
}($tea.Model));
exports.ListFunctionsResponseBodyFunctions = ListFunctionsResponseBodyFunctions;
var ListInstancesResponseBodyInstances = /** @class */ (function (_super) {
    __extends(ListInstancesResponseBodyInstances, _super);
    function ListInstancesResponseBodyInstances(map) {
        return _super.call(this, map) || this;
    }
    ListInstancesResponseBodyInstances.names = function () {
        return {
            instanceId: 'instanceId',
            versionId: 'versionId',
        };
    };
    ListInstancesResponseBodyInstances.types = function () {
        return {
            instanceId: 'string',
            versionId: 'string',
        };
    };
    return ListInstancesResponseBodyInstances;
}($tea.Model));
exports.ListInstancesResponseBodyInstances = ListInstancesResponseBodyInstances;
var ListProvisionConfigsResponseBodyProvisionConfigs = /** @class */ (function (_super) {
    __extends(ListProvisionConfigsResponseBodyProvisionConfigs, _super);
    function ListProvisionConfigsResponseBodyProvisionConfigs(map) {
        return _super.call(this, map) || this;
    }
    ListProvisionConfigsResponseBodyProvisionConfigs.names = function () {
        return {
            current: 'current',
            currentError: 'currentError',
            resource: 'resource',
            scheduledActions: 'scheduledActions',
            target: 'target',
            targetTrackingPolicies: 'targetTrackingPolicies',
        };
    };
    ListProvisionConfigsResponseBodyProvisionConfigs.types = function () {
        return {
            current: 'number',
            currentError: 'string',
            resource: 'string',
            scheduledActions: { 'type': 'array', 'itemType': ScheduledActions },
            target: 'number',
            targetTrackingPolicies: { 'type': 'array', 'itemType': TargetTrackingPolicies },
        };
    };
    return ListProvisionConfigsResponseBodyProvisionConfigs;
}($tea.Model));
exports.ListProvisionConfigsResponseBodyProvisionConfigs = ListProvisionConfigsResponseBodyProvisionConfigs;
var ListServiceVersionsResponseBodyVersions = /** @class */ (function (_super) {
    __extends(ListServiceVersionsResponseBodyVersions, _super);
    function ListServiceVersionsResponseBodyVersions(map) {
        return _super.call(this, map) || this;
    }
    ListServiceVersionsResponseBodyVersions.names = function () {
        return {
            createdTime: 'createdTime',
            description: 'description',
            lastModifiedTime: 'lastModifiedTime',
            versionId: 'versionId',
        };
    };
    ListServiceVersionsResponseBodyVersions.types = function () {
        return {
            createdTime: 'string',
            description: 'string',
            lastModifiedTime: 'string',
            versionId: 'string',
        };
    };
    return ListServiceVersionsResponseBodyVersions;
}($tea.Model));
exports.ListServiceVersionsResponseBodyVersions = ListServiceVersionsResponseBodyVersions;
var ListServicesResponseBodyServices = /** @class */ (function (_super) {
    __extends(ListServicesResponseBodyServices, _super);
    function ListServicesResponseBodyServices(map) {
        return _super.call(this, map) || this;
    }
    ListServicesResponseBodyServices.names = function () {
        return {
            createdTime: 'createdTime',
            description: 'description',
            internetAccess: 'internetAccess',
            lastModifiedTime: 'lastModifiedTime',
            logConfig: 'logConfig',
            nasConfig: 'nasConfig',
            role: 'role',
            serviceId: 'serviceId',
            serviceName: 'serviceName',
            tracingConfig: 'tracingConfig',
            vpcConfig: 'vpcConfig',
        };
    };
    ListServicesResponseBodyServices.types = function () {
        return {
            createdTime: 'string',
            description: 'string',
            internetAccess: 'boolean',
            lastModifiedTime: 'string',
            logConfig: LogConfig,
            nasConfig: NASConfig,
            role: 'string',
            serviceId: 'string',
            serviceName: 'string',
            tracingConfig: TracingConfig,
            vpcConfig: VPCConfig,
        };
    };
    return ListServicesResponseBodyServices;
}($tea.Model));
exports.ListServicesResponseBodyServices = ListServicesResponseBodyServices;
var ListTriggersResponseBodyTriggers = /** @class */ (function (_super) {
    __extends(ListTriggersResponseBodyTriggers, _super);
    function ListTriggersResponseBodyTriggers(map) {
        return _super.call(this, map) || this;
    }
    ListTriggersResponseBodyTriggers.names = function () {
        return {
            createdTime: 'createdTime',
            description: 'description',
            domainName: 'domainName',
            invocationRole: 'invocationRole',
            lastModifiedTime: 'lastModifiedTime',
            qualifier: 'qualifier',
            sourceArn: 'sourceArn',
            triggerConfig: 'triggerConfig',
            triggerId: 'triggerId',
            triggerName: 'triggerName',
            triggerType: 'triggerType',
        };
    };
    ListTriggersResponseBodyTriggers.types = function () {
        return {
            createdTime: 'string',
            description: 'string',
            domainName: 'string',
            invocationRole: 'string',
            lastModifiedTime: 'string',
            qualifier: 'string',
            sourceArn: 'string',
            triggerConfig: 'string',
            triggerId: 'string',
            triggerName: 'string',
            triggerType: 'string',
        };
    };
    return ListTriggersResponseBodyTriggers;
}($tea.Model));
exports.ListTriggersResponseBodyTriggers = ListTriggersResponseBodyTriggers;
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(config) {
        var _this = _super.call(this, config) || this;
        _this._endpointRule = "regional";
        _this._endpointMap = {
            'ap-northeast-1': "account-id.ap-northeast-1.fc.aliyuncs.com",
            'ap-south-1': "account-id.ap-south-1.fc.aliyuncs.com",
            'ap-southeast-1': "account-id.ap-southeast-1.fc.aliyuncs.com",
            'ap-southeast-2': "account-id.ap-southeast-2.fc.aliyuncs.com",
            'ap-southeast-3': "account-id.ap-southeast-3.fc.aliyuncs.com",
            'ap-southeast-5': "account-id.ap-southeast-5.fc.aliyuncs.com",
            'cn-beijing': "account-id.cn-beijing.fc.aliyuncs.com",
            'cn-chengdu': "account-id.cn-chengdu.fc.aliyuncs.com",
            'cn-hangzhou': "account-id.cn-hangzhou.fc.aliyuncs.com",
            'cn-hangzhou-finance': "account-id.cn-hangzhou-finance.fc.aliyuncs.com",
            'cn-hongkong': "account-id.cn-hongkong.fc.aliyuncs.com",
            'cn-huhehaote': "account-id.cn-huhehaote.fc.aliyuncs.com",
            'cn-north-2-gov-1': "account-id.cn-north-2-gov-1.fc.aliyuncs.com",
            'cn-qingdao': "account-id.cn-qingdao.fc.aliyuncs.com",
            'cn-shanghai': "account-id.cn-shanghai.fc.aliyuncs.com",
            'cn-shenzhen': "account-id.cn-shenzhen.fc.aliyuncs.com",
            'cn-zhangjiakou': "account-id.cn-zhangjiakou.fc.aliyuncs.com",
            'eu-central-1': "account-id.eu-central-1.fc.aliyuncs.com",
            'eu-west-1': "account-id.eu-west-1.fc.aliyuncs.com",
            'us-east-1': "account-id.us-east-1.fc.aliyuncs.com",
            'us-west-1': "account-id.us-west-1.fc.aliyuncs.com",
        };
        _this.checkConfig(config);
        _this._endpoint = _this.getEndpoint("fc-open", _this._regionId, _this._endpointRule, _this._network, _this._suffix, _this._endpointMap, _this._endpoint);
        return _this;
    }
    Client.prototype.getEndpoint = function (productId, regionId, endpointRule, network, suffix, endpointMap, endpoint) {
        if (!tea_util_1.default.empty(endpoint)) {
            return endpoint;
        }
        if (!tea_util_1.default.isUnset(endpointMap) && !tea_util_1.default.empty(endpointMap[regionId])) {
            return endpointMap[regionId];
        }
        return endpoint_util_1.default.getEndpointRules(productId, regionId, endpointRule, network, suffix);
    };
    Client.prototype.createAlias = function (serviceName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new CreateAliasHeaders({});
                        return [4 /*yield*/, this.createAliasWithOptions(serviceName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.createAliasWithOptions = function (serviceName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        body = {};
                        if (!tea_util_1.default.isUnset(request.additionalVersionWeight)) {
                            body["additionalVersionWeight"] = request.additionalVersionWeight;
                        }
                        if (!tea_util_1.default.isUnset(request.aliasName)) {
                            body["aliasName"] = request.aliasName;
                        }
                        if (!tea_util_1.default.isUnset(request.description)) {
                            body["description"] = request.description;
                        }
                        if (!tea_util_1.default.isUnset(request.versionId)) {
                            body["versionId"] = request.versionId;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "CreateAlias",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/aliases",
                            method: "POST",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new CreateAliasResponse({})])];
                }
            });
        });
    };
    Client.prototype.createCustomDomain = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new CreateCustomDomainHeaders({});
                        return [4 /*yield*/, this.createCustomDomainWithOptions(request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.createCustomDomainWithOptions = function (request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        body = {};
                        if (!tea_util_1.default.isUnset($tea.toMap(request.certConfig))) {
                            body["certConfig"] = request.certConfig;
                        }
                        if (!tea_util_1.default.isUnset(request.domainName)) {
                            body["domainName"] = request.domainName;
                        }
                        if (!tea_util_1.default.isUnset(request.protocol)) {
                            body["protocol"] = request.protocol;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.routeConfig))) {
                            body["routeConfig"] = request.routeConfig;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "CreateCustomDomain",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/custom-domains",
                            method: "POST",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new CreateCustomDomainResponse({})])];
                }
            });
        });
    };
    Client.prototype.createFunction = function (serviceName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new CreateFunctionHeaders({});
                        return [4 /*yield*/, this.createFunctionWithOptions(serviceName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.createFunctionWithOptions = function (serviceName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        body = {};
                        if (!tea_util_1.default.isUnset(request.caPort)) {
                            body["caPort"] = request.caPort;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.code))) {
                            body["code"] = request.code;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.customContainerConfig))) {
                            body["customContainerConfig"] = request.customContainerConfig;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.customDNS))) {
                            body["customDNS"] = request.customDNS;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.customRuntimeConfig))) {
                            body["customRuntimeConfig"] = request.customRuntimeConfig;
                        }
                        if (!tea_util_1.default.isUnset(request.description)) {
                            body["description"] = request.description;
                        }
                        if (!tea_util_1.default.isUnset(request.environmentVariables)) {
                            body["environmentVariables"] = request.environmentVariables;
                        }
                        if (!tea_util_1.default.isUnset(request.functionName)) {
                            body["functionName"] = request.functionName;
                        }
                        if (!tea_util_1.default.isUnset(request.handler)) {
                            body["handler"] = request.handler;
                        }
                        if (!tea_util_1.default.isUnset(request.initializationTimeout)) {
                            body["initializationTimeout"] = request.initializationTimeout;
                        }
                        if (!tea_util_1.default.isUnset(request.initializer)) {
                            body["initializer"] = request.initializer;
                        }
                        if (!tea_util_1.default.isUnset(request.instanceConcurrency)) {
                            body["instanceConcurrency"] = request.instanceConcurrency;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.instanceLifecycleConfig))) {
                            body["instanceLifecycleConfig"] = request.instanceLifecycleConfig;
                        }
                        if (!tea_util_1.default.isUnset(request.instanceType)) {
                            body["instanceType"] = request.instanceType;
                        }
                        if (!tea_util_1.default.isUnset(request.layers)) {
                            body["layers"] = request.layers;
                        }
                        if (!tea_util_1.default.isUnset(request.memorySize)) {
                            body["memorySize"] = request.memorySize;
                        }
                        if (!tea_util_1.default.isUnset(request.runtime)) {
                            body["runtime"] = request.runtime;
                        }
                        if (!tea_util_1.default.isUnset(request.timeout)) {
                            body["timeout"] = request.timeout;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "CreateFunction",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions",
                            method: "POST",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new CreateFunctionResponse({})])];
                }
            });
        });
    };
    Client.prototype.createLayerVersion = function (layerName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new CreateLayerVersionHeaders({});
                        return [4 /*yield*/, this.createLayerVersionWithOptions(layerName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.createLayerVersionWithOptions = function (layerName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        layerName = openapi_util_1.default.getEncodeParam(layerName);
                        body = {};
                        if (!tea_util_1.default.isUnset($tea.toMap(request.code))) {
                            body["Code"] = request.code;
                        }
                        if (!tea_util_1.default.isUnset(request.compatibleRuntime)) {
                            body["compatibleRuntime"] = request.compatibleRuntime;
                        }
                        if (!tea_util_1.default.isUnset(request.description)) {
                            body["description"] = request.description;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "CreateLayerVersion",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/layers/" + layerName + "/versions",
                            method: "POST",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new CreateLayerVersionResponse({})])];
                }
            });
        });
    };
    Client.prototype.createService = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new CreateServiceHeaders({});
                        return [4 /*yield*/, this.createServiceWithOptions(request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.createServiceWithOptions = function (request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        body = {};
                        if (!tea_util_1.default.isUnset(request.description)) {
                            body["description"] = request.description;
                        }
                        if (!tea_util_1.default.isUnset(request.internetAccess)) {
                            body["internetAccess"] = request.internetAccess;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.logConfig))) {
                            body["logConfig"] = request.logConfig;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.nasConfig))) {
                            body["nasConfig"] = request.nasConfig;
                        }
                        if (!tea_util_1.default.isUnset(request.role)) {
                            body["role"] = request.role;
                        }
                        if (!tea_util_1.default.isUnset(request.serviceName)) {
                            body["serviceName"] = request.serviceName;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.tracingConfig))) {
                            body["tracingConfig"] = request.tracingConfig;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.vpcConfig))) {
                            body["vpcConfig"] = request.vpcConfig;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "CreateService",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services",
                            method: "POST",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new CreateServiceResponse({})])];
                }
            });
        });
    };
    Client.prototype.createTrigger = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new CreateTriggerHeaders({});
                        return [4 /*yield*/, this.createTriggerWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.createTriggerWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        body = {};
                        if (!tea_util_1.default.isUnset(request.description)) {
                            body["description"] = request.description;
                        }
                        if (!tea_util_1.default.isUnset(request.invocationRole)) {
                            body["invocationRole"] = request.invocationRole;
                        }
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            body["qualifier"] = request.qualifier;
                        }
                        if (!tea_util_1.default.isUnset(request.sourceArn)) {
                            body["sourceArn"] = request.sourceArn;
                        }
                        if (!tea_util_1.default.isUnset(request.triggerConfig)) {
                            body["triggerConfig"] = request.triggerConfig;
                        }
                        if (!tea_util_1.default.isUnset(request.triggerName)) {
                            body["triggerName"] = request.triggerName;
                        }
                        if (!tea_util_1.default.isUnset(request.triggerType)) {
                            body["triggerType"] = request.triggerType;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "CreateTrigger",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/triggers",
                            method: "POST",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new CreateTriggerResponse({})])];
                }
            });
        });
    };
    Client.prototype.createVpcBinding = function (serviceName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new CreateVpcBindingHeaders({});
                        return [4 /*yield*/, this.createVpcBindingWithOptions(serviceName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.createVpcBindingWithOptions = function (serviceName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        body = {};
                        if (!tea_util_1.default.isUnset(request.vpcId)) {
                            body["vpcId"] = request.vpcId;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "CreateVpcBinding",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/bindings",
                            method: "POST",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new CreateVpcBindingResponse({})])];
                }
            });
        });
    };
    Client.prototype.deleteAlias = function (serviceName, aliasName) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new DeleteAliasHeaders({});
                        return [4 /*yield*/, this.deleteAliasWithOptions(serviceName, aliasName, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.deleteAliasWithOptions = function (serviceName, aliasName, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        aliasName = openapi_util_1.default.getEncodeParam(aliasName);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.ifMatch)) {
                            realHeaders["If-Match"] = tea_util_1.default.toJSONString(headers.ifMatch);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "DeleteAlias",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/aliases/" + aliasName,
                            method: "DELETE",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new DeleteAliasResponse({})])];
                }
            });
        });
    };
    Client.prototype.deleteCustomDomain = function (domainName) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new DeleteCustomDomainHeaders({});
                        return [4 /*yield*/, this.deleteCustomDomainWithOptions(domainName, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.deleteCustomDomainWithOptions = function (domainName, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        domainName = openapi_util_1.default.getEncodeParam(domainName);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "DeleteCustomDomain",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/custom-domains/" + domainName,
                            method: "DELETE",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new DeleteCustomDomainResponse({})])];
                }
            });
        });
    };
    Client.prototype.deleteFunction = function (serviceName, functionName) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new DeleteFunctionHeaders({});
                        return [4 /*yield*/, this.deleteFunctionWithOptions(serviceName, functionName, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.deleteFunctionWithOptions = function (serviceName, functionName, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.ifMatch)) {
                            realHeaders["If-Match"] = tea_util_1.default.toJSONString(headers.ifMatch);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "DeleteFunction",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName,
                            method: "DELETE",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new DeleteFunctionResponse({})])];
                }
            });
        });
    };
    Client.prototype.deleteFunctionAsyncInvokeConfig = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new DeleteFunctionAsyncInvokeConfigHeaders({});
                        return [4 /*yield*/, this.deleteFunctionAsyncInvokeConfigWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.deleteFunctionAsyncInvokeConfigWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "DeleteFunctionAsyncInvokeConfig",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/async-invoke-config",
                            method: "DELETE",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new DeleteFunctionAsyncInvokeConfigResponse({})])];
                }
            });
        });
    };
    Client.prototype.deleteFunctionOnDemandConfig = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new DeleteFunctionOnDemandConfigHeaders({});
                        return [4 /*yield*/, this.deleteFunctionOnDemandConfigWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.deleteFunctionOnDemandConfigWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.ifMatch)) {
                            realHeaders["If-Match"] = tea_util_1.default.toJSONString(headers.ifMatch);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "DeleteFunctionOnDemandConfig",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/on-demand-config",
                            method: "DELETE",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new DeleteFunctionOnDemandConfigResponse({})])];
                }
            });
        });
    };
    Client.prototype.deleteLayerVersion = function (layerName, version) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new DeleteLayerVersionHeaders({});
                        return [4 /*yield*/, this.deleteLayerVersionWithOptions(layerName, version, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.deleteLayerVersionWithOptions = function (layerName, version, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        layerName = openapi_util_1.default.getEncodeParam(layerName);
                        version = openapi_util_1.default.getEncodeParam(version);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "DeleteLayerVersion",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/layers/" + layerName + "/versions/" + version,
                            method: "DELETE",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new DeleteLayerVersionResponse({})])];
                }
            });
        });
    };
    Client.prototype.deleteService = function (serviceName) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new DeleteServiceHeaders({});
                        return [4 /*yield*/, this.deleteServiceWithOptions(serviceName, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.deleteServiceWithOptions = function (serviceName, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.ifMatch)) {
                            realHeaders["If-Match"] = tea_util_1.default.toJSONString(headers.ifMatch);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "DeleteService",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName,
                            method: "DELETE",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new DeleteServiceResponse({})])];
                }
            });
        });
    };
    Client.prototype.deleteServiceVersion = function (serviceName, versionId) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new DeleteServiceVersionHeaders({});
                        return [4 /*yield*/, this.deleteServiceVersionWithOptions(serviceName, versionId, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.deleteServiceVersionWithOptions = function (serviceName, versionId, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        versionId = openapi_util_1.default.getEncodeParam(versionId);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "DeleteServiceVersion",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/versions/" + versionId,
                            method: "DELETE",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new DeleteServiceVersionResponse({})])];
                }
            });
        });
    };
    Client.prototype.deleteTrigger = function (serviceName, functionName, triggerName) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new DeleteTriggerHeaders({});
                        return [4 /*yield*/, this.deleteTriggerWithOptions(serviceName, functionName, triggerName, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.deleteTriggerWithOptions = function (serviceName, functionName, triggerName, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        triggerName = openapi_util_1.default.getEncodeParam(triggerName);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.ifMatch)) {
                            realHeaders["If-Match"] = tea_util_1.default.toJSONString(headers.ifMatch);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "DeleteTrigger",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/triggers/" + triggerName,
                            method: "DELETE",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new DeleteTriggerResponse({})])];
                }
            });
        });
    };
    Client.prototype.deleteVpcBinding = function (serviceName, vpcId) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new DeleteVpcBindingHeaders({});
                        return [4 /*yield*/, this.deleteVpcBindingWithOptions(serviceName, vpcId, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.deleteVpcBindingWithOptions = function (serviceName, vpcId, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        vpcId = openapi_util_1.default.getEncodeParam(vpcId);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "DeleteVpcBinding",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/bindings/" + vpcId,
                            method: "DELETE",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new DeleteVpcBindingResponse({})])];
                }
            });
        });
    };
    Client.prototype.deregisterEventSource = function (serviceName, functionName, sourceArn, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new DeregisterEventSourceHeaders({});
                        return [4 /*yield*/, this.deregisterEventSourceWithOptions(serviceName, functionName, sourceArn, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.deregisterEventSourceWithOptions = function (serviceName, functionName, sourceArn, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        sourceArn = openapi_util_1.default.getEncodeParam(sourceArn);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "DeregisterEventSource",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/event-sources/" + sourceArn,
                            method: "DELETE",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new DeregisterEventSourceResponse({})])];
                }
            });
        });
    };
    Client.prototype.getAccountSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetAccountSettingsHeaders({});
                        return [4 /*yield*/, this.getAccountSettingsWithOptions(headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getAccountSettingsWithOptions = function (headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "GetAccountSettings",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/account-settings",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetAccountSettingsResponse({})])];
                }
            });
        });
    };
    Client.prototype.getAlias = function (serviceName, aliasName) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetAliasHeaders({});
                        return [4 /*yield*/, this.getAliasWithOptions(serviceName, aliasName, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getAliasWithOptions = function (serviceName, aliasName, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        aliasName = openapi_util_1.default.getEncodeParam(aliasName);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "GetAlias",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/aliases/" + aliasName,
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetAliasResponse({})])];
                }
            });
        });
    };
    Client.prototype.getCustomDomain = function (domainName) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetCustomDomainHeaders({});
                        return [4 /*yield*/, this.getCustomDomainWithOptions(domainName, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getCustomDomainWithOptions = function (domainName, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        domainName = openapi_util_1.default.getEncodeParam(domainName);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "GetCustomDomain",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/custom-domains/" + domainName,
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetCustomDomainResponse({})])];
                }
            });
        });
    };
    Client.prototype.getFunction = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetFunctionHeaders({});
                        return [4 /*yield*/, this.getFunctionWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getFunctionWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "GetFunction",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName,
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetFunctionResponse({})])];
                }
            });
        });
    };
    Client.prototype.getFunctionAsyncInvokeConfig = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetFunctionAsyncInvokeConfigHeaders({});
                        return [4 /*yield*/, this.getFunctionAsyncInvokeConfigWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getFunctionAsyncInvokeConfigWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "GetFunctionAsyncInvokeConfig",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/async-invoke-config",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetFunctionAsyncInvokeConfigResponse({})])];
                }
            });
        });
    };
    Client.prototype.getFunctionCode = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetFunctionCodeHeaders({});
                        return [4 /*yield*/, this.getFunctionCodeWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getFunctionCodeWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "GetFunctionCode",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/code",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetFunctionCodeResponse({})])];
                }
            });
        });
    };
    Client.prototype.getFunctionOnDemandConfig = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetFunctionOnDemandConfigHeaders({});
                        return [4 /*yield*/, this.getFunctionOnDemandConfigWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getFunctionOnDemandConfigWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "GetFunctionOnDemandConfig",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/on-demand-config",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetFunctionOnDemandConfigResponse({})])];
                }
            });
        });
    };
    Client.prototype.getLayerVersion = function (layerName, version) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetLayerVersionHeaders({});
                        return [4 /*yield*/, this.getLayerVersionWithOptions(layerName, version, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getLayerVersionWithOptions = function (layerName, version, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        layerName = openapi_util_1.default.getEncodeParam(layerName);
                        version = openapi_util_1.default.getEncodeParam(version);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "GetLayerVersion",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/layers/" + layerName + "/versions/" + version,
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetLayerVersionResponse({})])];
                }
            });
        });
    };
    Client.prototype.getLayerVersionByArn = function (arn) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetLayerVersionByArnHeaders({});
                        return [4 /*yield*/, this.getLayerVersionByArnWithOptions(arn, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getLayerVersionByArnWithOptions = function (arn, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        arn = openapi_util_1.default.getEncodeParam(arn);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "GetLayerVersionByArn",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/layerarn/" + arn,
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetLayerVersionByArnResponse({})])];
                }
            });
        });
    };
    Client.prototype.getProvisionConfig = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetProvisionConfigHeaders({});
                        return [4 /*yield*/, this.getProvisionConfigWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getProvisionConfigWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "GetProvisionConfig",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/provision-config",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetProvisionConfigResponse({})])];
                }
            });
        });
    };
    Client.prototype.getResourceTags = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetResourceTagsHeaders({});
                        return [4 /*yield*/, this.getResourceTagsWithOptions(request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getResourceTagsWithOptions = function (request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.resourceArn)) {
                            query["resourceArn"] = request.resourceArn;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "GetResourceTags",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/tag",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetResourceTagsResponse({})])];
                }
            });
        });
    };
    Client.prototype.getService = function (serviceName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetServiceHeaders({});
                        return [4 /*yield*/, this.getServiceWithOptions(serviceName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getServiceWithOptions = function (serviceName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "GetService",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName,
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetServiceResponse({})])];
                }
            });
        });
    };
    Client.prototype.getStatefulAsyncInvocation = function (serviceName, functionName, invocationId, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetStatefulAsyncInvocationHeaders({});
                        return [4 /*yield*/, this.getStatefulAsyncInvocationWithOptions(serviceName, functionName, invocationId, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getStatefulAsyncInvocationWithOptions = function (serviceName, functionName, invocationId, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        invocationId = openapi_util_1.default.getEncodeParam(invocationId);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "GetStatefulAsyncInvocation",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/stateful-async-invocations/" + invocationId,
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetStatefulAsyncInvocationResponse({})])];
                }
            });
        });
    };
    Client.prototype.getTrigger = function (serviceName, functionName, triggerName) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new GetTriggerHeaders({});
                        return [4 /*yield*/, this.getTriggerWithOptions(serviceName, functionName, triggerName, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.getTriggerWithOptions = function (serviceName, functionName, triggerName, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        triggerName = openapi_util_1.default.getEncodeParam(triggerName);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "GetTrigger",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/triggers/" + triggerName,
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new GetTriggerResponse({})])];
                }
            });
        });
    };
    Client.prototype.invokeFunction = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new InvokeFunctionHeaders({});
                        return [4 /*yield*/, this.invokeFunctionWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.invokeFunctionWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcStatefulAsyncInvocationId)) {
                            realHeaders["X-Fc-Stateful-Async-Invocation-Id"] = tea_util_1.default.toJSONString(headers.xFcStatefulAsyncInvocationId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                            body: request.body,
                        });
                        params = new $OpenApi.Params({
                            action: "InvokeFunction",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/invocations",
                            method: "POST",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "byte",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new InvokeFunctionResponse({})])];
                }
            });
        });
    };
    Client.prototype.listAliases = function (serviceName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListAliasesHeaders({});
                        return [4 /*yield*/, this.listAliasesWithOptions(serviceName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listAliasesWithOptions = function (serviceName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        if (!tea_util_1.default.isUnset(request.prefix)) {
                            query["prefix"] = request.prefix;
                        }
                        if (!tea_util_1.default.isUnset(request.startKey)) {
                            query["startKey"] = request.startKey;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListAliases",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/aliases",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListAliasesResponse({})])];
                }
            });
        });
    };
    Client.prototype.listCustomDomains = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListCustomDomainsHeaders({});
                        return [4 /*yield*/, this.listCustomDomainsWithOptions(request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listCustomDomainsWithOptions = function (request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        if (!tea_util_1.default.isUnset(request.prefix)) {
                            query["prefix"] = request.prefix;
                        }
                        if (!tea_util_1.default.isUnset(request.startKey)) {
                            query["startKey"] = request.startKey;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListCustomDomains",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/custom-domains",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListCustomDomainsResponse({})])];
                }
            });
        });
    };
    Client.prototype.listEventSources = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListEventSourcesHeaders({});
                        return [4 /*yield*/, this.listEventSourcesWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listEventSourcesWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListEventSources",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/event-sources",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListEventSourcesResponse({})])];
                }
            });
        });
    };
    Client.prototype.listFunctionAsyncInvokeConfigs = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListFunctionAsyncInvokeConfigsHeaders({});
                        return [4 /*yield*/, this.listFunctionAsyncInvokeConfigsWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listFunctionAsyncInvokeConfigsWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListFunctionAsyncInvokeConfigs",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/async-invoke-configs",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListFunctionAsyncInvokeConfigsResponse({})])];
                }
            });
        });
    };
    Client.prototype.listFunctions = function (serviceName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListFunctionsHeaders({});
                        return [4 /*yield*/, this.listFunctionsWithOptions(serviceName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listFunctionsWithOptions = function (serviceName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        if (!tea_util_1.default.isUnset(request.prefix)) {
                            query["prefix"] = request.prefix;
                        }
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        if (!tea_util_1.default.isUnset(request.startKey)) {
                            query["startKey"] = request.startKey;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListFunctions",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListFunctionsResponse({})])];
                }
            });
        });
    };
    Client.prototype.listInstances = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListInstancesHeaders({});
                        return [4 /*yield*/, this.listInstancesWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listInstancesWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListInstances",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/instances",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListInstancesResponse({})])];
                }
            });
        });
    };
    Client.prototype.listLayerVersions = function (layerName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListLayerVersionsHeaders({});
                        return [4 /*yield*/, this.listLayerVersionsWithOptions(layerName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listLayerVersionsWithOptions = function (layerName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        layerName = openapi_util_1.default.getEncodeParam(layerName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.startVersion)) {
                            query["startVersion"] = request.startVersion;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListLayerVersions",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/layers/" + layerName + "/versions",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListLayerVersionsResponse({})])];
                }
            });
        });
    };
    Client.prototype.listLayers = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListLayersHeaders({});
                        return [4 /*yield*/, this.listLayersWithOptions(request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listLayersWithOptions = function (request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        if (!tea_util_1.default.isUnset(request.prefix)) {
                            query["prefix"] = request.prefix;
                        }
                        if (!tea_util_1.default.isUnset(request.startKey)) {
                            query["startKey"] = request.startKey;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListLayers",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/layers",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListLayersResponse({})])];
                }
            });
        });
    };
    Client.prototype.listOnDemandConfigs = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListOnDemandConfigsHeaders({});
                        return [4 /*yield*/, this.listOnDemandConfigsWithOptions(request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listOnDemandConfigsWithOptions = function (request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        if (!tea_util_1.default.isUnset(request.prefix)) {
                            query["prefix"] = request.prefix;
                        }
                        if (!tea_util_1.default.isUnset(request.startKey)) {
                            query["startKey"] = request.startKey;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListOnDemandConfigs",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/on-demand-configs",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListOnDemandConfigsResponse({})])];
                }
            });
        });
    };
    Client.prototype.listProvisionConfigs = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListProvisionConfigsHeaders({});
                        return [4 /*yield*/, this.listProvisionConfigsWithOptions(request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listProvisionConfigsWithOptions = function (request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        if (!tea_util_1.default.isUnset(request.serviceName)) {
                            query["serviceName"] = request.serviceName;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListProvisionConfigs",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/provision-configs",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListProvisionConfigsResponse({})])];
                }
            });
        });
    };
    Client.prototype.listReservedCapacities = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListReservedCapacitiesHeaders({});
                        return [4 /*yield*/, this.listReservedCapacitiesWithOptions(request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listReservedCapacitiesWithOptions = function (request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListReservedCapacities",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/reserved-capacities",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListReservedCapacitiesResponse({})])];
                }
            });
        });
    };
    Client.prototype.listServiceVersions = function (serviceName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListServiceVersionsHeaders({});
                        return [4 /*yield*/, this.listServiceVersionsWithOptions(serviceName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listServiceVersionsWithOptions = function (serviceName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.direction)) {
                            query["direction"] = request.direction;
                        }
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        if (!tea_util_1.default.isUnset(request.startKey)) {
                            query["startKey"] = request.startKey;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListServiceVersions",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/versions",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListServiceVersionsResponse({})])];
                }
            });
        });
    };
    Client.prototype.listServices = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListServicesHeaders({});
                        return [4 /*yield*/, this.listServicesWithOptions(request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listServicesWithOptions = function (request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        if (!tea_util_1.default.isUnset(request.prefix)) {
                            query["prefix"] = request.prefix;
                        }
                        if (!tea_util_1.default.isUnset(request.startKey)) {
                            query["startKey"] = request.startKey;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListServices",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListServicesResponse({})])];
                }
            });
        });
    };
    Client.prototype.listStatefulAsyncInvocations = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListStatefulAsyncInvocationsHeaders({});
                        return [4 /*yield*/, this.listStatefulAsyncInvocationsWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listStatefulAsyncInvocationsWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.includePayload)) {
                            query["includePayload"] = request.includePayload;
                        }
                        if (!tea_util_1.default.isUnset(request.invocationIdPrefix)) {
                            query["invocationIdPrefix"] = request.invocationIdPrefix;
                        }
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        if (!tea_util_1.default.isUnset(request.sortOrderByTime)) {
                            query["sortOrderByTime"] = request.sortOrderByTime;
                        }
                        if (!tea_util_1.default.isUnset(request.startedTimeBegin)) {
                            query["startedTimeBegin"] = request.startedTimeBegin;
                        }
                        if (!tea_util_1.default.isUnset(request.startedTimeEnd)) {
                            query["startedTimeEnd"] = request.startedTimeEnd;
                        }
                        if (!tea_util_1.default.isUnset(request.status)) {
                            query["status"] = request.status;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListStatefulAsyncInvocations",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/stateful-async-invocations",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListStatefulAsyncInvocationsResponse({})])];
                }
            });
        });
    };
    Client.prototype.listTaggedResources = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListTaggedResourcesHeaders({});
                        return [4 /*yield*/, this.listTaggedResourcesWithOptions(request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listTaggedResourcesWithOptions = function (request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListTaggedResources",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/tags",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListTaggedResourcesResponse({})])];
                }
            });
        });
    };
    Client.prototype.listTriggers = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListTriggersHeaders({});
                        return [4 /*yield*/, this.listTriggersWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listTriggersWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.limit)) {
                            query["limit"] = request.limit;
                        }
                        if (!tea_util_1.default.isUnset(request.nextToken)) {
                            query["nextToken"] = request.nextToken;
                        }
                        if (!tea_util_1.default.isUnset(request.prefix)) {
                            query["prefix"] = request.prefix;
                        }
                        if (!tea_util_1.default.isUnset(request.startKey)) {
                            query["startKey"] = request.startKey;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "ListTriggers",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/triggers",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListTriggersResponse({})])];
                }
            });
        });
    };
    Client.prototype.listVpcBindings = function (serviceName) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new ListVpcBindingsHeaders({});
                        return [4 /*yield*/, this.listVpcBindingsWithOptions(serviceName, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.listVpcBindingsWithOptions = function (serviceName, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "ListVpcBindings",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/bindings",
                            method: "GET",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new ListVpcBindingsResponse({})])];
                }
            });
        });
    };
    Client.prototype.permanentDeleteLayerVersion = function (userID, layerName, version) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new PermanentDeleteLayerVersionHeaders({});
                        return [4 /*yield*/, this.permanentDeleteLayerVersionWithOptions(userID, layerName, version, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.permanentDeleteLayerVersionWithOptions = function (userID, layerName, version, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        userID = openapi_util_1.default.getEncodeParam(userID);
                        layerName = openapi_util_1.default.getEncodeParam(layerName);
                        version = openapi_util_1.default.getEncodeParam(version);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "PermanentDeleteLayerVersion",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/adminlayers/" + userID + "/" + layerName + "/versions/" + version,
                            method: "DELETE",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new PermanentDeleteLayerVersionResponse({})])];
                }
            });
        });
    };
    Client.prototype.publishLayerAsPublic = function (layerName, version) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new PublishLayerAsPublicHeaders({});
                        return [4 /*yield*/, this.publishLayerAsPublicWithOptions(layerName, version, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.publishLayerAsPublicWithOptions = function (layerName, version, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        layerName = openapi_util_1.default.getEncodeParam(layerName);
                        version = openapi_util_1.default.getEncodeParam(version);
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                        });
                        params = new $OpenApi.Params({
                            action: "PublishLayerAsPublic",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/layers/" + layerName + "/versions/" + version,
                            method: "POST",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new PublishLayerAsPublicResponse({})])];
                }
            });
        });
    };
    Client.prototype.publishServiceVersion = function (serviceName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new PublishServiceVersionHeaders({});
                        return [4 /*yield*/, this.publishServiceVersionWithOptions(serviceName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.publishServiceVersionWithOptions = function (serviceName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        body = {};
                        if (!tea_util_1.default.isUnset(request.description)) {
                            body["description"] = request.description;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.ifMatch)) {
                            realHeaders["If-Match"] = tea_util_1.default.toJSONString(headers.ifMatch);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "PublishServiceVersion",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/versions",
                            method: "POST",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new PublishServiceVersionResponse({})])];
                }
            });
        });
    };
    Client.prototype.putFunctionAsyncInvokeConfig = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new PutFunctionAsyncInvokeConfigHeaders({});
                        return [4 /*yield*/, this.putFunctionAsyncInvokeConfigWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.putFunctionAsyncInvokeConfigWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        body = {};
                        if (!tea_util_1.default.isUnset($tea.toMap(request.destinationConfig))) {
                            body["destinationConfig"] = request.destinationConfig;
                        }
                        if (!tea_util_1.default.isUnset(request.maxAsyncEventAgeInSeconds)) {
                            body["maxAsyncEventAgeInSeconds"] = request.maxAsyncEventAgeInSeconds;
                        }
                        if (!tea_util_1.default.isUnset(request.maxAsyncRetryAttempts)) {
                            body["maxAsyncRetryAttempts"] = request.maxAsyncRetryAttempts;
                        }
                        if (!tea_util_1.default.isUnset(request.statefulInvocation)) {
                            body["statefulInvocation"] = request.statefulInvocation;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "PutFunctionAsyncInvokeConfig",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/async-invoke-config",
                            method: "PUT",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new PutFunctionAsyncInvokeConfigResponse({})])];
                }
            });
        });
    };
    Client.prototype.putFunctionOnDemandConfig = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new PutFunctionOnDemandConfigHeaders({});
                        return [4 /*yield*/, this.putFunctionOnDemandConfigWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.putFunctionOnDemandConfigWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        body = {};
                        if (!tea_util_1.default.isUnset(request.maximumInstanceCount)) {
                            body["maximumInstanceCount"] = request.maximumInstanceCount;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.ifMatch)) {
                            realHeaders["If-Match"] = tea_util_1.default.toJSONString(headers.ifMatch);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "PutFunctionOnDemandConfig",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/on-demand-config",
                            method: "PUT",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new PutFunctionOnDemandConfigResponse({})])];
                }
            });
        });
    };
    Client.prototype.putProvisionConfig = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new PutProvisionConfigHeaders({});
                        return [4 /*yield*/, this.putProvisionConfigWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.putProvisionConfigWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        body = {};
                        if (!tea_util_1.default.isUnset(request.scheduledActions)) {
                            body["scheduledActions"] = request.scheduledActions;
                        }
                        if (!tea_util_1.default.isUnset(request.target)) {
                            body["target"] = request.target;
                        }
                        if (!tea_util_1.default.isUnset(request.targetTrackingPolicies)) {
                            body["targetTrackingPolicies"] = request.targetTrackingPolicies;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "PutProvisionConfig",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/provision-config",
                            method: "PUT",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new PutProvisionConfigResponse({})])];
                }
            });
        });
    };
    Client.prototype.registerEventSource = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new RegisterEventSourceHeaders({});
                        return [4 /*yield*/, this.registerEventSourceWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.registerEventSourceWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        body = {};
                        if (!tea_util_1.default.isUnset(request.sourceArn)) {
                            body["sourceArn"] = request.sourceArn;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "RegisterEventSource",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/event-sources",
                            method: "POST",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new RegisterEventSourceResponse({})])];
                }
            });
        });
    };
    Client.prototype.stopStatefulAsyncInvocation = function (serviceName, functionName, invocationId, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new StopStatefulAsyncInvocationHeaders({});
                        return [4 /*yield*/, this.stopStatefulAsyncInvocationWithOptions(serviceName, functionName, invocationId, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.stopStatefulAsyncInvocationWithOptions = function (serviceName, functionName, invocationId, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var query, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        invocationId = openapi_util_1.default.getEncodeParam(invocationId);
                        query = {};
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            query["qualifier"] = request.qualifier;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            query: openapi_util_1.default.query(query),
                        });
                        params = new $OpenApi.Params({
                            action: "StopStatefulAsyncInvocation",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/stateful-async-invocations/" + invocationId,
                            method: "PUT",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new StopStatefulAsyncInvocationResponse({})])];
                }
            });
        });
    };
    Client.prototype.tagResource = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new TagResourceHeaders({});
                        return [4 /*yield*/, this.tagResourceWithOptions(request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.tagResourceWithOptions = function (request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        body = {};
                        if (!tea_util_1.default.isUnset(request.resourceArn)) {
                            body["resourceArn"] = request.resourceArn;
                        }
                        if (!tea_util_1.default.isUnset(request.tags)) {
                            body["tags"] = request.tags;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "TagResource",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/tag",
                            method: "POST",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new TagResourceResponse({})])];
                }
            });
        });
    };
    Client.prototype.untagResource = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new UntagResourceHeaders({});
                        return [4 /*yield*/, this.untagResourceWithOptions(request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.untagResourceWithOptions = function (request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        body = {};
                        if (!tea_util_1.default.isUnset(request.all)) {
                            body["all"] = request.all;
                        }
                        if (!tea_util_1.default.isUnset(request.resourceArn)) {
                            body["resourceArn"] = request.resourceArn;
                        }
                        if (!tea_util_1.default.isUnset(request.tagKeys)) {
                            body["tagKeys"] = request.tagKeys;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "UntagResource",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/tag",
                            method: "DELETE",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "none",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new UntagResourceResponse({})])];
                }
            });
        });
    };
    Client.prototype.updateAlias = function (serviceName, aliasName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new UpdateAliasHeaders({});
                        return [4 /*yield*/, this.updateAliasWithOptions(serviceName, aliasName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.updateAliasWithOptions = function (serviceName, aliasName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        aliasName = openapi_util_1.default.getEncodeParam(aliasName);
                        body = {};
                        if (!tea_util_1.default.isUnset(request.additionalVersionWeight)) {
                            body["additionalVersionWeight"] = request.additionalVersionWeight;
                        }
                        if (!tea_util_1.default.isUnset(request.description)) {
                            body["description"] = request.description;
                        }
                        if (!tea_util_1.default.isUnset(request.versionId)) {
                            body["versionId"] = request.versionId;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.ifMatch)) {
                            realHeaders["If-Match"] = tea_util_1.default.toJSONString(headers.ifMatch);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "UpdateAlias",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/aliases/" + aliasName,
                            method: "PUT",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new UpdateAliasResponse({})])];
                }
            });
        });
    };
    Client.prototype.updateCustomDomain = function (domainName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new UpdateCustomDomainHeaders({});
                        return [4 /*yield*/, this.updateCustomDomainWithOptions(domainName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.updateCustomDomainWithOptions = function (domainName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        domainName = openapi_util_1.default.getEncodeParam(domainName);
                        body = {};
                        if (!tea_util_1.default.isUnset($tea.toMap(request.certConfig))) {
                            body["certConfig"] = request.certConfig;
                        }
                        if (!tea_util_1.default.isUnset(request.protocol)) {
                            body["protocol"] = request.protocol;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.routeConfig))) {
                            body["routeConfig"] = request.routeConfig;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "UpdateCustomDomain",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/custom-domains/" + domainName,
                            method: "PUT",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new UpdateCustomDomainResponse({})])];
                }
            });
        });
    };
    Client.prototype.updateFunction = function (serviceName, functionName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new UpdateFunctionHeaders({});
                        return [4 /*yield*/, this.updateFunctionWithOptions(serviceName, functionName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.updateFunctionWithOptions = function (serviceName, functionName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        body = {};
                        if (!tea_util_1.default.isUnset(request.instanceConcurrency)) {
                            body["InstanceConcurrency"] = request.instanceConcurrency;
                        }
                        if (!tea_util_1.default.isUnset(request.caPort)) {
                            body["caPort"] = request.caPort;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.code))) {
                            body["code"] = request.code;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.customContainerConfig))) {
                            body["customContainerConfig"] = request.customContainerConfig;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.customDNS))) {
                            body["customDNS"] = request.customDNS;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.customRuntimeConfig))) {
                            body["customRuntimeConfig"] = request.customRuntimeConfig;
                        }
                        if (!tea_util_1.default.isUnset(request.description)) {
                            body["description"] = request.description;
                        }
                        if (!tea_util_1.default.isUnset(request.environmentVariables)) {
                            body["environmentVariables"] = request.environmentVariables;
                        }
                        if (!tea_util_1.default.isUnset(request.handler)) {
                            body["handler"] = request.handler;
                        }
                        if (!tea_util_1.default.isUnset(request.initializationTimeout)) {
                            body["initializationTimeout"] = request.initializationTimeout;
                        }
                        if (!tea_util_1.default.isUnset(request.initializer)) {
                            body["initializer"] = request.initializer;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.instanceLifecycleConfig))) {
                            body["instanceLifecycleConfig"] = request.instanceLifecycleConfig;
                        }
                        if (!tea_util_1.default.isUnset(request.instanceType)) {
                            body["instanceType"] = request.instanceType;
                        }
                        if (!tea_util_1.default.isUnset(request.layers)) {
                            body["layers"] = request.layers;
                        }
                        if (!tea_util_1.default.isUnset(request.memorySize)) {
                            body["memorySize"] = request.memorySize;
                        }
                        if (!tea_util_1.default.isUnset(request.runtime)) {
                            body["runtime"] = request.runtime;
                        }
                        if (!tea_util_1.default.isUnset(request.timeout)) {
                            body["timeout"] = request.timeout;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.ifMatch)) {
                            realHeaders["If-Match"] = tea_util_1.default.toJSONString(headers.ifMatch);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "UpdateFunction",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName,
                            method: "PUT",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new UpdateFunctionResponse({})])];
                }
            });
        });
    };
    Client.prototype.updateService = function (serviceName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new UpdateServiceHeaders({});
                        return [4 /*yield*/, this.updateServiceWithOptions(serviceName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.updateServiceWithOptions = function (serviceName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        body = {};
                        if (!tea_util_1.default.isUnset(request.description)) {
                            body["description"] = request.description;
                        }
                        if (!tea_util_1.default.isUnset(request.internetAccess)) {
                            body["internetAccess"] = request.internetAccess;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.logConfig))) {
                            body["logConfig"] = request.logConfig;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.nasConfig))) {
                            body["nasConfig"] = request.nasConfig;
                        }
                        if (!tea_util_1.default.isUnset(request.role)) {
                            body["role"] = request.role;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.tracingConfig))) {
                            body["tracingConfig"] = request.tracingConfig;
                        }
                        if (!tea_util_1.default.isUnset($tea.toMap(request.vpcConfig))) {
                            body["vpcConfig"] = request.vpcConfig;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.ifMatch)) {
                            realHeaders["If-Match"] = tea_util_1.default.toJSONString(headers.ifMatch);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "UpdateService",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName,
                            method: "PUT",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new UpdateServiceResponse({})])];
                }
            });
        });
    };
    Client.prototype.updateTrigger = function (serviceName, functionName, triggerName, request) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = new $Util.RuntimeOptions({});
                        headers = new UpdateTriggerHeaders({});
                        return [4 /*yield*/, this.updateTriggerWithOptions(serviceName, functionName, triggerName, request, headers, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Client.prototype.updateTriggerWithOptions = function (serviceName, functionName, triggerName, request, headers, runtime) {
        return __awaiter(this, void 0, void 0, function () {
            var body, realHeaders, req, params, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        tea_util_1.default.validateModel(request);
                        serviceName = openapi_util_1.default.getEncodeParam(serviceName);
                        functionName = openapi_util_1.default.getEncodeParam(functionName);
                        triggerName = openapi_util_1.default.getEncodeParam(triggerName);
                        body = {};
                        if (!tea_util_1.default.isUnset(request.description)) {
                            body["description"] = request.description;
                        }
                        if (!tea_util_1.default.isUnset(request.invocationRole)) {
                            body["invocationRole"] = request.invocationRole;
                        }
                        if (!tea_util_1.default.isUnset(request.qualifier)) {
                            body["qualifier"] = request.qualifier;
                        }
                        if (!tea_util_1.default.isUnset(request.triggerConfig)) {
                            body["triggerConfig"] = request.triggerConfig;
                        }
                        realHeaders = {};
                        if (!tea_util_1.default.isUnset(headers.commonHeaders)) {
                            realHeaders = headers.commonHeaders;
                        }
                        if (!tea_util_1.default.isUnset(headers.ifMatch)) {
                            realHeaders["If-Match"] = tea_util_1.default.toJSONString(headers.ifMatch);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcAccountId)) {
                            realHeaders["X-Fc-Account-Id"] = tea_util_1.default.toJSONString(headers.xFcAccountId);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcCodeChecksum)) {
                            realHeaders["X-Fc-Code-Checksum"] = tea_util_1.default.toJSONString(headers.xFcCodeChecksum);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcDate)) {
                            realHeaders["X-Fc-Date"] = tea_util_1.default.toJSONString(headers.xFcDate);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcInvocationType)) {
                            realHeaders["X-Fc-Invocation-Type"] = tea_util_1.default.toJSONString(headers.xFcInvocationType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcLogType)) {
                            realHeaders["X-Fc-Log-Type"] = tea_util_1.default.toJSONString(headers.xFcLogType);
                        }
                        if (!tea_util_1.default.isUnset(headers.xFcTraceId)) {
                            realHeaders["X-Fc-Trace-Id"] = tea_util_1.default.toJSONString(headers.xFcTraceId);
                        }
                        req = new $OpenApi.OpenApiRequest({
                            headers: realHeaders,
                            body: openapi_util_1.default.parseToMap(body),
                        });
                        params = new $OpenApi.Params({
                            action: "UpdateTrigger",
                            version: "2021-04-06",
                            protocol: "HTTPS",
                            pathname: "/2021-04-06/services/" + serviceName + "/functions/" + functionName + "/triggers/" + triggerName,
                            method: "PUT",
                            authType: "AK",
                            style: "ROA",
                            reqBodyType: "json",
                            bodyType: "json",
                        });
                        _b = (_a = $tea).cast;
                        return [4 /*yield*/, this.callApi(params, req, runtime)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), new UpdateTriggerResponse({})])];
                }
            });
        });
    };
    return Client;
}(openapi_client_1.default));
exports.default = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE2QztBQUM3Qzs7R0FFRztBQUNILGlGQUFrRDtBQUNsRCxzR0FBOEQ7QUFDOUQsd0VBQWlEO0FBQ2pELDBFQUFtRDtBQUNuRCw2REFBaUQ7QUFFakQ7SUFBc0Msb0NBQVU7SUFjOUMsMEJBQVksR0FBNEI7ZUFDdEMsa0JBQU0sR0FBRyxDQUFDO0lBQ1osQ0FBQztJQWRNLHNCQUFLLEdBQVo7UUFDRSxPQUFPO1lBQ0wsTUFBTSxFQUFFLFFBQVE7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFFTSxzQkFBSyxHQUFaO1FBQ0UsT0FBTztZQUNMLE1BQU0sRUFBRSxRQUFRO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBS0gsdUJBQUM7QUFBRCxDQUFDLEFBakJELENBQXNDLElBQUksQ0FBQyxLQUFLLEdBaUIvQztBQWpCWSw0Q0FBZ0I7QUFtQjdCO0lBQWdDLDhCQUFVO0lBb0J4QyxvQkFBWSxHQUE0QjtlQUN0QyxrQkFBTSxHQUFHLENBQUM7SUFDWixDQUFDO0lBbEJNLGdCQUFLLEdBQVo7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsVUFBVSxFQUFFLFlBQVk7U0FDekIsQ0FBQztJQUNKLENBQUM7SUFFTSxnQkFBSyxHQUFaO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLFVBQVUsRUFBRSxRQUFRO1NBQ3JCLENBQUM7SUFDSixDQUFDO0lBS0gsaUJBQUM7QUFBRCxDQUFDLEFBdkJELENBQWdDLElBQUksQ0FBQyxLQUFLLEdBdUJ6QztBQXZCWSxnQ0FBVTtBQXlCdkI7SUFB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