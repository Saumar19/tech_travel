import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6287d8307864d2883e8da98b.mockapi.io',
});

export default api;
