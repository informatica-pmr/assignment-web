import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { LoadPreferencesContext } from '../contexts/load-preferences.context';
import type { FindManyPreferencesOutputDTO } from '../dtos/outputs/find-many-preferences.output.dto';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyPreferencesInputDTO } from '../dtos/inputs/find-many-preferences.input.dto';
import { useNookies } from '../../shared/contexts/nookies.context';

type LoadPreferencesProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('preferences');

export const LoadPreferencesProvider = ({ children }: LoadPreferencesProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const [preferences, setPreferences] = useState<FindManyPreferencesOutputDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findManyPreferences = useCallback(async () => {
    try {
      const { data } = await fetch.get<FindManyPreferencesOutputDTO[], FindManyPreferencesInputDTO>(
        {
          filters: {},
        },
      );

      setPreferences(data ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    findManyPreferences();
  }, [findManyPreferences]);

  return (
    <LoadPreferencesContext.Provider value={{ preferences, isLoading }}>
      {children}
    </LoadPreferencesContext.Provider>
  );
};
