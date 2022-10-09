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

export const doRegisterUserRequest = (payload, navigate) => ({
  type: types.REGISTER_USER_REQUEST,
  payload,
  navigate,
});

export const doRegisterUserFailure = (payload) => ({
  type: types.REGISTER_USER_FAILURE,
  payload,
});

export const doRegisterUserCreatedSuccess = (payload) => ({
  type: types.REGISTER_USER_CREATED_SUCCESS,
  payload,
});

export const doRegisterUserUpdatedSuccess = (payload) => ({
  type: types.REGISTER_USER_UPDATED_SUCCESS,
  payload,
});
