import axios from 'axios';
import {
  DEFAULT_ERROR_STATUS,
  API_HEADER_CONTENT_TYPE,
  API_HEADER_CONTENT_TYPE_JSON_VALUE,
  API_RESPONSE_SUCCESS,
  API_PARTIAL_SUCCESS_RESPONSE_201,
  API_PARTIAL_SUCCESS_RESPONSE_204,
  API_HEADER_CONTENT_TYPE_KEY,
} from '../utility/api/responseCodes';
import { BASE_URL } from '../utility/api/apiEndPoints';

/**
 * unit: milliseconds
 */
const TIMEOUT = 10000;
const commonHeaders = {};

const AxiosServer = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

//  Make Axios Call
async function makeAxiosNetworkCall(config) {
  let response = {};
  const defaultErrorString = 'Some thing wrong Error ...';
  commonHeaders[API_HEADER_CONTENT_TYPE] = API_HEADER_CONTENT_TYPE_JSON_VALUE;
  AxiosServer.defaults.headers.common = {};
  console.log('makeAxiosNetworkCall config', config);
  try {
    response = await AxiosServer(config);
  } catch (error) {
    if (error.response) {
      console.log('Errror', defaultErrorString);
      response.message = defaultErrorString;
      response.status = DEFAULT_ERROR_STATUS;
    } else {
      console.log('Errror');
      // error.message is the 'Network Error' recieved from Axios
      response.message = error.message || defaultErrorString;
      response.status = DEFAULT_ERROR_STATUS; // Dummy status but required
    }
  }

  return response;
}

// Make fetch call

async function makeFetchNetworkCall(config) {
  console.log('fetch');
  const response = {};
  const defaultErrorString = 'Some thing wrong Error ...';
  const url = BASE_URL + config.url;
  commonHeaders[
    API_HEADER_CONTENT_TYPE_KEY
  ] = API_HEADER_CONTENT_TYPE_JSON_VALUE;

  const headers = {
    ...commonHeaders,
    ...config.headers,
  };

  const res = await fetch(url, {
    method: config.method,
    headers,
    body: JSON.stringify(config.data),
    timeoutInterval: TIMEOUT,
  });
  try {
    if (res) {
      if (res.status === API_PARTIAL_SUCCESS_RESPONSE_201) {
        response.status = API_RESPONSE_SUCCESS;
      } else if (res.status === API_PARTIAL_SUCCESS_RESPONSE_204) {
        response.status = API_RESPONSE_SUCCESS;
      } else {
        response.data = await res.json();
        response.status = res.status;
      }
      if (response.status !== API_RESPONSE_SUCCESS) {
        response.message = response.data.error.message || defaultErrorString;
        response.status = DEFAULT_ERROR_STATUS; // Dummy status but required
        if (response) {
          if (response.data) {
            response.message = response.data.error.message;
            response.status = response.data.error.status || res.status;
          } else {
            response.message = defaultErrorString;
            response.status = DEFAULT_ERROR_STATUS; // Dummy status but required
          }
        }
      }
    }
  } catch (e) {
    console.log(e);
    response.message = defaultErrorString;
    response.status = DEFAULT_ERROR_STATUS; // Dummy status but required
  }

  return response;
}
function makeNetworkCall(config) {
  //   return makeAxiosNetworkCall(config);
  return makeFetchNetworkCall(config);
}

export { AxiosServer, makeNetworkCall };
