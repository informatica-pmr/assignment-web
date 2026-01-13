import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { LoadDisciplinesContext } from '../contexts/load-disciplines.context';
import type { FindManyDisciplinesOutputDTO } from '../dtos/outputs/find-many-disciplines.output.dto';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyDisciplinesInputDTO } from '../dtos/inputs/find-many-disciplines.input.dto';
import { useNookies } from '../../shared/contexts/nookies.context';

type LoadDisciplinesProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('disciplines');

export const LoadDisciplinesProvider = ({ children }: LoadDisciplinesProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const [disciplines, setDisciplines] = useState<FindManyDisciplinesOutputDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findManyDisciplines = useCallback(async () => {
    try {
      const { data } = await fetch.get<FindManyDisciplinesOutputDTO[], FindManyDisciplinesInputDTO>(
        {
          filters: {},
        },
      );

      setDisciplines(data ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    findManyDisciplines();
  }, [findManyDisciplines]);

  return (
    <LoadDisciplinesContext.Provider value={{ disciplines, isLoading }}>
      {children}
    </LoadDisciplinesContext.Provider>
  );
};
