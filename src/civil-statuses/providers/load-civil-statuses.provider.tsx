import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { LoadCivilStatusesContext } from '../contexts/load-civil-statuses.context';
import type { FindManyCivilStatusesOutputDTO } from '../dtos/outputs/find-many-civil-statuses.output.dto';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyCivilStatusesInputDTO } from '../dtos/inputs/find-many-civil-statuses.input.dto';
import { useNookies } from '../../shared/contexts/nookies.context';

type LoadCivilStatusesProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('civil-statuses');

export const LoadCivilStatusesProvider = ({ children }: LoadCivilStatusesProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const [civilStatuses, setCivilStatuses] = useState<FindManyCivilStatusesOutputDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findManyCivilStatuses = useCallback(async () => {
    try {
      const { data } = await fetch.get<
        FindManyCivilStatusesOutputDTO[],
        FindManyCivilStatusesInputDTO
      >({
        filters: {},
      });

      setCivilStatuses(data ?? []);
    } catch (err) {
      fetch.handleError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    findManyCivilStatuses();
  }, [findManyCivilStatuses]);

  return (
    <LoadCivilStatusesContext.Provider value={{ civilStatuses, isLoading }}>
      {children}
    </LoadCivilStatusesContext.Provider>
  );
};
