import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;
  }

  input {
    height: 2.5rem;
    font-size: 1.125rem;
    border: 0.0625rem solid #ddd;
    padding: 0 0.625rem;
    border-radius: 0.3125rem;
    margin-top: 0.3125rem;

    &:focus {
      border: 0.0625rem solid ${colors.primaryColor};
    }
  }
`;
