import styled from 'styled-components';
import { primaryColor, linkFontColor } from '../../styles/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${linkFontColor};
    margin: 0 0.625rem 0;
    font-weight: bold;
  }
`;
