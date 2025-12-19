import { useCookies } from 'react-cookie';
import { type ReactNode } from 'react';
import { NookiesContext } from '../contexts/nookies.context';

export type TKTheme = 'light' | 'dark';
export type TKLocale = 'pt-br' | 'en-us';
export type TKNavState = 'collapsed' | 'expanded';

type NookiesProviderProps = {
  children: ReactNode;
};

export const NookiesProvider = ({ children }: NookiesProviderProps) => {
  const [accessTokenCookie, setAccessTokenCookie, removeAccessTokenCookie] = useCookies<
    'access_token',
    { access_token?: string }
  >(['access_token']);

  const getAccessToken = (): string | undefined => {
    return getCookie<string>('access_token') ?? undefined;
  };

  const getAccessTokenOrThrow = () => {
    const accessToken = getCookie<string>('access_token');
    if (!accessToken) {
      return '';
    }
    return accessToken;
  };

  const setAccessToken = (accessToken: string) => {
    setCookie<string>('access_token', accessToken);
  };

  const deleteAccessToken = () => {
    deleteCookie('access_token');
  };

  function getCookie<T extends string>(name: 'access_token' | 'nav_state'): T | undefined {
    if (typeof window === 'undefined') {
      switch (name) {
        case 'access_token':
          return accessTokenCookie[name] as T;
      }
    }
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${name}=`))
      ?.split('=')[1] as T;
  }

  function setCookie<T extends string>(name: 'access_token' | 'nav_state', value: T) {
    if (typeof window === 'undefined') {
      switch (name) {
        case 'access_token':
          setAccessTokenCookie(name, value, { path: '/', httpOnly: true, secure: true });
          break;
      }
    } else {
      document.cookie = `${name}=${value}; path=/;`;
    }
  }

  function deleteCookie(name: 'access_token' | 'nav_state') {
    if (typeof window === 'undefined') {
      switch (name) {
        case 'access_token':
          removeAccessTokenCookie(name, { path: '/', expires: new Date(1970, 1, 1, 0, 0, 0, 0) });
          break;
      }
    } else {
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }

  return (
    <NookiesContext.Provider
      value={{
        getAccessToken,
        getAccessTokenOrThrow,
        setAccessToken,
        deleteAccessToken,
      }}
    >
      {children}
    </NookiesContext.Provider>
  );
};
