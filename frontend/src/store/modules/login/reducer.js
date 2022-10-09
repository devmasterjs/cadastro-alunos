import * as types from '../types';

const INITIAL_STATE = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      return INITIAL_STATE;
    }

    case types.REGISTER_USER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.REGISTER_USER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_USER_CREATED_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_USER_UPDATED_SUCCESS: {
      const newState = { ...state };
      newState.user.name = action.payload.name;
      newState.user.email = action.payload.email;
      newState.isLoading = false;
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default loginReducer;
