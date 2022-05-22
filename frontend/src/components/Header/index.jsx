import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  const usuarioLogado = useSelector(
    (state) => state.loginReducer.usuarioLogado
  );

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      {usuarioLogado ? (
        <Link to="/user">
          <FaUserAlt size={24} />
        </Link>
      ) : (
        <Link to="/exit">
          <FaSignInAlt size={24} />
        </Link>
      )}
      <span style={{ color: '#fff' }}>
        {`Usuário logado: ${usuarioLogado}`}
      </span>
    </Nav>
  );
}
