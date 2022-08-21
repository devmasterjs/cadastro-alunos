import { all } from 'redux-saga/effects';
import loginAuth from './login/sagas';

export default function* rootSaga() {
  return yield all([loginAuth]);
}
