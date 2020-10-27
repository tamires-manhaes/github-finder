import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai'

import { Container, Header, TitleWrapper, TitleImg, Form, CardsWrapper } from './styles';

import logo from '../../assets/img/logo.png';

import Footer from '../../components/Footer';
import ProfileCard from '../../components/ProfileCard';

import axios from 'axios';
import { api } from '../../services/api';

interface UserCard {
  id: number,
  login: string,
  name: string,
  avatar_url: string,
  bio: string,
}

const Home: React.FC = () => {
  const [search , setSearch] = useState<string>('');
  const [user, setUser] = useState<UserCard>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try{
      await axios.get(`${api.baseUrl}/${search}`).then(response => setUser(response.data));
      setSearch("");
    }catch(err){
      alert('usuário não encontrado');
    }
  }

  return(
    <Container>
      <Header>
        <TitleWrapper>
          <AiFillGithub size={45} color="#000" /> 
          <TitleImg src={logo} alt="logo"/>
        </TitleWrapper>
        <Form onSubmit={handleSubmit}>
          <input type="text" placeholder="github username" value={search} onChange={handleChange}/>
          <button type="submit"><FaSearch size={20} color="#a2a2a2" /></button>
        </Form>
      </Header>

      <CardsWrapper>
      {user !== undefined ? (
        <ProfileCard 
          key={user.id}
          username={user.login}
          id={user.id}
          name={user.name}
          avatar_url={user.avatar_url}
          bio={user.bio}
        />
      ): (
        <div>{''}</div>
      )}
      </CardsWrapper>

      <Footer />
  </Container>

  )
}

export default Home;