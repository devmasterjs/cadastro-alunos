import { toast } from 'react-toastify';
import { all, put, call, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import axios from '../../../services/axios';
import * as types from '../types';
import * as actions from './actions';
import history from '../../../services/history';

function* loginRequest(action) {
  try {
    const { payload } = action;
    const { email, password, prevPath } = payload;
    const response = yield call(axios.post, '/login', { email, password });
    yield put(actions.doLoginSuccess({ ...response.data }));
    toast.success('Usuário autenticado com sucesso');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(prevPath);
  } catch (error) {
    toast.error('Usuário ou senha inválidos');
    yield put(actions.doLoginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'loginReducer.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
