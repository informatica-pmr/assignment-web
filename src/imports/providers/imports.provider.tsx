import { useCallback, type FC, type ReactNode } from 'react';
import { ImportsContext } from '../contexts/imports.context';
import { Fetch } from '../../shared/lib/fetch';
import { useNookies } from '../../shared/contexts/nookies.context';
import { useAuth } from '../../auth/contexts/auth.context';

const fetch = new Fetch('imports');

type ImportsProviderProps = {
  children: ReactNode;
};

export const ImportsProvider: FC<ImportsProviderProps> = ({ children }) => {
  const { yearId } = useAuth();
  const { getAccessTokenOrThrow } = useNookies();

  fetch.setAccessToken(getAccessTokenOrThrow());

  const isImported = useCallback(
    async (type: string) => {
      try {
        const { data } = await fetch.get<boolean, { yearId: string; type: string }>({
          filters: { yearId: yearId.toString(), type },
          action: 'exists',
        });
        if (!data) {
          return false;
        }
        return data;
      } catch (err) {
        fetch.handleError(err);
        return false;
      }
    },
    [yearId],
  );

  return <ImportsContext.Provider value={{ isImported }}>{children}</ImportsContext.Provider>;
};
