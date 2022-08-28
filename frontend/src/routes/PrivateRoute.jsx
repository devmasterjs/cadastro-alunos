import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const getPreviousPath = (Component) =>
  Component.name === 'Students' ? '/' : Component.name.toLowerCase();

export default function PrivateRoute({ component: Component, isClosed }) {
  const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);

  if (isClosed && !isLoggedIn) {
    return (
      <Navigate to="/login" state={{ prevPath: getPreviousPath(Component) }} />
    );
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
