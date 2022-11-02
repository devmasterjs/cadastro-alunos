import styled from 'styled-components';

export const StudentContainer = styled.div`
  margin-top: 20px;
  #row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  #student-id {
    width: 70%;
    span {
      font-size: 12px;
    }
  }

  #row + #row {
    border-top: 1px solid #eee;
  }

  #action-buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 12%;
  }
`;

export const ProfilePicture = styled.div`
  img,
  svg {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
