import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { LoadSituationsContext } from '../contexts/load-situations.context';
import type { FindManySituationsOutputDTO } from '../dtos/outputs/find-many-situations.output.dto';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManySituationsInputDTO } from '../dtos/inputs/find-many-situations.input.dto';
import { useNookies } from '../../shared/contexts/nookies.context';

type LoadSituationsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('situations');

export const LoadSituationsProvider = ({ children }: LoadSituationsProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const [situations, setSituations] = useState<FindManySituationsOutputDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findManySituations = useCallback(async () => {
    try {
      const { data } = await fetch.get<FindManySituationsOutputDTO[], FindManySituationsInputDTO>({
        filters: {},
      });

      setSituations(data ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    findManySituations();
  }, [findManySituations]);

  return (
    <LoadSituationsContext.Provider value={{ situations, isLoading }}>
      {children}
    </LoadSituationsContext.Provider>
  );
};
