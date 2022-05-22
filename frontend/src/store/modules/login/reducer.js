import { toast } from 'react-toastify';
import * as types from '../types';

const INITIAL_STATE = {
  usuarioLogado: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN: {
      toast.success(`Usuário logado: ${state.usuarioLogado}`);
      const newState = { ...state };
      newState.usuarioLogado = !newState.usuarioLogado;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
