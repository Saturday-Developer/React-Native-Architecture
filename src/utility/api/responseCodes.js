/**
 * DEFAULT ERROR STATUS
 */
export const DEFAULT_ERROR_STATUS = 500;

/**
 * API expected reponse codes
 */
export const API_RESPONSE_SUCCESS = 200;
export const API_PARTIAL_SUCCESS_RESPONSE_201 = 201;
export const API_PARTIAL_SUCCESS_RESPONSE_204 = 204;
export const API_RESPONSE_INTERNAL_SERVER_ERROR = 500;
export const API_RESPONSE_AUTHENTICATION_ERROR = 401;

/**
 * API Headers
 */
export const API_HEADER_AUTHORIZATION_KEY = 'Authorization';
export const API_HEADER_AUTHORIZATION_ACCESS_TOKEN_KEY = 'access_token';
export const API_HEADER_AUTHORIZATION_VALUE = `Basic ${API_HEADER_AUTHORIZATION_ACCESS_TOKEN_KEY}`;
export const API_HEADER_AUTHORIZATION_BEARER_VALUE = `Bearer ${API_HEADER_AUTHORIZATION_ACCESS_TOKEN_KEY}`;
export const API_HEADER_CONTENT_TYPE_KEY = 'Content-Type';

export const API_HEADER_CONTENT_TYPE_MULTIPART_FORM_DATA =
  'multipart/form-data';
export const API_HEADER_CACHE_CONTROL_KEY = 'Cache-Control';
export const API_HEADER_NO_CACHE_VALUE = 'no-cache';
export const API_ACCEPT_LANGUAGE_KEY = 'Accept-Language';
export const API_HEADER_CONTENT_TYPE = 'content-type';
export const API_HEADER_CONTENT_TYPE_JSON_VALUE = 'application/json';
export const API_HEADER_RNFB_RESPONSE = 'RNFB-Response';
export const API_HEADER_RNFB_RESPONSE_VALUE_UTF8 = 'utf8';
export const API_HEADER_ACCEPT_VERSION = 'accept-version';
