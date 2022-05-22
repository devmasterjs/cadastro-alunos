import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: 'LOGIN',
    });
  };

  return (
    <Container>
      <Title isRed={false}>Login</Title>
      <button type="button" onClick={handleClick}>
        Login
      </button>
    </Container>
  );
}
