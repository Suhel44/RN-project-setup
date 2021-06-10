/* eslint-disable @typescript-eslint/no-unused-vars */
import {takeLatest, call, put} from 'redux-saga/effects';
import LoginService from '@app/services/loginServices';
import * as actionTypes from '@app/store/actionTypes/authActionTypes';
import {AnyAction} from 'redux';
import * as actions from '@app/store/actions/authActions/loginAction';
import {LoginPayLoad} from '@app/core/types';

export function* AuthSaga(action: any) {
  try {
    console.log('Saga', action);
    // const response = yield call(LoginService, payload);
    // yield put(actions.login(response.data));
  } catch (error) {
    // yield put(actions.fetchDashboardDataFailure());
  }
}

export function* watchAuthAsync() {
  yield takeLatest(actionTypes.LOGIN_DATA, AuthSaga);
}
