import styled from 'styled-components';

export const Container = styled.footer`
  height: 8vh;
  
`;

export const Text = styled.h1`
  font-size: 1.2rem;
  font-weight: 900;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  a {
    font-size: 1.2rem;
    font-weight: 900;
    margin: 0 4px;
    color: var(--black);
  }

  img {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
`;