import {takeLatest, put} from 'redux-saga/effects';
import {apiGetDataWeatherCountry} from './Search.api';
import {SEARCH_ACTION} from './Search.Action';

function* apiDataCountrySaga(action) {
  const res = yield apiGetDataWeatherCountry();
  try {
    if (res && res.data.code === 200) {
      console.log('Goo apiGetDataWeatherCountry', res);
      // yield put({type: SEARCH_ACTION.GET_DATA_COUNTRY, payload: res.data.data});
    } else {
      //   yield put({type: AUTH_CONSTANT.LOGIN_FAILURE, payload: res.data});
    }
  } catch (err) {
    // yield put({type: AUTH_CONSTANT.LOGIN_FAILURE, payload: err});
  }
}

export default function* searchSaga() {
  yield takeLatest(SEARCH_ACTION.GET_DATA_COUNTRY, apiDataCountrySaga);
}
