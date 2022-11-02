import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Student() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [heigth, setHeight] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Nome precisa ter entre 3 e 255 caracteres');
    }

    if (lastname.length < 3 || lastname.length > 255) {
      formErrors = true;
      toast.error('Sobrenome precisa ter entre 3 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (!isInt(age) || parseInt(age, 10) <= 0 || parseInt(age, 10) > 120) {
      formErrors = true;
      toast.error('Idade inválida');
    }

    if (
      !isFloat(weight) ||
      parseFloat(weight) <= 0 ||
      parseFloat(weight) > 150
    ) {
      formErrors = true;
      toast.error('Peso inválido');
    }

    if (
      !isFloat(heigth) ||
      parseFloat(heigth) <= 0 ||
      parseFloat(heigth) > 2.4
    ) {
      formErrors = true;
      toast.error('Alturra inválida');
    }

    if (formErrors)
      // eslint-disable-next-line no-useless-return
      return;

    toast.success('Cadastro válido');
  };

  return (
    <Container>
      <h1>{id ? 'Editar aluno' : 'Novo aluno'}</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Informe o nome"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={lastname}
          placeholder="Informe o sobrenome"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Informe o email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          value={age}
          placeholder="Informe a idade"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="number"
          value={weight}
          placeholder="Informe o peso"
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          value={heigth}
          placeholder="Informe a altura (metros)"
          onChange={(e) => setHeight(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
