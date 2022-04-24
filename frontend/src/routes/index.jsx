import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import PrivateRoute from './PrivateRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute component={Login} />} />
      <Route path="*" element={<PrivateRoute component={Page404} isClosed />} />
    </Routes>
  );
}
