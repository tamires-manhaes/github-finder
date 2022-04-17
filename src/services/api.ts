import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/users',
});

export default client;
