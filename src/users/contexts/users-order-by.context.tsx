import { createContext, use } from 'react';

export type UsersOrderByContextProps = {
  username: string;
  email: string;
  password: string;
  name: string;
  active: string;
  role: string;
  changeUsername: (username: string) => void;
  changeEmail: (email: string) => void;
  changePassword: (password: string) => void;
  changeName: (name: string) => void;
  changeActive: (active: string) => void;
  changeRole: (role: string) => void;
};

export const UsersOrderByContext = createContext<UsersOrderByContextProps | null>(null);

export const useUsersOrderBy = () => {
  const context = use(UsersOrderByContext);
  if (!context) {
    throw new Error('useUsersOrderByContext must be used within a UsersOrderByProvider');
  }
  return context;
};
