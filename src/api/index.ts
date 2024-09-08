import axios, { CreateAxiosDefaults } from 'axios';

import { Storage } from '~/enums/storage-enum';

const baseURL = import.meta.env.VITE_BASE_URL || 'https://jsonplaceholder.typicode.com';

const options: CreateAxiosDefaults = {
   baseURL,
   headers: {
      'Content-Type': 'application/json',
   },
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use(
   (config) => {
      const accessToken = localStorage.getItem(Storage.ACCESS_TOKEN);
      if (accessToken) {
         config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   },
);

export { axiosClassic, axiosWithAuth };
