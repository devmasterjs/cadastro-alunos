import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ component: Component, isClosed }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" />;
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
