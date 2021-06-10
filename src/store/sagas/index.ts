import {all} from 'redux-saga/effects';
import {watchAuthAsync} from '@app/store/sagas/authSaga';

export function* rootSaga() {
  yield all([watchAuthAsync()]);
}
