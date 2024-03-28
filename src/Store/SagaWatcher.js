import {all} from 'redux-saga/effects';
import homeSaga from '../Screen/Home/Home.saga';
import searchSaga from '../Screen/Search/Search.saga';
export function* SagaWacther() {
  yield all([homeSaga(), searchSaga()]);
}
