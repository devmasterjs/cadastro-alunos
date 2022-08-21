import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Form = styled.form`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 1.25rem;
    height: 2.5rem;
    font-size: 1.125rem;
    border-radius: 0.3125rem;
    border: 0.0625rem solid #ddd;
    padding: 0 0.625rem;

    &:focus {
      border: 0.0625rem solid ${colors.primaryColor};
    }
  }
`;
