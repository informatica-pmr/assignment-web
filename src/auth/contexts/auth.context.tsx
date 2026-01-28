import { createContext, useContext } from 'react';
import type { LoginAuthInputDTO } from '../dtos/inputs/login-auth.input.dto';
import type { ResetPasswordAuthDTO } from '../dtos/inputs/reset-password-auth.input.dto';

type AuthContextProps = {
  isLogged: boolean;
  yearId: number;
  userId: string;
  username: string;
  role: string;
  login: (loginDTO: LoginAuthInputDTO) => Promise<boolean>;
  logout: () => void;
  reset: (username: string, resetPasswordDTO: ResetPasswordAuthDTO) => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
