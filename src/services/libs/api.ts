import axios from 'axios';

import { BASE_URL } from '@utils/config/consts';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export default api;
