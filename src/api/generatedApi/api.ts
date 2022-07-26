/* tslint:disable */
/* eslint-disable */
/**
 * Chatbot API
 * Chatbot server interface to handle a conversation
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface FlowValue
 */
export interface FlowValue {
    /**
     * 
     * @type {string}
     * @memberof FlowValue
     */
    'name': string;
    /**
     * 
     * @type {FlowValueType}
     * @memberof FlowValue
     */
    'value': FlowValueType;
}
/**
 * @type FlowValueType
 * @export
 */
export type FlowValueType = boolean | number | string;


/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary saves the whole conversation
         * @param {Array<FlowValue>} [flowValue] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postConversation: async (flowValue?: Array<FlowValue>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/conversation`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(flowValue, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary saves the whole conversation
         * @param {Array<FlowValue>} [flowValue] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postConversation(flowValue?: Array<FlowValue>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postConversation(flowValue, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary saves the whole conversation
         * @param {Array<FlowValue>} [flowValue] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postConversation(flowValue?: Array<FlowValue>, options?: any): AxiosPromise<void> {
            return localVarFp.postConversation(flowValue, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary saves the whole conversation
     * @param {Array<FlowValue>} [flowValue] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postConversation(flowValue?: Array<FlowValue>, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).postConversation(flowValue, options).then((request) => request(this.axios, this.basePath));
    }
}


