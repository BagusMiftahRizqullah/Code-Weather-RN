import {takeLatest, put} from 'redux-saga/effects';
import {apiGetDataweatherHome} from './Home.api';
import {HOME_ACTION} from './Home.Action';

function* apiGetDataweatherSaga(action) {
  try {
    const res = yield apiGetDataweatherHome(action.payload);

    if (res.status == 200) {
      yield put({type: HOME_ACTION.SUCCESS_GET_HOME, payload: res.data});
    } else {
      console.log('GAGAL FETCH');
    }
  } catch (err) {
    console.log('GAGAL FETCH');
  }
}

export default function* homeSaga() {
  yield takeLatest(HOME_ACTION.GET_DATA_HOME, apiGetDataweatherSaga);
}
