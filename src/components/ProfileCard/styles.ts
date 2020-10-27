import styled from 'styled-components';

export const Card = styled.li`
    height: 30vh;
    width: 65vw;
    margin: 20px auto;
    padding: 15px;
    background: var(--white);
    border: 2px solid var(--border);
    border-radius: 5px;

  a {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    transition: transform 350ms ease;

    :hover {
      transform: translateX(10px) 
    }
  }
`;

export const AvatarWrapper = styled.div`
  width: 30%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    max-width: 150px;
  }
`;

export const UserInfos = styled.div`
  width: calc(70% - 20px);

  header{
    h1{
      font-size: 2rem;
      font-weight: 900;
      margin-bottom: 5px;
    }
  }
`;

export const UserDescriptions = styled.div`
  h2{
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }
`;

