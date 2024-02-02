import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import {staticUserData} from '../data/static';

export const baseURL = 'http://10.0.2.2:4000';

export const instance = axios.create({
  baseURL,
  headers: {
    App: 'admin',
  },
});

instance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${staticUserData.accessToken}
  )}`;
  return config;
});

instance.interceptors.response.use(
  response => response,
  async function (error) {
    if (error instanceof AxiosError) {
      const originalRequest = error.config;

      if (!originalRequest) {
        return;
      }

      if (error.response?.status === 401) {
        try {
          const response = await instance.post('/refresh-token', {
            refreshToken: staticUserData.refreshToken,
          });

          if (!response.data.success) {
            throw new Error('Request Failed ! ');
          }

          const data = response.data.data;

          staticUserData.accessToken = data.accessToken;
          staticUserData.refreshToken = data.refreshToken;

          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

          return instance(originalRequest);
        } catch (error) {
          console.log(error);
        }
      }
    }
    return Promise.reject(error);
  },
);

export interface APIRequestInterface<T> {
  data: T;
  message: string;
  success: boolean;
  error: {message: string};
}

export const apiCall = async <T, U>(
  url: string,
  method: string,
  body?: U,
): Promise<APIRequestInterface<T>> => {
  const config: AxiosRequestConfig<U> = {
    method,
    url,
    data: body,
  };
  config.headers = {
    App: 'admin',
  };
  const response = await instance(config);
  return response.data;
};
