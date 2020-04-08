import {all} from 'redux-saga/effects';

import getBooksWatcherSaga from './books';

export default function* rootSaga() {
  yield all([getBooksWatcherSaga()]);
}
