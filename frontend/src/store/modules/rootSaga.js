import { all } from 'redux-saga/effects';
import example from './login/sagas';

export default function* rootSaga() {
  return yield all([example]);
}
