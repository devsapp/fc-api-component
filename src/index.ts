import {InputProps} from './common/entity';
// @ts-ignore
import fc from '@alicloud/fc2'
// @ts-ignore
import {getCredential, commandParse, help, loadComponent} from '@serverless-devs/core'
// @ts-ignore
import FC_Open20210406 from '@alicloud/fc-open20210406';
// @ts-ignore
import * as $OpenApi from '@alicloud/openapi-client';
// @ts-ignore
import * as $Util from '@alicloud/tea-util';
import fs from 'fs'
import path from 'path'

export default class Component {
    private requestPath: String;
    private apiContent: Object;
    private inputs: InputProps;
    private fcDefault: any;
    private comParse: Object;
    private requestMethod: String;
    private body: Object;
    private headers: Object;
    private query: Object;
    private requestRegion: String;
    private bodyType: any;

    constructor() {
    }

    private async getClient(region, access, version = 20210406, timeout = 3000) {
        const fcCore = await loadComponent('fc-core');
        const {AccountID, AccessKeyID, AccessKeySecret, SecurityToken} = (await getCredential(access)) as any
        if (version == 20160815) {
            return new fc(AccountID, {
                accessKeyID: AccessKeyID,
                accessKeySecret: AccessKeySecret,
                securityToken: SecurityToken,
                region: region || 'cn-hangzhou',
                timeout: 6000000,
                endpoint: (await fcCore.getEndpointFromFcDefault()) || `https://${AccountID}.${region}.fc.aliyuncs.com`
            })
        } else if (version == 20210406) {
            const config = new $OpenApi.Config({
                accessKeyId: AccessKeyID,
                accessKeySecret: AccessKeySecret,
                securityToken: SecurityToken,
                readTimeout: timeout
            });
            config.endpoint = (await fcCore.getEndpointFromFcDefault()) || `${AccountID}.${region}.fc.aliyuncs.com`;
            return new FC_Open20210406(config);
        }
    }

    /**
     * demo fc api 默认指令
     * @param inputs
     * @returns
     */
    public async index(inputs: InputProps) {
        this.inputs = inputs
        this.fcDefault = await loadComponent('fc-default');
        const apts = {
            boolean: ['help'],
            alias: {help: 'h'},
        };
        // @ts-ignore
        this.comParse = commandParse({args: inputs.args, argsObj: inputs.argsObj}, apts);

        // 读取Json配置
        let apiContentAttr
        const version = this.comParse['data']['apiVersion'] || await this.fcDefault.get({args: "api-default-version"}) || '20160815'
        if (version == '20160815' || version == 20160815) {
            apiContentAttr = fs.readFileSync(path.join(__dirname, "20160815.json"));
        } else if (version == '20210416' || version == 20210416) {
            apiContentAttr = fs.readFileSync(path.join(__dirname, "20210416.json"));
        } else {
            throw new Error(
                JSON.stringify({
                    message: 'API version information error.',
                    tips: 'API version value range: 20160815, 20210416',
                }),
            );
        }
        this.apiContent = JSON.parse(apiContentAttr);

        if (!this.apiContent[this.comParse['data']['_'][0]]) {
            this.comParse['data'].help = true
        }

        // @ts-ignore
        if (this.comParse['data'] && this.comParse['data'].help) {
            let tempContent = []
            if (this.apiContent[this.comParse['data']['_'][0]]) {
                const apiName = this.comParse['data']['_'][0]
                const tempApiContent = this.apiContent[apiName]
                tempContent.push({
                    header: `api ${apiName}`,
                    content: `[API Version: ${version}]\n${tempApiContent.description}`
                })
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
                })
                const tempOptions = {
                    header: `Options`,
                    optionList: [{
                        name: 'region',
                        description: `[Required] Specify the fc region, value: cn-hangzhou/cn-beijing/cn-beijing/cn-hangzhou/cn-shanghai/cn-qingdao/cn-zhangjiakou/cn-huhehaote/cn-shenzhen/cn-chengdu/cn-hongkong/ap-southeast-1/ap-southeast-2/ap-southeast-3/ap-southeast-5/ap-northeast-1/eu-central-1/eu-west-1/us-west-1/us-east-1/ap-south-1\n* Set default region: [s cli fc-default set api-default-region <region>]`,
                        type: String,
                    }, {
                        name: 'access',
                        alias: 'a',
                        description: `[Optional] Specify key alias`,
                        type: String,
                    }, {
                        name: 'apiVersion',
                        description: `[Optional] API version, value: 20210416, 20160815\n* Set default version: [s cli fc-default set api-default-version <version>]`,
                        type: String,
                    }]
                }
                const tempOptionsContent = []
                for (let eveArea in tempApiContent['parameter']) {
                    const tempParamter = []
                    if (Object.keys(tempApiContent['parameter'][eveArea]).includes('required')) {
                        tempOptions.optionList.push({
                            name: eveArea,
                            description: `[${tempApiContent['parameter'][eveArea].required ? 'Required' : 'Optional'}] ${tempApiContent['parameter'][eveArea].description}`,
                            type: String,
                        })
                    } else {
                        tempOptions.optionList.push({
                            name: eveArea,
                            description: `Parameter details refer to [Detail: --${eveArea}], format is JSON String`,
                            type: String,
                        })
                        for (let eveParameter in tempApiContent['parameter'][eveArea]) {
                            tempParamter.push({
                                name: eveParameter,
                                summary: `<${tempApiContent['parameter'][eveArea][eveParameter].type}> [${tempApiContent['parameter'][eveArea][eveParameter].required ? "Required" : "Optional"}] ${tempApiContent['parameter'][eveArea][eveParameter].description}`,
                            })
                        }
                    }
                    if (tempParamter.length > 0) {
                        tempOptionsContent.push({
                            header: `Detail: --${eveArea}`,
                            content: tempParamter
                        })
                    }
                }
                tempContent.push(tempOptions)
                tempContent = tempContent.concat(tempOptionsContent)
                tempContent.push({
                    header: 'Examples',
                    content: `s cli fc api ${apiName} --path '{"K1": "V1"\\}' --body '\{"K2": "V2"\\}'`
                })
                help(tempContent)
                return
            } else {
                for (let eveApi in this.apiContent) {
                    tempContent.push({
                        name: eveApi,
                        summary: `${this.apiContent[eveApi]['description']};`,
                    })
                }
                const helpmsg = [{
                    header: 'Usage',
                    content: `s cli fc api <api-name> <options>`
                }, {
                    header: 'API List',
                    content: tempContent,
                }, {
                    header: 'Expansion',
                    content: `s cli fc api --path /services --method GET`
                }, {
                    header: `Expansion Options`,
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
                        summary: `s cli fc api --path /services --method GET`,
                    }, {
                        name: "Get services by API name",
                        summary: `s cli fc api ListServices`,
                    }]
                },]
                if (String(version) == "20210416") {
                    helpmsg[3].optionList.push({
                        name: 'action',
                        description: `[Optional] The API name`,
                        type: String,
                    })
                }
                help(helpmsg)
                return;
            }

            return;
        }



        if (String(version) == "20160815") {
                return await this.v20160815()
            } else {
                return await this.v20210416()
            }

    }

    public async getRequestData() {
        if (this.apiContent[this.comParse['data']['_'][0]]) {
            const apiName = this.comParse['data']['_'][0]
            const tempApiContent = this.apiContent[apiName]
            this.bodyType = tempApiContent.response
            this.requestMethod = tempApiContent.method
            this.requestPath = tempApiContent.path
            const pathAttr = JSON.parse(this.comParse['data'].path || '{}')
            if (!Object.keys(pathAttr).includes('qualifier')) {
                pathAttr['qualifier'] = undefined
            }
            for (let evePath in pathAttr) {
                while (this.requestPath.includes(`{${evePath}}`)) {
                    this.requestPath = this.requestPath.replace(`{${evePath}}`, evePath == 'qualifier' ? (pathAttr[evePath] ? `.${pathAttr[evePath]}` : '') : pathAttr[evePath])
                }
            }
        } else if (this.comParse['data'].path) {
            this.requestMethod = this.comParse['data'].method || 'GET'
            this.requestPath = this.comParse['data'].path
            if (!String(this.requestPath).startsWith("/")) {
                throw new Error(
                    JSON.stringify({
                        message: 'The specified command cannot be found.',
                        tips: 'Please refer to the help document of [-h/--help] command.',
                    }),
                );
            }
        } else {
            throw new Error(
                JSON.stringify({
                    message: 'The specified command cannot be found.',
                    tips: 'Please refer to the help document of [-h/--help] command.',
                }),
            );
        }
        this.query = JSON.parse(this.comParse['data'].query || '{}')
        this.headers = JSON.parse(this.comParse['data'].header || '{}')
        try {
            this.body = JSON.parse(this.comParse['data'].body || '{}')
        } catch (e) {
            this.body = this.comParse['data'].body
        }
        this.requestRegion = this.comParse['data'].region || (await this.fcDefault.get({args: "api-default-region"})) || 'cn-hangzhou'
    }

    /**
     * demo fc api 20160815 版本
     * @param inputs
     * @returns
     */
    public async v20160815() {
        await this.getRequestData()
        const client = await this.getClient(this.requestRegion, this.inputs.project.access, 20160815)
        return await client.request(this.requestMethod, this.requestPath, this.query, this.body, this.headers)
    }


    /**
     * demo fc api 20210406 版本
     * @param inputs
     * @returns
     */
    public async v20210416() {
        await this.getRequestData()
        const client = await this.getClient(this.requestRegion, this.inputs.project.access, 20210406, this.comParse['data']['_'][0] == "InvokeFunction" ? 10000 : 3000)
        let req = new $OpenApi.OpenApiRequest({
            headers: this.headers,
            body: this.body,
            query: this.query
        });
        let params = new $OpenApi.Params({
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
        return await client.callApi(params, req, new $Util.RuntimeOptions({}))
    }
}