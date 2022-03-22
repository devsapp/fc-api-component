declare const querystring: any;
declare const crypto: any;
declare const axios: any;
declare const OSS: any;
declare const path: any;
declare const fs: any;
declare const httpx: any;
declare const kitx: any;
declare const debug: any;
declare const pkg: any;
declare const WebSocket: any;
declare class Client {
    constructor(accountid: any, config: any);
    buildHeaders(): {
        accept: string;
        date: string;
        host: any;
        'user-agent': string;
        'x-fc-account-id': any;
    };
    request(method: any, path: any, query: any, body: any, headers?: {}, opts?: {}): Promise<{
        headers: any;
        data: any;
    }>;
    /*!
     * GET 请求
     *
     * @param {String} path 请求路径
     * @param {Object} query 请求中的 query 部分
     * @param {Object} headers 请求中的自定义 headers 部分
     * @return {Promise} 返回 Response
     */
    get(path: any, query: any, headers: any): Promise<{
        headers: any;
        data: any;
    }>;
    /*!
     * POST 请求
     *
     * @param {String} path 请求路径
     * @param {Buffer|String|Object} body 请求中的 body 部分
     * @param {Object} headers 请求中的自定义 headers 部分
     * @param {Object} queries 请求中的自定义 queries 部分
     * @return {Promise} 返回 Response
     */
    post(path: any, body: any, headers: any, queries: any, opts?: {}): Promise<{
        headers: any;
        data: any;
    }>;
    /*!
     * PUT 请求
     *
     * @param {String} path 请求路径
     * @param {Buffer|String|Object} body 请求中的 body 部分
     * @param {Object} headers 请求中的自定义 headers 部分
     * @return {Promise} 返回 Response
     */
    put(path: any, body: any, headers: any): Promise<{
        headers: any;
        data: any;
    }>;
    /*!
     * DELETE 请求
     *
     * @param {String} path 请求路径
     * @param {Object} query 请求中的 query 部分
     * @param {Object} headers 请求中的自定义 headers 部分
     * @return {Promise} 返回 Response
     */
    delete(path: any, query: any, headers: any): Promise<{
        headers: any;
        data: any;
    }>;
    /*!
     * WebSocket 请求
     *
     * @param {String} path 请求路径
     * @param {Object} query 请求中的 query 部分
     * @param {Object} headers 请求中的自定义 headers 部分
     * @return {Promise} 返回 WebSocket
     */
    websocket(path: any, query: any, headers?: {}): WebSocket;
}
