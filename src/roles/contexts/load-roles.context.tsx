import { createContext, useContext } from 'react';
import type { FindManyRolesOutputDTO } from '../dtos/outputs/find-many-roles.output.dto';

type LoadRolesContextProps = {
  roles: FindManyRolesOutputDTO[];
  isLoading: boolean;
};

export const LoadRolesContext = createContext<LoadRolesContextProps | null>(null);

export const useLoadRoles = () => {
  const context = useContext(LoadRolesContext);
  if (!context) {
    throw new Error('useLoadRoles must be used within a LoadRolesProvider');
  }
  return context;
};
