import client from './api';

export interface ProfileResponse {
  avatar_url: string;
  bio: string;
  blog: string;
  followers: number;
  following: number;
  id: number;
  location: string;
  name: string;
  url: string;
  login: string;
  public_repos: string;
  html_url: string;
}

export const getProfile = async (search: string): Promise<ProfileResponse> => {
  const data = (await client.get(`/${search}`)).data;

  return data;
};
