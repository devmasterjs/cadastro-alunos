import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/user">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/exit">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
