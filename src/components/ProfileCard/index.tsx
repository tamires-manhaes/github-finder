import React from 'react';
import { Link } from 'react-router-dom';
import { Card, AvatarWrapper, UserInfos, UserDescriptions } from './styles';

interface IProfileCard {
  username: string,
  id: number,
  name: string,
  avatar_url: string,
  bio: string,
}

const ProfileCard: React.FC<IProfileCard> = ({ username, id, name, avatar_url, bio }) => {
  return (
    <Card>
      <Link id={`${id}`} to={`/profile/${username}`}>
          <AvatarWrapper>
            <img src={avatar_url} alt="user avatar"/>
          </AvatarWrapper>

          <UserInfos>
            <header>
              <h1>{name}</h1>
            </header>

            <UserDescriptions>
              <h2>@{username}</h2>
              <span>{bio}</span>
            </UserDescriptions>
          </UserInfos>
      </Link>
    </Card>
  )
}

export default ProfileCard;