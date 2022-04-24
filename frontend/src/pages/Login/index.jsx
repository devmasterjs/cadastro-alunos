import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
  const showMessage = () => {
    toast.success('Login realizado com sucesso');
    toast.error('Usuário ou senha inválida');
    toast.warn('Senha informada muito fraca. Cuidado para não ser hackeado!');
    toast.info(
      'Não esqueça de pagar um pastel ao desenvolvedor no bar do Adão!'
    );
  };

  return (
    <Container>
      <Title isRed={false}>Login</Title>
      <button type="button" onClick={showMessage}>
        Login
      </button>
    </Container>
  );
}
