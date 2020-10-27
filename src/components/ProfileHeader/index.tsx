import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

import { Container, LogoWrapper ,HomeLinkWrapper } from './styles';

import logo from '../../assets/img/logo.png';

const ProfileHeader: React.FC = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>

      <HomeLinkWrapper>
        <Link to="/">
          <AiOutlineHome size={32} color="#000" />
        </Link>
      </HomeLinkWrapper>
    </Container>
  )
}

export default ProfileHeader;