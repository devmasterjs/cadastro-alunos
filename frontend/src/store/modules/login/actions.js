import * as types from '../types';

export const doLoginRequest = (payload) => ({
  type: types.LOGIN_REQUEST,
  payload,
});

export const doLoginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const doLoginFailure = (payload) => ({
  type: types.LOGIN_FAILURE,
  payload,
});
