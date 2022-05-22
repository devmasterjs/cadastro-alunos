import { toast } from 'react-toastify';
import { legacy_createStore as createStore } from 'redux';

const INITIAL_STATE = {
  usuarioLogado: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN': {
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

const store = createStore(reducer);

export default store;
