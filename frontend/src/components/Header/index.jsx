import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="/">
        <FaHome size={24} />
      </a>
      <a href="/user">
        <FaUserAlt size={24} />
      </a>
      <a href="/exit">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
