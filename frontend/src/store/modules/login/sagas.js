import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const fakeRequest = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequest() {
  try {
    toast.info(`Executando a requisição...`);
    yield call(fakeRequest);
    yield put(actions.doLoginSuccess());
    toast.success(`Usuário logado!`);
  } catch (error) {
    toast.error(`Falha na requisição...`);
    yield put(actions.doLoginFailure());
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, exampleRequest)]);
