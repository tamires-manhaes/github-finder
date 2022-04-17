import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Box = styled.div`
  width: 80vw;
  min-height: 50vh;
  border-radius: 15px;
  border: 1px solid var(--blue-hover);
  margin: 40px auto;
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;

export const ImgWrapper = styled.div`
  max-width: 200px;
  height: 200px;
  width: 30%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const ButtomWrapper = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--blue-hover);
  background: var(--white);
  transition: background 350ms ease;

  a {
    color: var(--black);
    font-weight: 900;
  }

  &:hover {
    background: var(--blue-hover);
  }
`;

export const AsideWrapper = styled.div`
  width: 70%;
  padding-left: 20px;
`;

export const AsideTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const AsideBottom = styled.div`
  margin: 10px 0;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div``;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 1.8rem;
  margin-bottom: 5px;
`;

export const Subtitle = styled.h3`
  font-weight: 500;
  font-style: italic;
  font-size: 1.2rem;
`;

export const UserInfos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0;

  li {
    margin-right: 15px;

    span {
      font-weight: 700;
    }
  }
`;

export const FollowsWrapper = styled.li`
  margin-right: 5px;
`;

export const UserDescriptions = styled.ul`
  margin: 10px 0;

  li {
    margin: 10px 0;

    a {
      color: var(--black);
      transition: color 350ms ease;

      &:hover {
        color: var(--blue-hover);
      }
    }
  }
`;
