import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { useLocation, useNavigate } from 'react-router-dom';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/login/actions';
import Loading from '../../components/Loading';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const prevPath = get(location, 'state.prevPath', '/');
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.loginReducer.isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (isEmail(email) === false) {
      formErrors = true;
      toast.error('Email inválido');
    }

    if (password.length < 6 || password.length > 12) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 12 caracteres');
    }

    if (formErrors) return;

    dispatch(actions.doLoginRequest({ email, password, prevPath }, navigate));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Sua senha"
        />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
