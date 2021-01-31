import { AxiosResponse } from 'axios';
import { IDENTITY_API_LOGIN_PATH, IDENTITY_API_SIGNUP_PATH } from '../../constants';
import { axiosInstance } from '../../helpers/axiosInstance';

async function login(email: string, password: string): Promise<void | AxiosResponse<any>> {
  const resp = await axiosInstance.post(IDENTITY_API_LOGIN_PATH, {
    email,
    password,
  });
  console.log('LOGIN RESPONSE', resp);
}

async function signup(email: string, password: string): Promise<void | AxiosResponse<any>> {
  const resp = await axiosInstance.post(IDENTITY_API_SIGNUP_PATH, {
    email,
    password,
  });
  console.log('SIGNUP RESPONSE', resp);
}

export const identityService = {
  login,
  signup,
};
