import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { LoadPositionsContext } from '../contexts/load-positions.context';
import type { FindManyPositionsOutputDTO } from '../dtos/outputs/find-many-positions.output.dto';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyPositionsInputDTO } from '../dtos/inputs/find-many-positions.input.dto';
import { useNookies } from '../../shared/contexts/nookies.context';

type LoadPositionsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('positions');

export const LoadPositionsProvider = ({ children }: LoadPositionsProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const [positions, setPositions] = useState<FindManyPositionsOutputDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findManyPositions = useCallback(async () => {
    try {
      const { data } = await fetch.get<FindManyPositionsOutputDTO[], FindManyPositionsInputDTO>({
        filters: {},
      });

      setPositions(data ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    findManyPositions();
  }, [findManyPositions]);

  return (
    <LoadPositionsContext.Provider value={{ positions, isLoading }}>
      {children}
    </LoadPositionsContext.Provider>
  );
};
