import { createContext, useContext } from 'react';
import type { LoginAuthInputDTO } from '../dtos/inputs/login-auth.input.dto';

type AuthContextProps = {
  yearId: number;
  userId: number;
  username: string;
  role: string;
  login: (loginDTO: LoginAuthInputDTO) => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
