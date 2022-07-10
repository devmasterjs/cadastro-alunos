import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'REACT-CADASTRO-ALUNOS',
      storage,
      whitelist: ['loginReducer'],
    },
    reducers
  );

  return persistedReducers;
};
