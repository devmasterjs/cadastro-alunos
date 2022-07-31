import { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { ProfilePicture, StudentContainer } from './styled';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/students');
      setStudents(response.data);
    };

    getData();
  }, []);

  return (
    <Container>
      <h1>Listagem de alunos</h1>

      <StudentContainer>
        {students.map((student) => (
          <div key={student.id}>
            <ProfilePicture>
              {get(student, 'Photos[0].url', false) ? (
                <img src={student.Photos[0].url} alt="Foto do aluno" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span className="info">
              <span className="name">{student.name}</span>
              <span>{student.email}</span>
            </span>

            <Link to={`/student/${student.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`/student/${student.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </StudentContainer>
    </Container>
  );
}
