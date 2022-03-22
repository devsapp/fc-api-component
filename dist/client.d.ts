/// <reference types="node" />
/**
 *
 */
import * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import * as $tea from '@alicloud/tea-typescript';
export declare class AccelerationInfo extends $tea.Model {
    status?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CertConfig extends $tea.Model {
    certName?: string;
    certificate?: string;
    privateKey?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class Code extends $tea.Model {
    codeCheckSum?: string;
    err?: string;
    ossBucketName?: string;
    ossObjectName?: string;
    zipFile?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CustomContainerConfig extends $tea.Model {
    accelerationType?: string;
    args?: string;
    command?: string;
    image?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CustomContainerConfigInfo extends $tea.Model {
    accelerationInfo?: AccelerationInfo;
    accelerationType?: string;
    args?: string;
    command?: string;
    image?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CustomDNS extends $tea.Model {
    dnsOptions?: DNSOption[];
    nameServers?: string[];
    searches?: string[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CustomRuntimeConfig extends $tea.Model {
    args?: string[];
    command?: string[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DNSOption extends $tea.Model {
    name?: string;
    value?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class Destination extends $tea.Model {
    destination?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DestinationConfig extends $tea.Model {
    onFailure?: Destination;
    onSuccess?: Destination;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class InstanceLifecycleConfig extends $tea.Model {
    preFreeze?: LifecycleHook;
    preStop?: LifecycleHook;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class JaegerConfig extends $tea.Model {
    endpoint?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class Layer extends $tea.Model {
    acl?: number;
    arn?: string;
    code?: LayerCode;
    codeChecksum?: string;
    codeSize?: number;
    compatibleRuntime?: string[];
    createTime?: string;
    description?: string;
    layerName?: string;
    version?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class LayerCode extends $tea.Model {
    location?: string;
    repositoryType?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class LifecycleHook extends $tea.Model {
    handler?: string;
    timeout?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class LogConfig extends $tea.Model {
    enableInstanceMetrics?: boolean;
    enableRequestMetrics?: boolean;
    logBeginRule?: string;
    logstore?: string;
    project?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class NASConfig extends $tea.Model {
    groupId?: string;
    mountPoints?: NASConfigMountPoints[];
    userId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class OnDemandConfig extends $tea.Model {
    maximumInstanceCount?: number;
    resource?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class OpenReservedCapacity extends $tea.Model {
    createdTime?: string;
    cu?: number;
    deadline?: string;
    instanceId?: string;
    isRefunded?: string;
    lastModifiedTime?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class OutputCodeLocation extends $tea.Model {
    location?: string;
    repositoryType?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PathConfig extends $tea.Model {
    functionName?: string;
    methods?: string[];
    path?: string;
    qualifier?: string;
    serviceName?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class Resource extends $tea.Model {
    resourceArn?: string;
    tags?: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class RouteConfig extends $tea.Model {
    routes?: PathConfig[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ScheduledActions extends $tea.Model {
    endTime?: string;
    name?: string;
    scheduleExpression?: string;
    startTime?: string;
    target?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class StatefulAsyncInvocation extends $tea.Model {
    alreadyRetriedTimes?: number;
    destinationStatus?: string;
    endTime?: number;
    functionName?: string;
    invocationErrorMessage?: string;
    invocationId?: string;
    invocationPayload?: string;
    qualifier?: string;
    requestId?: string;
    serviceName?: string;
    startedTime?: number;
    status?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class TargetTrackingPolicies extends $tea.Model {
    endTime?: string;
    maxCapacity?: number;
    metricTarget?: number;
    metricType?: string;
    minCapacity?: number;
    name?: string;
    startTime?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class TracingConfig extends $tea.Model {
    jaegerConfig?: JaegerConfig;
    params?: {
        [key: string]: string;
    };
    type?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class VPCConfig extends $tea.Model {
    role?: string;
    securityGroupId?: string;
    vSwitchIds?: string[];
    vpcId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateAliasHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateAliasRequest extends $tea.Model {
    additionalVersionWeight?: {
        [key: string]: number;
    };
    aliasName?: string;
    description?: string;
    versionId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateAliasResponseBody extends $tea.Model {
    additionalVersionWeight?: {
        [key: string]: number;
    };
    aliasName?: string;
    createdTime?: string;
    description?: string;
    lastModifiedTime?: string;
    versionId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateAliasResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: CreateAliasResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomDomainHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomDomainRequest extends $tea.Model {
    certConfig?: CertConfig;
    domainName?: string;
    protocol?: string;
    routeConfig?: RouteConfig;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomDomainResponseBody extends $tea.Model {
    accountId?: string;
    apiVersion?: string;
    certConfig?: CertConfig;
    createdTime?: string;
    domainName?: string;
    lastModifiedTime?: string;
    protocol?: string;
    routeConfig?: RouteConfig;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomDomainResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: CreateCustomDomainResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateFunctionHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateFunctionRequest extends $tea.Model {
    caPort?: number;
    code?: Code;
    customContainerConfig?: CustomContainerConfig;
    customDNS?: CustomDNS;
    customRuntimeConfig?: CustomRuntimeConfig;
    description?: string;
    environmentVariables?: {
        [key: string]: string;
    };
    functionName?: string;
    handler?: string;
    initializationTimeout?: number;
    initializer?: string;
    instanceConcurrency?: number;
    instanceLifecycleConfig?: InstanceLifecycleConfig;
    instanceType?: string;
    layers?: string[];
    memorySize?: number;
    runtime?: string;
    timeout?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateFunctionResponseBody extends $tea.Model {
    caPort?: number;
    codeChecksum?: string;
    codeSize?: number;
    createdTime?: string;
    customContainerConfig?: CustomContainerConfig;
    customDNS?: CustomDNS;
    customRuntimeConfig?: CustomRuntimeConfig;
    description?: string;
    environmentVariables?: {
        [key: string]: string;
    };
    functionId?: string;
    functionName?: string;
    handler?: string;
    initializationTimeout?: number;
    initializer?: string;
    instanceConcurrency?: number;
    instanceLifecycleConfig?: InstanceLifecycleConfig;
    instanceType?: string;
    lastModifiedTime?: string;
    layers?: string[];
    memorySize?: number;
    runtime?: string;
    timeout?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateFunctionResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: CreateFunctionResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateLayerVersionHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateLayerVersionRequest extends $tea.Model {
    code?: Code;
    compatibleRuntime?: string[];
    description?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateLayerVersionResponseBody extends $tea.Model {
    acl?: number;
    arn?: string;
    code?: OutputCodeLocation;
    codeChecksum?: string;
    codesize?: number;
    compatibleRuntime?: string[];
    createTime?: string;
    description?: string;
    layerName?: string;
    version?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateLayerVersionResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: CreateLayerVersionResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateServiceHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateServiceRequest extends $tea.Model {
    description?: string;
    internetAccess?: boolean;
    logConfig?: LogConfig;
    nasConfig?: NASConfig;
    role?: string;
    serviceName?: string;
    tracingConfig?: TracingConfig;
    vpcConfig?: VPCConfig;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateServiceResponseBody extends $tea.Model {
    createdTime?: string;
    description?: string;
    internetAccess?: boolean;
    lastModifiedTime?: string;
    logConfig?: LogConfig;
    nasConfig?: NASConfig;
    role?: string;
    serviceId?: string;
    serviceName?: string;
    tracingConfig?: TracingConfig;
    vpcConfig?: VPCConfig;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateServiceResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: CreateServiceResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateTriggerHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateTriggerRequest extends $tea.Model {
    description?: string;
    invocationRole?: string;
    qualifier?: string;
    sourceArn?: string;
    triggerConfig?: string;
    triggerName?: string;
    triggerType?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateTriggerResponseBody extends $tea.Model {
    createdTime?: string;
    description?: string;
    domainName?: string;
    invocationRole?: string;
    lastModifiedTime?: string;
    qualifier?: string;
    sourceArn?: string;
    triggerConfig?: string;
    triggerId?: string;
    triggerName?: string;
    triggerType?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateTriggerResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: CreateTriggerResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateVpcBindingHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateVpcBindingRequest extends $tea.Model {
    vpcId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateVpcBindingResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteAliasHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    ifMatch?: string;
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteAliasResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteCustomDomainHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteCustomDomainResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteFunctionHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    ifMatch?: string;
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteFunctionResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteFunctionAsyncInvokeConfigHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteFunctionAsyncInvokeConfigRequest extends $tea.Model {
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteFunctionAsyncInvokeConfigResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteFunctionOnDemandConfigHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    ifMatch?: string;
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteFunctionOnDemandConfigRequest extends $tea.Model {
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteFunctionOnDemandConfigResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteLayerVersionHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteLayerVersionResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteServiceHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    ifMatch?: string;
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteServiceResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteServiceVersionHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteServiceVersionResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteTriggerHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    ifMatch?: string;
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteTriggerResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteVpcBindingHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeleteVpcBindingResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeregisterEventSourceHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeregisterEventSourceRequest extends $tea.Model {
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DeregisterEventSourceResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetAccountSettingsHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetAccountSettingsResponseBody extends $tea.Model {
    availableAZs?: string[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetAccountSettingsResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: GetAccountSettingsResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetAliasHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetAliasResponseBody extends $tea.Model {
    additionalVersionWeight?: {
        [key: string]: number;
    };
    aliasName?: string;
    createdTime?: string;
    description?: string;
    lastModifiedTime?: string;
    versionId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetAliasResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: GetAliasResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetCustomDomainHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetCustomDomainResponseBody extends $tea.Model {
    accountId?: string;
    apiVersion?: string;
    certConfig?: CertConfig;
    createdTime?: string;
    domainName?: string;
    lastModifiedTime?: string;
    protocol?: string;
    routeConfig?: RouteConfig;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetCustomDomainResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: GetCustomDomainResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionRequest extends $tea.Model {
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionResponseBody extends $tea.Model {
    caPort?: number;
    codeChecksum?: string;
    codeSize?: number;
    createdTime?: string;
    customContainerConfig?: CustomContainerConfigInfo;
    customDNS?: CustomDNS;
    customRuntimeConfig?: CustomRuntimeConfig;
    description?: string;
    environmentVariables?: {
        [key: string]: string;
    };
    functionId?: string;
    functionName?: string;
    handler?: string;
    initializationTimeout?: number;
    initializer?: string;
    instanceConcurrency?: number;
    instanceLifecycleConfig?: InstanceLifecycleConfig;
    instanceType?: string;
    lastModifiedTime?: string;
    layers?: string[];
    memorySize?: number;
    runtime?: string;
    timeout?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: GetFunctionResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionAsyncInvokeConfigHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionAsyncInvokeConfigRequest extends $tea.Model {
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionAsyncInvokeConfigResponseBody extends $tea.Model {
    createdTime?: string;
    destinationConfig?: DestinationConfig;
    function?: string;
    lastModifiedTime?: string;
    maxAsyncEventAgeInSeconds?: number;
    maxAsyncRetryAttempts?: number;
    qualifier?: string;
    service?: string;
    statefulInvocation?: boolean;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionAsyncInvokeConfigResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: GetFunctionAsyncInvokeConfigResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionCodeHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionCodeRequest extends $tea.Model {
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionCodeResponseBody extends $tea.Model {
    checksum?: string;
    url?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionCodeResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: GetFunctionCodeResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionOnDemandConfigHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionOnDemandConfigRequest extends $tea.Model {
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionOnDemandConfigResponseBody extends $tea.Model {
    maximumInstanceCount?: number;
    resource?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetFunctionOnDemandConfigResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: GetFunctionOnDemandConfigResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetLayerVersionHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetLayerVersionResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: Layer;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetLayerVersionByArnHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetLayerVersionByArnResponseBody extends $tea.Model {
    acl?: number;
    arn?: string;
    code?: OutputCodeLocation;
    codeChecksum?: string;
    codesize?: number;
    compatibleRuntime?: string[];
    createTime?: string;
    description?: string;
    layerName?: string;
    version?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetLayerVersionByArnResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: GetLayerVersionByArnResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetProvisionConfigHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetProvisionConfigRequest extends $tea.Model {
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetProvisionConfigResponseBody extends $tea.Model {
    current?: number;
    currentError?: string;
    resource?: string;
    scheduledActions?: ScheduledActions[];
    target?: number;
    targetTrackingPolicies?: TargetTrackingPolicies[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetProvisionConfigResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: GetProvisionConfigResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetResourceTagsHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetResourceTagsRequest extends $tea.Model {
    resourceArn?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetResourceTagsResponseBody extends $tea.Model {
    resourceArn?: string;
    tags?: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetResourceTagsResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: GetResourceTagsResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetServiceHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetServiceRequest extends $tea.Model {
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetServiceResponseBody extends $tea.Model {
    createdTime?: string;
    description?: string;
    internetAccess?: boolean;
    lastModifiedTime?: string;
    logConfig?: LogConfig;
    nasConfig?: NASConfig;
    role?: string;
    serviceId?: string;
    serviceName?: string;
    tracingConfig?: TracingConfig;
    vpcConfig?: VPCConfig;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetServiceResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: GetServiceResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetStatefulAsyncInvocationHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetStatefulAsyncInvocationRequest extends $tea.Model {
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetStatefulAsyncInvocationResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: StatefulAsyncInvocation;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetTriggerHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetTriggerResponseBody extends $tea.Model {
    createdTime?: string;
    description?: string;
    domainName?: string;
    invocationRole?: string;
    lastModifiedTime?: string;
    qualifier?: string;
    sourceArn?: string;
    triggerConfig?: string;
    triggerId?: string;
    triggerName?: string;
    triggerType?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetTriggerResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: GetTriggerResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class InvokeFunctionHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcStatefulAsyncInvocationId?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class InvokeFunctionRequest extends $tea.Model {
    body?: Buffer;
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class InvokeFunctionResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: Buffer;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAliasesHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAliasesRequest extends $tea.Model {
    limit?: number;
    nextToken?: string;
    prefix?: string;
    startKey?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAliasesResponseBody extends $tea.Model {
    aliases?: ListAliasesResponseBodyAliases[];
    nextToken?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAliasesResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListAliasesResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListCustomDomainsHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListCustomDomainsRequest extends $tea.Model {
    limit?: number;
    nextToken?: string;
    prefix?: string;
    startKey?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListCustomDomainsResponseBody extends $tea.Model {
    customDomains?: ListCustomDomainsResponseBodyCustomDomains[];
    nextToken?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListCustomDomainsResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListCustomDomainsResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListEventSourcesHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListEventSourcesRequest extends $tea.Model {
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListEventSourcesResponseBody extends $tea.Model {
    eventSources?: ListEventSourcesResponseBodyEventSources[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListEventSourcesResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListEventSourcesResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListFunctionAsyncInvokeConfigsHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListFunctionAsyncInvokeConfigsRequest extends $tea.Model {
    limit?: number;
    nextToken?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListFunctionAsyncInvokeConfigsResponseBody extends $tea.Model {
    configs?: ListFunctionAsyncInvokeConfigsResponseBodyConfigs[];
    nextToken?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListFunctionAsyncInvokeConfigsResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListFunctionAsyncInvokeConfigsResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListFunctionsHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListFunctionsRequest extends $tea.Model {
    limit?: number;
    nextToken?: string;
    prefix?: string;
    qualifier?: string;
    startKey?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListFunctionsResponseBody extends $tea.Model {
    functions?: ListFunctionsResponseBodyFunctions[];
    nextToken?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListFunctionsResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListFunctionsResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListInstancesHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListInstancesRequest extends $tea.Model {
    limit?: number;
    nextToken?: string;
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListInstancesResponseBody extends $tea.Model {
    instances?: ListInstancesResponseBodyInstances[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListInstancesResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListInstancesResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListLayerVersionsHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListLayerVersionsRequest extends $tea.Model {
    limit?: number;
    startVersion?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListLayerVersionsResponseBody extends $tea.Model {
    layers?: Layer[];
    nextVersion?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListLayerVersionsResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListLayerVersionsResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListLayersHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListLayersRequest extends $tea.Model {
    limit?: number;
    nextToken?: string;
    prefix?: string;
    startKey?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListLayersResponseBody extends $tea.Model {
    layers?: Layer[];
    nextToken?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListLayersResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListLayersResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListOnDemandConfigsHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListOnDemandConfigsRequest extends $tea.Model {
    limit?: number;
    nextToken?: string;
    prefix?: string;
    startKey?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListOnDemandConfigsResponseBody extends $tea.Model {
    configs?: OnDemandConfig[];
    nextToken?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListOnDemandConfigsResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListOnDemandConfigsResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListProvisionConfigsHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListProvisionConfigsRequest extends $tea.Model {
    limit?: number;
    nextToken?: string;
    qualifier?: string;
    serviceName?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListProvisionConfigsResponseBody extends $tea.Model {
    nextToken?: string;
    provisionConfigs?: ListProvisionConfigsResponseBodyProvisionConfigs[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListProvisionConfigsResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListProvisionConfigsResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListReservedCapacitiesHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListReservedCapacitiesRequest extends $tea.Model {
    limit?: string;
    nextToken?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListReservedCapacitiesResponseBody extends $tea.Model {
    nextToken?: string;
    reservedCapacities?: OpenReservedCapacity[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListReservedCapacitiesResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListReservedCapacitiesResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListServiceVersionsHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListServiceVersionsRequest extends $tea.Model {
    direction?: string;
    limit?: number;
    nextToken?: string;
    startKey?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListServiceVersionsResponseBody extends $tea.Model {
    direction?: string;
    nextToken?: string;
    versions?: ListServiceVersionsResponseBodyVersions[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListServiceVersionsResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListServiceVersionsResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListServicesHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListServicesRequest extends $tea.Model {
    limit?: number;
    nextToken?: string;
    prefix?: string;
    startKey?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListServicesResponseBody extends $tea.Model {
    nextToken?: string;
    services?: ListServicesResponseBodyServices[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListServicesResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListServicesResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListStatefulAsyncInvocationsHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListStatefulAsyncInvocationsRequest extends $tea.Model {
    includePayload?: boolean;
    invocationIdPrefix?: string;
    limit?: number;
    nextToken?: string;
    qualifier?: string;
    sortOrderByTime?: string;
    startedTimeBegin?: number;
    startedTimeEnd?: number;
    status?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListStatefulAsyncInvocationsResponseBody extends $tea.Model {
    invocations?: StatefulAsyncInvocation[];
    nextToken?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListStatefulAsyncInvocationsResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListStatefulAsyncInvocationsResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListTaggedResourcesHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListTaggedResourcesRequest extends $tea.Model {
    limit?: number;
    nextToken?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListTaggedResourcesResponseBody extends $tea.Model {
    nextToken?: string;
    resources?: Resource[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListTaggedResourcesResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListTaggedResourcesResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListTriggersHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListTriggersRequest extends $tea.Model {
    limit?: number;
    nextToken?: number;
    prefix?: string;
    startKey?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListTriggersResponseBody extends $tea.Model {
    nextToken?: string;
    triggers?: ListTriggersResponseBodyTriggers[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListTriggersResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListTriggersResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListVpcBindingsHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListVpcBindingsResponseBody extends $tea.Model {
    vpcIds?: string[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListVpcBindingsResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: ListVpcBindingsResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PermanentDeleteLayerVersionHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PermanentDeleteLayerVersionResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PublishLayerAsPublicHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PublishLayerAsPublicResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PublishServiceVersionHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    ifMatch?: string;
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PublishServiceVersionRequest extends $tea.Model {
    description?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PublishServiceVersionResponseBody extends $tea.Model {
    createdTime?: string;
    description?: string;
    lastModifiedTime?: string;
    versionId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PublishServiceVersionResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: PublishServiceVersionResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PutFunctionAsyncInvokeConfigHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PutFunctionAsyncInvokeConfigRequest extends $tea.Model {
    destinationConfig?: DestinationConfig;
    maxAsyncEventAgeInSeconds?: number;
    maxAsyncRetryAttempts?: number;
    statefulInvocation?: boolean;
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PutFunctionAsyncInvokeConfigResponseBody extends $tea.Model {
    createdTime?: string;
    destinationConfig?: DestinationConfig;
    function?: string;
    lastModifiedTime?: string;
    maxAsyncEventAgeInSeconds?: number;
    maxAsyncRetryAttempts?: number;
    qualifier?: string;
    service?: string;
    statefulInvocation?: boolean;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PutFunctionAsyncInvokeConfigResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: PutFunctionAsyncInvokeConfigResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PutFunctionOnDemandConfigHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    ifMatch?: string;
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PutFunctionOnDemandConfigRequest extends $tea.Model {
    maximumInstanceCount?: number;
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PutFunctionOnDemandConfigResponseBody extends $tea.Model {
    maximumInstanceCount?: number;
    resource?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PutFunctionOnDemandConfigResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: PutFunctionOnDemandConfigResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PutProvisionConfigHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PutProvisionConfigRequest extends $tea.Model {
    scheduledActions?: ScheduledActions[];
    target?: number;
    targetTrackingPolicies?: TargetTrackingPolicies[];
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PutProvisionConfigResponseBody extends $tea.Model {
    current?: number;
    resource?: string;
    scheduledActions?: ScheduledActions[];
    target?: number;
    targetTrackingPolicies?: TargetTrackingPolicies[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class PutProvisionConfigResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: PutProvisionConfigResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class RegisterEventSourceHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class RegisterEventSourceRequest extends $tea.Model {
    sourceArn?: string;
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class RegisterEventSourceResponseBody extends $tea.Model {
    createdTime?: string;
    sourceArn?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class RegisterEventSourceResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: RegisterEventSourceResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class StopStatefulAsyncInvocationHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class StopStatefulAsyncInvocationRequest extends $tea.Model {
    qualifier?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class StopStatefulAsyncInvocationResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class TagResourceHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class TagResourceRequest extends $tea.Model {
    resourceArn?: string;
    tags?: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class TagResourceResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UntagResourceHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UntagResourceRequest extends $tea.Model {
    all?: boolean;
    resourceArn?: string;
    tagKeys?: string[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UntagResourceResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateAliasHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    ifMatch?: string;
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateAliasRequest extends $tea.Model {
    additionalVersionWeight?: {
        [key: string]: number;
    };
    description?: string;
    versionId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateAliasResponseBody extends $tea.Model {
    additionalVersionWeight?: {
        [key: string]: number;
    };
    aliasName?: string;
    createdTime?: string;
    description?: string;
    lastModifiedTime?: string;
    versionId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateAliasResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: UpdateAliasResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomDomainHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomDomainRequest extends $tea.Model {
    certConfig?: CertConfig;
    protocol?: string;
    routeConfig?: RouteConfig;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomDomainResponseBody extends $tea.Model {
    accountId?: string;
    apiVersion?: string;
    certConfig?: CertConfig;
    createdTime?: string;
    domainName?: string;
    lastModifiedTime?: string;
    protocol?: string;
    routeConfig?: RouteConfig;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomDomainResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: UpdateCustomDomainResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateFunctionHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    ifMatch?: string;
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateFunctionRequest extends $tea.Model {
    instanceConcurrency?: number;
    caPort?: number;
    code?: Code;
    customContainerConfig?: CustomContainerConfig;
    customDNS?: CustomDNS;
    customRuntimeConfig?: CustomRuntimeConfig;
    description?: string;
    environmentVariables?: {
        [key: string]: string;
    };
    handler?: string;
    initializationTimeout?: number;
    initializer?: string;
    instanceLifecycleConfig?: InstanceLifecycleConfig;
    instanceType?: string;
    layers?: string[];
    memorySize?: number;
    runtime?: string;
    timeout?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateFunctionResponseBody extends $tea.Model {
    caPort?: number;
    codeChecksum?: string;
    codeSize?: number;
    createdTime?: string;
    customContainerConfig?: CustomContainerConfig;
    customDNS?: CustomDNS;
    customRuntimeConfig?: CustomRuntimeConfig;
    description?: string;
    environmentVariables?: {
        [key: string]: string;
    };
    functionId?: string;
    functionName?: string;
    handler?: string;
    initializationTimeout?: number;
    initializer?: string;
    instanceLifecycleConfig?: InstanceLifecycleConfig;
    instanceType?: string;
    lastModifiedTime?: string;
    layers?: string[];
    memorySize?: number;
    runtime?: string;
    timeout?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateFunctionResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: UpdateFunctionResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateServiceHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    ifMatch?: string;
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateServiceRequest extends $tea.Model {
    description?: string;
    internetAccess?: boolean;
    logConfig?: LogConfig;
    nasConfig?: NASConfig;
    role?: string;
    tracingConfig?: TracingConfig;
    vpcConfig?: VPCConfig;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateServiceResponseBody extends $tea.Model {
    createdTime?: string;
    description?: string;
    internetAccess?: boolean;
    lastModifiedTime?: string;
    logConfig?: LogConfig;
    nasConfig?: NASConfig;
    role?: string;
    serviceId?: string;
    serviceName?: string;
    tracingConfig?: TracingConfig;
    vpcConfig?: VPCConfig;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateServiceResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: UpdateServiceResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateTriggerHeaders extends $tea.Model {
    commonHeaders?: {
        [key: string]: string;
    };
    ifMatch?: string;
    xFcAccountId?: string;
    xFcCodeChecksum?: string;
    xFcDate?: string;
    xFcInvocationType?: string;
    xFcLogType?: string;
    xFcTraceId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateTriggerRequest extends $tea.Model {
    description?: string;
    invocationRole?: string;
    qualifier?: string;
    triggerConfig?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateTriggerResponseBody extends $tea.Model {
    createdTime?: string;
    description?: string;
    domainName?: string;
    invocationRole?: string;
    lastModifiedTime?: string;
    qualifier?: string;
    sourceArn?: string;
    triggerConfig?: string;
    triggerId?: string;
    triggerName?: string;
    triggerType?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateTriggerResponse extends $tea.Model {
    headers: {
        [key: string]: string;
    };
    body: UpdateTriggerResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class NASConfigMountPoints extends $tea.Model {
    mountDir?: string;
    serverAddr?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListAliasesResponseBodyAliases extends $tea.Model {
    additionalVersionWeight?: {
        [key: string]: number;
    };
    aliasName?: string;
    createdTime?: string;
    description?: string;
    lastModifiedTime?: string;
    versionId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListCustomDomainsResponseBodyCustomDomains extends $tea.Model {
    accountId?: string;
    apiVersion?: string;
    certConfig?: CertConfig;
    createdTime?: string;
    domainName?: string;
    lastModifiedTime?: string;
    protocol?: string;
    routeConfig?: RouteConfig;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListEventSourcesResponseBodyEventSources extends $tea.Model {
    createdTime?: string;
    sourceArn?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListFunctionAsyncInvokeConfigsResponseBodyConfigs extends $tea.Model {
    createdTime?: string;
    destinationConfig?: DestinationConfig;
    function?: string;
    lastModifiedTime?: string;
    maxAsyncEventAgeInSeconds?: number;
    maxAsyncRetryAttempts?: number;
    qualifier?: string;
    service?: string;
    statefulInvocation?: boolean;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListFunctionsResponseBodyFunctions extends $tea.Model {
    caPort?: number;
    codeChecksum?: string;
    codeSize?: number;
    createdTime?: string;
    customContainerConfig?: CustomContainerConfig;
    description?: string;
    environmentVariables?: {
        [key: string]: string;
    };
    functionId?: string;
    functionName?: string;
    handler?: string;
    initializationTimeout?: number;
    initializer?: string;
    instanceConcurrency?: number;
    instanceLifecycleConfig?: InstanceLifecycleConfig;
    instanceType?: string;
    lastModifiedTime?: string;
    layers?: string[];
    memorySize?: number;
    runtime?: string;
    timeout?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListInstancesResponseBodyInstances extends $tea.Model {
    instanceId?: string;
    versionId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListProvisionConfigsResponseBodyProvisionConfigs extends $tea.Model {
    current?: number;
    currentError?: string;
    resource?: string;
    scheduledActions?: ScheduledActions[];
    target?: number;
    targetTrackingPolicies?: TargetTrackingPolicies[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListServiceVersionsResponseBodyVersions extends $tea.Model {
    createdTime?: string;
    description?: string;
    lastModifiedTime?: string;
    versionId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListServicesResponseBodyServices extends $tea.Model {
    createdTime?: string;
    description?: string;
    internetAccess?: boolean;
    lastModifiedTime?: string;
    logConfig?: LogConfig;
    nasConfig?: NASConfig;
    role?: string;
    serviceId?: string;
    serviceName?: string;
    tracingConfig?: TracingConfig;
    vpcConfig?: VPCConfig;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListTriggersResponseBodyTriggers extends $tea.Model {
    createdTime?: string;
    description?: string;
    domainName?: string;
    invocationRole?: string;
    lastModifiedTime?: string;
    qualifier?: string;
    sourceArn?: string;
    triggerConfig?: string;
    triggerId?: string;
    triggerName?: string;
    triggerType?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    constructor(map?: {
        [key: string]: any;
    });
}
export default class Client extends OpenApi {
    constructor(config: $OpenApi.Config);
    getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {
        [key: string]: string;
    }, endpoint: string): string;
    createAlias(serviceName: string, request: CreateAliasRequest): Promise<CreateAliasResponse>;
    createAliasWithOptions(serviceName: string, request: CreateAliasRequest, headers: CreateAliasHeaders, runtime: $Util.RuntimeOptions): Promise<CreateAliasResponse>;
    createCustomDomain(request: CreateCustomDomainRequest): Promise<CreateCustomDomainResponse>;
    createCustomDomainWithOptions(request: CreateCustomDomainRequest, headers: CreateCustomDomainHeaders, runtime: $Util.RuntimeOptions): Promise<CreateCustomDomainResponse>;
    createFunction(serviceName: string, request: CreateFunctionRequest): Promise<CreateFunctionResponse>;
    createFunctionWithOptions(serviceName: string, request: CreateFunctionRequest, headers: CreateFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<CreateFunctionResponse>;
    createLayerVersion(layerName: string, request: CreateLayerVersionRequest): Promise<CreateLayerVersionResponse>;
    createLayerVersionWithOptions(layerName: string, request: CreateLayerVersionRequest, headers: CreateLayerVersionHeaders, runtime: $Util.RuntimeOptions): Promise<CreateLayerVersionResponse>;
    createService(request: CreateServiceRequest): Promise<CreateServiceResponse>;
    createServiceWithOptions(request: CreateServiceRequest, headers: CreateServiceHeaders, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse>;
    createTrigger(serviceName: string, functionName: string, request: CreateTriggerRequest): Promise<CreateTriggerResponse>;
    createTriggerWithOptions(serviceName: string, functionName: string, request: CreateTriggerRequest, headers: CreateTriggerHeaders, runtime: $Util.RuntimeOptions): Promise<CreateTriggerResponse>;
    createVpcBinding(serviceName: string, request: CreateVpcBindingRequest): Promise<CreateVpcBindingResponse>;
    createVpcBindingWithOptions(serviceName: string, request: CreateVpcBindingRequest, headers: CreateVpcBindingHeaders, runtime: $Util.RuntimeOptions): Promise<CreateVpcBindingResponse>;
    deleteAlias(serviceName: string, aliasName: string): Promise<DeleteAliasResponse>;
    deleteAliasWithOptions(serviceName: string, aliasName: string, headers: DeleteAliasHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteAliasResponse>;
    deleteCustomDomain(domainName: string): Promise<DeleteCustomDomainResponse>;
    deleteCustomDomainWithOptions(domainName: string, headers: DeleteCustomDomainHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteCustomDomainResponse>;
    deleteFunction(serviceName: string, functionName: string): Promise<DeleteFunctionResponse>;
    deleteFunctionWithOptions(serviceName: string, functionName: string, headers: DeleteFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionResponse>;
    deleteFunctionAsyncInvokeConfig(serviceName: string, functionName: string, request: DeleteFunctionAsyncInvokeConfigRequest): Promise<DeleteFunctionAsyncInvokeConfigResponse>;
    deleteFunctionAsyncInvokeConfigWithOptions(serviceName: string, functionName: string, request: DeleteFunctionAsyncInvokeConfigRequest, headers: DeleteFunctionAsyncInvokeConfigHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionAsyncInvokeConfigResponse>;
    deleteFunctionOnDemandConfig(serviceName: string, functionName: string, request: DeleteFunctionOnDemandConfigRequest): Promise<DeleteFunctionOnDemandConfigResponse>;
    deleteFunctionOnDemandConfigWithOptions(serviceName: string, functionName: string, request: DeleteFunctionOnDemandConfigRequest, headers: DeleteFunctionOnDemandConfigHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionOnDemandConfigResponse>;
    deleteLayerVersion(layerName: string, version: string): Promise<DeleteLayerVersionResponse>;
    deleteLayerVersionWithOptions(layerName: string, version: string, headers: DeleteLayerVersionHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteLayerVersionResponse>;
    deleteService(serviceName: string): Promise<DeleteServiceResponse>;
    deleteServiceWithOptions(serviceName: string, headers: DeleteServiceHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse>;
    deleteServiceVersion(serviceName: string, versionId: string): Promise<DeleteServiceVersionResponse>;
    deleteServiceVersionWithOptions(serviceName: string, versionId: string, headers: DeleteServiceVersionHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteServiceVersionResponse>;
    deleteTrigger(serviceName: string, functionName: string, triggerName: string): Promise<DeleteTriggerResponse>;
    deleteTriggerWithOptions(serviceName: string, functionName: string, triggerName: string, headers: DeleteTriggerHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteTriggerResponse>;
    deleteVpcBinding(serviceName: string, vpcId: string): Promise<DeleteVpcBindingResponse>;
    deleteVpcBindingWithOptions(serviceName: string, vpcId: string, headers: DeleteVpcBindingHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteVpcBindingResponse>;
    deregisterEventSource(serviceName: string, functionName: string, sourceArn: string, request: DeregisterEventSourceRequest): Promise<DeregisterEventSourceResponse>;
    deregisterEventSourceWithOptions(serviceName: string, functionName: string, sourceArn: string, request: DeregisterEventSourceRequest, headers: DeregisterEventSourceHeaders, runtime: $Util.RuntimeOptions): Promise<DeregisterEventSourceResponse>;
    getAccountSettings(): Promise<GetAccountSettingsResponse>;
    getAccountSettingsWithOptions(headers: GetAccountSettingsHeaders, runtime: $Util.RuntimeOptions): Promise<GetAccountSettingsResponse>;
    getAlias(serviceName: string, aliasName: string): Promise<GetAliasResponse>;
    getAliasWithOptions(serviceName: string, aliasName: string, headers: GetAliasHeaders, runtime: $Util.RuntimeOptions): Promise<GetAliasResponse>;
    getCustomDomain(domainName: string): Promise<GetCustomDomainResponse>;
    getCustomDomainWithOptions(domainName: string, headers: GetCustomDomainHeaders, runtime: $Util.RuntimeOptions): Promise<GetCustomDomainResponse>;
    getFunction(serviceName: string, functionName: string, request: GetFunctionRequest): Promise<GetFunctionResponse>;
    getFunctionWithOptions(serviceName: string, functionName: string, request: GetFunctionRequest, headers: GetFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<GetFunctionResponse>;
    getFunctionAsyncInvokeConfig(serviceName: string, functionName: string, request: GetFunctionAsyncInvokeConfigRequest): Promise<GetFunctionAsyncInvokeConfigResponse>;
    getFunctionAsyncInvokeConfigWithOptions(serviceName: string, functionName: string, request: GetFunctionAsyncInvokeConfigRequest, headers: GetFunctionAsyncInvokeConfigHeaders, runtime: $Util.RuntimeOptions): Promise<GetFunctionAsyncInvokeConfigResponse>;
    getFunctionCode(serviceName: string, functionName: string, request: GetFunctionCodeRequest): Promise<GetFunctionCodeResponse>;
    getFunctionCodeWithOptions(serviceName: string, functionName: string, request: GetFunctionCodeRequest, headers: GetFunctionCodeHeaders, runtime: $Util.RuntimeOptions): Promise<GetFunctionCodeResponse>;
    getFunctionOnDemandConfig(serviceName: string, functionName: string, request: GetFunctionOnDemandConfigRequest): Promise<GetFunctionOnDemandConfigResponse>;
    getFunctionOnDemandConfigWithOptions(serviceName: string, functionName: string, request: GetFunctionOnDemandConfigRequest, headers: GetFunctionOnDemandConfigHeaders, runtime: $Util.RuntimeOptions): Promise<GetFunctionOnDemandConfigResponse>;
    getLayerVersion(layerName: string, version: string): Promise<GetLayerVersionResponse>;
    getLayerVersionWithOptions(layerName: string, version: string, headers: GetLayerVersionHeaders, runtime: $Util.RuntimeOptions): Promise<GetLayerVersionResponse>;
    getLayerVersionByArn(arn: string): Promise<GetLayerVersionByArnResponse>;
    getLayerVersionByArnWithOptions(arn: string, headers: GetLayerVersionByArnHeaders, runtime: $Util.RuntimeOptions): Promise<GetLayerVersionByArnResponse>;
    getProvisionConfig(serviceName: string, functionName: string, request: GetProvisionConfigRequest): Promise<GetProvisionConfigResponse>;
    getProvisionConfigWithOptions(serviceName: string, functionName: string, request: GetProvisionConfigRequest, headers: GetProvisionConfigHeaders, runtime: $Util.RuntimeOptions): Promise<GetProvisionConfigResponse>;
    getResourceTags(request: GetResourceTagsRequest): Promise<GetResourceTagsResponse>;
    getResourceTagsWithOptions(request: GetResourceTagsRequest, headers: GetResourceTagsHeaders, runtime: $Util.RuntimeOptions): Promise<GetResourceTagsResponse>;
    getService(serviceName: string, request: GetServiceRequest): Promise<GetServiceResponse>;
    getServiceWithOptions(serviceName: string, request: GetServiceRequest, headers: GetServiceHeaders, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse>;
    getStatefulAsyncInvocation(serviceName: string, functionName: string, invocationId: string, request: GetStatefulAsyncInvocationRequest): Promise<GetStatefulAsyncInvocationResponse>;
    getStatefulAsyncInvocationWithOptions(serviceName: string, functionName: string, invocationId: string, request: GetStatefulAsyncInvocationRequest, headers: GetStatefulAsyncInvocationHeaders, runtime: $Util.RuntimeOptions): Promise<GetStatefulAsyncInvocationResponse>;
    getTrigger(serviceName: string, functionName: string, triggerName: string): Promise<GetTriggerResponse>;
    getTriggerWithOptions(serviceName: string, functionName: string, triggerName: string, headers: GetTriggerHeaders, runtime: $Util.RuntimeOptions): Promise<GetTriggerResponse>;
    invokeFunction(serviceName: string, functionName: string, request: InvokeFunctionRequest): Promise<InvokeFunctionResponse>;
    invokeFunctionWithOptions(serviceName: string, functionName: string, request: InvokeFunctionRequest, headers: InvokeFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<InvokeFunctionResponse>;
    listAliases(serviceName: string, request: ListAliasesRequest): Promise<ListAliasesResponse>;
    listAliasesWithOptions(serviceName: string, request: ListAliasesRequest, headers: ListAliasesHeaders, runtime: $Util.RuntimeOptions): Promise<ListAliasesResponse>;
    listCustomDomains(request: ListCustomDomainsRequest): Promise<ListCustomDomainsResponse>;
    listCustomDomainsWithOptions(request: ListCustomDomainsRequest, headers: ListCustomDomainsHeaders, runtime: $Util.RuntimeOptions): Promise<ListCustomDomainsResponse>;
    listEventSources(serviceName: string, functionName: string, request: ListEventSourcesRequest): Promise<ListEventSourcesResponse>;
    listEventSourcesWithOptions(serviceName: string, functionName: string, request: ListEventSourcesRequest, headers: ListEventSourcesHeaders, runtime: $Util.RuntimeOptions): Promise<ListEventSourcesResponse>;
    listFunctionAsyncInvokeConfigs(serviceName: string, functionName: string, request: ListFunctionAsyncInvokeConfigsRequest): Promise<ListFunctionAsyncInvokeConfigsResponse>;
    listFunctionAsyncInvokeConfigsWithOptions(serviceName: string, functionName: string, request: ListFunctionAsyncInvokeConfigsRequest, headers: ListFunctionAsyncInvokeConfigsHeaders, runtime: $Util.RuntimeOptions): Promise<ListFunctionAsyncInvokeConfigsResponse>;
    listFunctions(serviceName: string, request: ListFunctionsRequest): Promise<ListFunctionsResponse>;
    listFunctionsWithOptions(serviceName: string, request: ListFunctionsRequest, headers: ListFunctionsHeaders, runtime: $Util.RuntimeOptions): Promise<ListFunctionsResponse>;
    listInstances(serviceName: string, functionName: string, request: ListInstancesRequest): Promise<ListInstancesResponse>;
    listInstancesWithOptions(serviceName: string, functionName: string, request: ListInstancesRequest, headers: ListInstancesHeaders, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse>;
    listLayerVersions(layerName: string, request: ListLayerVersionsRequest): Promise<ListLayerVersionsResponse>;
    listLayerVersionsWithOptions(layerName: string, request: ListLayerVersionsRequest, headers: ListLayerVersionsHeaders, runtime: $Util.RuntimeOptions): Promise<ListLayerVersionsResponse>;
    listLayers(request: ListLayersRequest): Promise<ListLayersResponse>;
    listLayersWithOptions(request: ListLayersRequest, headers: ListLayersHeaders, runtime: $Util.RuntimeOptions): Promise<ListLayersResponse>;
    listOnDemandConfigs(request: ListOnDemandConfigsRequest): Promise<ListOnDemandConfigsResponse>;
    listOnDemandConfigsWithOptions(request: ListOnDemandConfigsRequest, headers: ListOnDemandConfigsHeaders, runtime: $Util.RuntimeOptions): Promise<ListOnDemandConfigsResponse>;
    listProvisionConfigs(request: ListProvisionConfigsRequest): Promise<ListProvisionConfigsResponse>;
    listProvisionConfigsWithOptions(request: ListProvisionConfigsRequest, headers: ListProvisionConfigsHeaders, runtime: $Util.RuntimeOptions): Promise<ListProvisionConfigsResponse>;
    listReservedCapacities(request: ListReservedCapacitiesRequest): Promise<ListReservedCapacitiesResponse>;
    listReservedCapacitiesWithOptions(request: ListReservedCapacitiesRequest, headers: ListReservedCapacitiesHeaders, runtime: $Util.RuntimeOptions): Promise<ListReservedCapacitiesResponse>;
    listServiceVersions(serviceName: string, request: ListServiceVersionsRequest): Promise<ListServiceVersionsResponse>;
    listServiceVersionsWithOptions(serviceName: string, request: ListServiceVersionsRequest, headers: ListServiceVersionsHeaders, runtime: $Util.RuntimeOptions): Promise<ListServiceVersionsResponse>;
    listServices(request: ListServicesRequest): Promise<ListServicesResponse>;
    listServicesWithOptions(request: ListServicesRequest, headers: ListServicesHeaders, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse>;
    listStatefulAsyncInvocations(serviceName: string, functionName: string, request: ListStatefulAsyncInvocationsRequest): Promise<ListStatefulAsyncInvocationsResponse>;
    listStatefulAsyncInvocationsWithOptions(serviceName: string, functionName: string, request: ListStatefulAsyncInvocationsRequest, headers: ListStatefulAsyncInvocationsHeaders, runtime: $Util.RuntimeOptions): Promise<ListStatefulAsyncInvocationsResponse>;
    listTaggedResources(request: ListTaggedResourcesRequest): Promise<ListTaggedResourcesResponse>;
    listTaggedResourcesWithOptions(request: ListTaggedResourcesRequest, headers: ListTaggedResourcesHeaders, runtime: $Util.RuntimeOptions): Promise<ListTaggedResourcesResponse>;
    listTriggers(serviceName: string, functionName: string, request: ListTriggersRequest): Promise<ListTriggersResponse>;
    listTriggersWithOptions(serviceName: string, functionName: string, request: ListTriggersRequest, headers: ListTriggersHeaders, runtime: $Util.RuntimeOptions): Promise<ListTriggersResponse>;
    listVpcBindings(serviceName: string): Promise<ListVpcBindingsResponse>;
    listVpcBindingsWithOptions(serviceName: string, headers: ListVpcBindingsHeaders, runtime: $Util.RuntimeOptions): Promise<ListVpcBindingsResponse>;
    permanentDeleteLayerVersion(userID: string, layerName: string, version: string): Promise<PermanentDeleteLayerVersionResponse>;
    permanentDeleteLayerVersionWithOptions(userID: string, layerName: string, version: string, headers: PermanentDeleteLayerVersionHeaders, runtime: $Util.RuntimeOptions): Promise<PermanentDeleteLayerVersionResponse>;
    publishLayerAsPublic(layerName: string, version: string): Promise<PublishLayerAsPublicResponse>;
    publishLayerAsPublicWithOptions(layerName: string, version: string, headers: PublishLayerAsPublicHeaders, runtime: $Util.RuntimeOptions): Promise<PublishLayerAsPublicResponse>;
    publishServiceVersion(serviceName: string, request: PublishServiceVersionRequest): Promise<PublishServiceVersionResponse>;
    publishServiceVersionWithOptions(serviceName: string, request: PublishServiceVersionRequest, headers: PublishServiceVersionHeaders, runtime: $Util.RuntimeOptions): Promise<PublishServiceVersionResponse>;
    putFunctionAsyncInvokeConfig(serviceName: string, functionName: string, request: PutFunctionAsyncInvokeConfigRequest): Promise<PutFunctionAsyncInvokeConfigResponse>;
    putFunctionAsyncInvokeConfigWithOptions(serviceName: string, functionName: string, request: PutFunctionAsyncInvokeConfigRequest, headers: PutFunctionAsyncInvokeConfigHeaders, runtime: $Util.RuntimeOptions): Promise<PutFunctionAsyncInvokeConfigResponse>;
    putFunctionOnDemandConfig(serviceName: string, functionName: string, request: PutFunctionOnDemandConfigRequest): Promise<PutFunctionOnDemandConfigResponse>;
    putFunctionOnDemandConfigWithOptions(serviceName: string, functionName: string, request: PutFunctionOnDemandConfigRequest, headers: PutFunctionOnDemandConfigHeaders, runtime: $Util.RuntimeOptions): Promise<PutFunctionOnDemandConfigResponse>;
    putProvisionConfig(serviceName: string, functionName: string, request: PutProvisionConfigRequest): Promise<PutProvisionConfigResponse>;
    putProvisionConfigWithOptions(serviceName: string, functionName: string, request: PutProvisionConfigRequest, headers: PutProvisionConfigHeaders, runtime: $Util.RuntimeOptions): Promise<PutProvisionConfigResponse>;
    registerEventSource(serviceName: string, functionName: string, request: RegisterEventSourceRequest): Promise<RegisterEventSourceResponse>;
    registerEventSourceWithOptions(serviceName: string, functionName: string, request: RegisterEventSourceRequest, headers: RegisterEventSourceHeaders, runtime: $Util.RuntimeOptions): Promise<RegisterEventSourceResponse>;
    stopStatefulAsyncInvocation(serviceName: string, functionName: string, invocationId: string, request: StopStatefulAsyncInvocationRequest): Promise<StopStatefulAsyncInvocationResponse>;
    stopStatefulAsyncInvocationWithOptions(serviceName: string, functionName: string, invocationId: string, request: StopStatefulAsyncInvocationRequest, headers: StopStatefulAsyncInvocationHeaders, runtime: $Util.RuntimeOptions): Promise<StopStatefulAsyncInvocationResponse>;
    tagResource(request: TagResourceRequest): Promise<TagResourceResponse>;
    tagResourceWithOptions(request: TagResourceRequest, headers: TagResourceHeaders, runtime: $Util.RuntimeOptions): Promise<TagResourceResponse>;
    untagResource(request: UntagResourceRequest): Promise<UntagResourceResponse>;
    untagResourceWithOptions(request: UntagResourceRequest, headers: UntagResourceHeaders, runtime: $Util.RuntimeOptions): Promise<UntagResourceResponse>;
    updateAlias(serviceName: string, aliasName: string, request: UpdateAliasRequest): Promise<UpdateAliasResponse>;
    updateAliasWithOptions(serviceName: string, aliasName: string, request: UpdateAliasRequest, headers: UpdateAliasHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateAliasResponse>;
    updateCustomDomain(domainName: string, request: UpdateCustomDomainRequest): Promise<UpdateCustomDomainResponse>;
    updateCustomDomainWithOptions(domainName: string, request: UpdateCustomDomainRequest, headers: UpdateCustomDomainHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateCustomDomainResponse>;
    updateFunction(serviceName: string, functionName: string, request: UpdateFunctionRequest): Promise<UpdateFunctionResponse>;
    updateFunctionWithOptions(serviceName: string, functionName: string, request: UpdateFunctionRequest, headers: UpdateFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateFunctionResponse>;
    updateService(serviceName: string, request: UpdateServiceRequest): Promise<UpdateServiceResponse>;
    updateServiceWithOptions(serviceName: string, request: UpdateServiceRequest, headers: UpdateServiceHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateServiceResponse>;
    updateTrigger(serviceName: string, functionName: string, triggerName: string, request: UpdateTriggerRequest): Promise<UpdateTriggerResponse>;
    updateTriggerWithOptions(serviceName: string, functionName: string, triggerName: string, request: UpdateTriggerRequest, headers: UpdateTriggerHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateTriggerResponse>;
}
