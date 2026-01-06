import { createContext, use } from 'react';

type UsersFiltersContextProps = {
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

export const UsersFiltersContext = createContext<UsersFiltersContextProps | null>(null);

export const useUsersFilters = () => {
  const context = use(UsersFiltersContext);
  if (!context) {
    throw new Error('useUsersFiltersContext must be used within a UsersFiltersProvider');
  }
  return context;
};
