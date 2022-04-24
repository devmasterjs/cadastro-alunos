import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import history from './services/history';

function App() {
  return (
    <HistoryRouter history={history}>
      <Header />
      <AppRoutes />
      <GlobalStyles />
    </HistoryRouter>
  );
}

export default App;
