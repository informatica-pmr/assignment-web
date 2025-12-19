import { createContext, useContext } from "react";

type AuthContextProps = {
  yearId: number;
  userId: number;
  username: string;
  role: string;
  login: (yearId: string, username: string, password: string) => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};