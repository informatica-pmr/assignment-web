import type React from 'react';
import { NavigateContext } from '../contexts/navigate.context';
import { useNavigate } from 'react-router';
import { useNookies } from '../contexts/nookies.context';

export const NavigateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigateRouter = useNavigate();
  const { getAccessToken } = useNookies();
  const navigate = (path?: string, delta?: number) => {
    const token = getAccessToken();
    if (token) {
      if (path) {
        navigateRouter(path);
      } else if (delta) {
        navigateRouter(delta);
      }
    } else {
      navigateRouter('/auth/login');
    }
  };

  return <NavigateContext.Provider value={{ navigate }}>{children}</NavigateContext.Provider>;
};
