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
      console.log('REDUCER', action.payload);
      return state;
    }
    case types.LOGIN_SUCCESS: {
      return state;
    }
    case types.LOGIN_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
