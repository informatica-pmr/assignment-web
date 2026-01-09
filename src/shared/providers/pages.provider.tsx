import { useCallback, useState, type ReactNode } from 'react';
import { PagesContext } from '../contexts/pages.context';
import { HomePage } from '../../home/pages/home.page';
import { useNookies } from '../contexts/nookies.context';
import { AuthLoginPage } from '../../auth/pages/auth-login.page';

type PagesProviderProps = {
  children: ReactNode;
};

export const PagesProvider = ({ children }: PagesProviderProps) => {
  const { getAccessToken } = useNookies();
  const [page, setPage] = useState<ReactNode>(!getAccessToken() ? <AuthLoginPage /> : <HomePage />);

  const changePage = useCallback(
    (value: ReactNode) => {
      if (!getAccessToken()) {
        setPage(<AuthLoginPage />);
      } else {
        setPage(value);
      }
    },
    [getAccessToken],
  );
  return (
    <PagesContext.Provider
      value={{
        page,
        changePage,
      }}>
      {children}
    </PagesContext.Provider>
  );
};
