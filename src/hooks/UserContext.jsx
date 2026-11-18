import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { setUnauthorizedHandler } from '../services/api';

const USER_DATA_KEY = 'devburguer:userData';

// Lê o usuário salvo já na criação do estado, para as rotas protegidas
// saberem desde a primeira renderização se existe alguém logado.
const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem(USER_DATA_KEY)) ?? {};
  } catch {
    localStorage.removeItem(USER_DATA_KEY);
    return {};
  }
};

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(getStoredUser);

  const putUserData = (userInfo) => {
    setUserInfo(userInfo);

    localStorage.setItem(USER_DATA_KEY, JSON.stringify(userInfo));
  };

  const logout = () => {
    setUserInfo({});
    localStorage.removeItem(USER_DATA_KEY);
  };

  // Token ausente, inválido ou expirado (401 da API): encerra a sessão.
  // Sem usuário no contexto, as rotas protegidas redirecionam para o login.
  useEffect(() => {
    setUnauthorizedHandler(() => {
      setUserInfo({});
      localStorage.removeItem(USER_DATA_KEY);
      toast.error('Sua sessão expirou. Faça login novamente.', {
        toastId: 'session-expired',
      });
    });

    return () => setUnauthorizedHandler(null);
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be a valid context');
  }

  return context;
};
