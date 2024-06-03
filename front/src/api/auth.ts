import axios from 'axios';
import axiosInstance from './axios';
import {Profile, Category} from '../../../server/src/types/domain';
import {getEncryptStorage} from '../utils';

type RequestUser = {
  email: string;
  password: string;
};

const postSignUp = async ({email, password}: RequestUser): Promise<void> => {
  const response = await axiosInstance.post('/auth/signup', {
    email,
    password,
  });

  return response.data;
};

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

const postLogin = async ({
  email,
  password,
}: RequestUser): Promise<ResponseToken> => {
  const response = await axiosInstance.post('/auth/signin', {
    email,
    password,
  });

  return response.data;
};

type ResponseProfile = Profile & Category;

const getProfile = async (): Promise<ResponseProfile> => {
  const response = await axiosInstance.get('/auth/me');

  return response.data;
};

const getAccessToken = async (): Promise<ResponseToken> => {
  const refreshToken = await getEncryptStorage('refreshToken');
  const response = await axiosInstance.get('/auth/refresh', {
    headers: {
      Authorization: `Baerer ${refreshToken}`,
    },
  });

  return response.data;
};

const logout = async () => {
  await axiosInstance.post('/auth/logout');
};

export {postSignUp, postLogin, getProfile, getAccessToken, logout};
export type {RequestUser, ResponseToken, ResponseProfile};
