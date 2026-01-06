import { createContext, useContext } from 'react';

type LoadUsersRolesContextProps = {
  usersRoles: { value: string; displayValue: string }[];
  isLoading: boolean;
};

export const LoadUsersRolesContext = createContext<LoadUsersRolesContextProps | null>(null);

export const useLoadUsersRoles = () => {
  const context = useContext(LoadUsersRolesContext);
  if (!context) {
    throw new Error('useLoadUsersRoles must be used within a LoadUsersRolesProvider');
  }
  return context;
};
