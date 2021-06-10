import env from '@app/services/environment.json';
import axios from 'axios';

export const API = axios.create({
  baseURL: env.BASE_URL
});