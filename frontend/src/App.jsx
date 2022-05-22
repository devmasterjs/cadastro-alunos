import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Header from './components/Header';
import AppRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Header />
        <AppRoutes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </HistoryRouter>
    </Provider>
  );
}

export default App;
