import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
