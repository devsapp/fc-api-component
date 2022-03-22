import { InputProps } from './common/entity';
export default class Component {
    private requestPath;
    private apiContent;
    private inputs;
    private fcDefault;
    private comParse;
    private requestMethod;
    private body;
    private headers;
    private query;
    private requestRegion;
    constructor();
    private getClient;
    /**
     * demo fc api 默认指令
     * @param inputs
     * @returns
     */
    index(inputs: InputProps): Promise<any>;
    getRequestData(): Promise<void>;
    /**
     * demo fc api 20160815 版本
     * @param inputs
     * @returns
     */
    v20160815(): Promise<any>;
    /**
     * demo fc api 20210406 版本
     * @param inputs
     * @returns
     */
    v20210416(): Promise<any>;
}
