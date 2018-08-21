/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Swagger Petstore *_/ ' \" =end -- \\r\\n \\n \\r
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  *_/ ' \" =end --       
 *
 * OpenAPI spec version: 1.0.0 *_/ ' \" =end -- \\r\\n \\n \\r
 * Contact: apiteam@swagger.io *_/ ' \" =end -- \\r\\n \\n \\r
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "https://petstore.swagger.io *_/ ' \" =end -- \\r\\n \\n \\r/v2 *_/ ' \" =end -- \\r\\n \\n \\r".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *  
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 * 
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 * 
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * Model for testing reserved words  *_/ ' \" =end -- \\r\\n \\n \\r
 * @export
 * @interface ModelReturn
 */
export interface ModelReturn {
    /**
     * property description  *_/ ' \" =end -- \\r\\n \\n \\r
     * @type {number}
     * @memberof ModelReturn
     */
    return?: number;
}


/**
 * FakeApi - fetch parameter creator
 * @export
 */
export const FakeApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary To test code injection *_/ ' \" =end -- \\r\\n \\n \\r
         * @param {string} [test code inject * &#39; &quot; &#x3D;end  rn n r] To test code injection *_/ &#39; \&quot; &#x3D;end -- \\r\\n \\n \\r
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testCodeInjectEndRnNR(test code inject * &#39; &quot; &#x3D;end  rn n r?: string, options: any = {}): FetchArgs {
            const localVarPath = `/fake`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new url.URLSearchParams();

            if (test code inject * &#39; &quot; &#x3D;end  rn n r !== undefined) {
                localVarFormParams.set('test code inject */ &#39; &quot; &#x3D;end -- \r\n \n \r', test code inject * &#39; &quot; &#x3D;end  rn n r as any);
            }

            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            localVarRequestOptions.body = localVarFormParams.toString();

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FakeApi - functional programming interface
 * @export
 */
export const FakeApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary To test code injection *_/ ' \" =end -- \\r\\n \\n \\r
         * @param {string} [test code inject * &#39; &quot; &#x3D;end  rn n r] To test code injection *_/ &#39; \&quot; &#x3D;end -- \\r\\n \\n \\r
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testCodeInjectEndRnNR(test code inject * &#39; &quot; &#x3D;end  rn n r?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Response> {
            const localVarFetchArgs = FakeApiFetchParamCreator(configuration).testCodeInjectEndRnNR(test code inject * &#39; &quot; &#x3D;end  rn n r, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response;
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * FakeApi - factory interface
 * @export
 */
export const FakeApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary To test code injection *_/ ' \" =end -- \\r\\n \\n \\r
         * @param {string} [test code inject * &#39; &quot; &#x3D;end  rn n r] To test code injection *_/ &#39; \&quot; &#x3D;end -- \\r\\n \\n \\r
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testCodeInjectEndRnNR(test code inject * &#39; &quot; &#x3D;end  rn n r?: string, options?: any) {
            return FakeApiFp(configuration).testCodeInjectEndRnNR(test code inject * &#39; &quot; &#x3D;end  rn n r, options)(fetch, basePath);
        },
    };
};

/**
 * FakeApi - object-oriented interface
 * @export
 * @class FakeApi
 * @extends {BaseAPI}
 */
export class FakeApi extends BaseAPI {
    /**
     * 
     * @summary To test code injection *_/ ' \" =end -- \\r\\n \\n \\r
     * @param {} [test code inject * &#39; &quot; &#x3D;end  rn n r] To test code injection *_/ &#39; \&quot; &#x3D;end -- \\r\\n \\n \\r
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FakeApi
     */
    public testCodeInjectEndRnNR(test code inject * &#39; &quot; &#x3D;end  rn n r?: string, options?: any) {
        return FakeApiFp(this.configuration).testCodeInjectEndRnNR(test code inject * &#39; &quot; &#x3D;end  rn n r, options)(this.fetch, this.basePath);
    }

}

