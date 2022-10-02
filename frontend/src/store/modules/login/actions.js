import * as types from '../types';

export const doLoginRequest = (payload, navigate) => ({
  type: types.LOGIN_REQUEST,
  payload,
  navigate,
});

export const doLoginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const doLoginFailure = (payload) => ({
  type: types.LOGIN_FAILURE,
  payload,
});
