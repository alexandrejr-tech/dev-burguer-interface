import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Função chamada quando a API recusa o token (registrada pelo UserProvider).
let onUnauthorized = null;

export const setUnauthorizedHandler = (handler) => {
  onUnauthorized = handler;
};

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburguer:userData');

  const token = userData && JSON.parse(userData).token;

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // No login, o 401 significa senha errada e é tratado pela própria tela.
    const isLoginRequest = error.config?.url === '/sessions';

    if (error.response?.status === 401 && !isLoginRequest) {
      onUnauthorized?.();
    }

    return Promise.reject(error);
  },
);
