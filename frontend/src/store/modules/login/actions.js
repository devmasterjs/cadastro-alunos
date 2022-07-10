import * as types from '../types';

export const doLoginRequest = () => ({
  type: types.LOGIN_REQUEST,
});

export const doLoginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
});

export const doLoginFailure = () => ({
  type: types.LOGIN_FAILURE,
});
