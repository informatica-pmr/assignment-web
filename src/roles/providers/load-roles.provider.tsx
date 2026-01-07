import { useCallback, useEffect, useState, type ReactNode } from 'react';
import type { FindManyRolesOutputDTO } from '../dtos/outputs/find-many-roles.output.dto';
import { LoadRolesContext } from '../contexts/load-roles.context';
import { Fetch } from '../../shared/lib/fetch';

type LoadRolesProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('roles');

export const LoadRolesProvider = ({ children }: LoadRolesProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [roles, setRoles] = useState<FindManyRolesOutputDTO[]>([]);

  const findManyRoles = useCallback(async () => {
    try {
      const { data } = await fetch.get<FindManyRolesOutputDTO[]>({});
      setRoles(data ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void findManyRoles();
  }, [findManyRoles]);

  return (
    <LoadRolesContext.Provider value={{ roles, isLoading }}>{children}</LoadRolesContext.Provider>
  );
};
