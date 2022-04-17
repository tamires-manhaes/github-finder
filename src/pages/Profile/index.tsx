import React, { useState, useEffect } from 'react';

import {
  Container,
  Box,
  TopSection,
  ImgWrapper,
  AsideWrapper,
  TitleWrapper,
  Title,
  Subtitle,
  AsideTop,
  ButtomWrapper,
  AsideBottom,
  UserInfos,
  UserDescriptions,
} from './styles';

import PageHeader from '../../components/ProfileHeader';
import Footer from '../../components/Footer';
import { getProfile, ProfileResponse } from '../../services';

interface IRouteParams {
  match: {
    params: {
      username: string;
    };
  };
}

const Profile: React.FC<IRouteParams> = ({ match }) => {
  const { username } = match.params;
  const [profile, setProfile] = useState<ProfileResponse>();

  useEffect(() => {
    getProfile(username).then((response) => setProfile(response));
  }, [username]);

  return (
    <Container>
      <PageHeader />
      {profile !== undefined ? (
        <Box>
          <TopSection>
            <ImgWrapper>
              <img src={profile.avatar_url} alt="avatar" />
            </ImgWrapper>

            <AsideWrapper>
              <AsideTop>
                <TitleWrapper>
                  <Title>{profile.name}</Title>
                  <Subtitle>@{username}</Subtitle>
                </TitleWrapper>

                <ButtomWrapper>
                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VER PERFIL
                  </a>
                </ButtomWrapper>
              </AsideTop>

              <AsideBottom>
                <UserInfos>
                  <li>
                    <span>{profile.public_repos} Repositórios</span>
                  </li>

                  <li>
                    <span>{profile.followers} Seguidores</span>
                  </li>

                  <li>
                    <span>{profile.following} Seguindo</span>
                  </li>
                </UserInfos>
                <UserDescriptions>
                  <li>{profile.location}</li>
                  <li>{profile.bio}</li>
                  <li>
                    <a href={profile.blog}>{profile.blog}</a>
                  </li>
                </UserDescriptions>
              </AsideBottom>
            </AsideWrapper>
          </TopSection>
        </Box>
      ) : (
        <div>{''}</div>
      )}

      <Footer />
    </Container>
  );
};

export default Profile;
