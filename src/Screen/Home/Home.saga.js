import {takeLatest, put} from 'redux-saga/effects';
import {apiGetDataweather} from './Home.api';
import {HOME_ACTION} from './Home.Action';

function* apiGetDataweatherSaga(action) {
  const res = yield apiGetDataweather();
  try {
    if (res && res.data.code === 200) {
      console.log('Goo apiGetDataweatherSaga', res);
      yield put({type: HOME_ACTION.GET_DATA_HOME, payload: res.data.data});
    } else {
      //   yield put({type: AUTH_CONSTANT.LOGIN_FAILURE, payload: res.data});
    }
  } catch (err) {
    // yield put({type: AUTH_CONSTANT.LOGIN_FAILURE, payload: err});
  }
}

export default function* homeSaga() {
  yield takeLatest(HOME_ACTION.GET_DATA_HOME, apiGetDataweatherSaga);
}
