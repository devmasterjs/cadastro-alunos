import { get } from 'lodash';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import history from '../../services/history';

export default function User() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (isEmail(email) === false) {
      formErrors = true;
      toast.error('Email inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    try {
      const response = await axios.post('/users', {
        name,
        password,
        email,
      });
      toast.info(`Usuário ${response.data.name} cadastrado com sucesso`);
      history.push('/login');
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);
      errors.forEach((err) => toast.error(err));
    }
  };

  return (
    <Container>
      <h1>Crie sua conta</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua senha"
          />
        </label>

        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
