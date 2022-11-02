import { useEffect, useState } from 'react';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { NewStudentLink, ProfilePicture, StudentContainer } from './styled';
import Loading from '../../components/Loading';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios.get('/students');
      setStudents(response.data);
      setLoading(false);
    };

    getData();
  }, []);

  const handleDeleteAsk = (event) => {
    event.preventDefault();
    const deleteIcon = event.currentTarget;
    const exclamationIcon = event.currentTarget.nextSibling;
    exclamationIcon.setAttribute('display', 'block');
    deleteIcon.remove();
  };

  const handleDelete = async (event, id, index) => {
    try {
      setLoading(true);
      await axios.delete(`/students/${id}`);
      const newStudents = [...students];
      newStudents.splice(index, 1);
      setStudents(newStudents);
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);
      const status = get(error, 'response.status', 0);
      if (status === 401) {
        toast.error('Você precisa fazer login');
        navigate('/login');
      } else {
        errors.forEach((e) => toast.error(e));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Listagem de alunos</h1>
      <NewStudentLink to="/student">Novo aluno</NewStudentLink>

      <StudentContainer>
        {students.map((student, index) => (
          <div id="row" key={String(student.id)}>
            <ProfilePicture>
              {get(student, 'Photos[0].url', false) ? (
                <img src={student.Photos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <div id="student-id">
              <div>{student.name}</div>
              <span>{student.email}</span>
            </div>

            <div id="action-buttons">
              <Link to={`/student/${student.id}/edit`}>
                <FaEdit size={16} />
              </Link>

              <Link
                to={`/student/${student.id}/delete`}
                onClick={handleDeleteAsk}
              >
                <FaWindowClose size={16} />
              </Link>

              <FaExclamation
                size={16}
                display="none"
                cursor="pointer"
                onClick={(e) => handleDelete(e, student.id, index)}
              />
            </div>
          </div>
        ))}
      </StudentContainer>
    </Container>
  );
}
