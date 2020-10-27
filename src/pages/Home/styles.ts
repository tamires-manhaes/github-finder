import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 35vh;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TitleImg = styled.img`
  margin-left: 10px;
`;

export const Form = styled.form`
  max-width: 450px;
  width: 100%;
  padding: 20px;

  display: flex;
  align-items: center;
  background: var(--white);

  input{
    width: 350px;
    height: 40px;
    padding: 0 10px;
    border: 1px solid var(--border);
  }

  button {
    width: 80px;
    height: 40px;
    border: 1px solid var(--border);
    transition: background 350ms ease;

    :hover {
      background: ${shade(0.2, '#00abffb0')};

      svg{
        color: var(--white) !important;
      }
    }
  }
`;

export const CardsWrapper = styled.ul`
  min-height: 50vh;
`;
