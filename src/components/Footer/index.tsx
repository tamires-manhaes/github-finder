import React from 'react';
import blueHeart from '../../assets/img/heart.svg';

import { Container, Text } from './styles';
const Footer: React.FC = () => {
  return (
    <Container>
      <Text>Feito por <a href="https://tamires-manhaes.github.io" target="_blank" rel="noopener noreferrer"> Tamires Manhães</a> com <img src={blueHeart} alt="blue heart"/></Text>
    </Container>
  )
}

export default Footer;