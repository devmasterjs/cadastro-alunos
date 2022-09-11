import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ component: Component, isClosed }) {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);

  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" state={{ prevPath: location.pathname }} />;
  }

  return <Component />;
}

PrivateRoute.defaultProps = {
  isClosed: false,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
