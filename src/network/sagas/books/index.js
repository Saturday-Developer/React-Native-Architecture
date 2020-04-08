import { takeLatest, call, put } from 'redux-saga/effects';
import {
  BOOKS_REQUEST,
  BOOKS_SUCCESS,
  BOOKS_ERROR,
} from '../../../redux/action/types';

import { makeNetworkCall } from '../../index';
import { responseCode, apiEndPoints } from '../../../utility/api';


function getBooksListAPI(action) {
  const { GETLISTOFBOOKS_URL } = apiEndPoints;
  const config = {
    method: 'get',
    url: GETLISTOFBOOKS_URL,
  };
  return makeNetworkCall(config);
}

function* getBooksList(action) {
  try {
    const response = yield call(getBooksListAPI, action);
    if (response.status === responseCode.API_RESPONSE_SUCCESS) {
      const { data = {} } = response;
      yield put({
        type: BOOKS_SUCCESS,
        payload: { bookInfo: data },
      });
    } else {
      yield put({
        type: BOOKS_ERROR,
        payload: { error: response },
      });
    }
  } catch (error) {
    // if something went wrong (unexpected)
    yield put({ type: BOOKS_ERROR, payload: { error } });
  }
}

export default function* getBooksWatcherSaga() {
  yield takeLatest(BOOKS_REQUEST, getBooksList);
}
