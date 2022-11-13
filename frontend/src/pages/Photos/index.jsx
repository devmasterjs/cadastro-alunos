import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/login/actions';
import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Photos() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/students/${id}`);
        const photoUrl = get(data, 'Photos[0].url', '');
        setPhoto(photoUrl);
        console.log(photo);
      } catch (error) {
        const errors = get(error, 'response.data.errors', []);
        const status = get(error, 'response.status', 0);
        if (status === 401) {
          toast.error('Você precisa fazer login');
          dispatch(actions.doLoginFailure());
          navigate('/login');
        } else {
          errors.forEach((e) => toast.error(e));
          navigate('/');
        }
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Fotos</h1>
    </Container>
  );
}
