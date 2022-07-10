import * as types from '../types';

const INITIAL_STATE = {
  usuarioLogado: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return state;
    }
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.usuarioLogado = !newState.usuarioLogado;
      return newState;
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
