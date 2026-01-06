import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { LoadUsersRolesContext } from '../contexts/load-users-roles.context';
import { Fetch } from '../../shared/lib/fetch';

type LoadUsersRolesProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('users-roles');

export const LoadUsersRolesProvider = ({ children }: LoadUsersRolesProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [usersRoles, setUsersRoles] = useState<{ value: string; displayValue: string }[]>([]);

  const loadUsersRoles = useCallback(async () => {
    try {
      const { data } = await fetch.get<{ value: string; displayValue: string }[]>({});
      setUsersRoles(data ?? []);
    } catch (error) {
      console.error('Error loading users roles:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsersRoles();
  }, [loadUsersRoles]);

  return (
    <LoadUsersRolesContext.Provider value={{ usersRoles, isLoading }}>
      {children}
    </LoadUsersRolesContext.Provider>
  );
};
