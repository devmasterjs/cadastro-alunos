import { toast } from 'react-toastify';
import { all, put, call, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import axios from '../../../services/axios';
import * as types from '../types';
import * as actions from './actions';

function* loginRequest(action) {
  try {
    const { payload } = action;
    const { email, password, prevPath } = payload;
    const response = yield call(axios.post, '/login', { email, password });
    yield put(actions.doLoginSuccess({ ...response.data }));
    toast.success('Usuário autenticado com sucesso');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    action.navigate(prevPath);
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

function* registerUserRequest({ payload, navigate }) {
  const { id, name, email, password } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        name,
        email,
        password: password || undefined,
      });
      toast.success('Conta alterada com sucesso');
      yield put(
        actions.doRegisterUserUpdatedSuccess({ name, email, password })
      );
    } else {
      yield call(axios.post, '/users', {
        name,
        email,
        password,
      });
      toast.success('Conta criada com sucesso');
      yield put(
        actions.doRegisterUserCreatedSuccess({ name, email, password })
      );
      navigate('/login');
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente');
      yield put(actions.doLoginFailure());
      return navigate('/login');
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Erro desconhecido');
    }
    yield put(actions.doRegisterUserFailure());
  }
  return true;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_USER_REQUEST, registerUserRequest),
]);
