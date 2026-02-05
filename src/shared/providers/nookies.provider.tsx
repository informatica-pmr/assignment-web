import { useCookies } from 'react-cookie';
import type { ReactNode } from 'react';
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
  const [expiresInCookie, setExpiresInCookie, removeExpiresInCookie] = useCookies<
    'expires_in',
    { expires_in?: string }
  >(['expires_in']);

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

  const getExpiresIn = (): string | undefined => {
    return getCookie<string>('access_token') ?? undefined;
  };

  const getExpiresInOrThrow = () => {
    const expiresIn = getCookie<string>('expires_in');
    if (!expiresIn) {
      return '';
    }
    return expiresIn;
  };

  const setExpiresIn = (expiresIn: string) => {
    setCookie<string>('expires_in', expiresIn);
  };

  const deleteExpiresIn = () => {
    deleteCookie('expires_in');
  };

  function getCookie<T extends string>(name: 'access_token' | 'expires_in'): T | undefined {
    if (typeof window === 'undefined') {
      switch (name) {
        case 'access_token':
          return accessTokenCookie[name] as T;
        case 'expires_in':
          return expiresInCookie[name] as T;
      }
    }
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${name}=`))
      ?.split('=')[1] as T;
  }

  function setCookie<T extends string>(name: 'access_token' | 'expires_in', value: T) {
    if (typeof window === 'undefined') {
      switch (name) {
        case 'access_token':
          setAccessTokenCookie(name, value, { path: '/', httpOnly: true, secure: true });
          break;
        case 'expires_in':
          setExpiresInCookie(name, value, { path: '/', httpOnly: true, secure: true });
          break;
      }
    } else {
      document.cookie = `${name}=${value}; path=/;`;
    }
  }

  function deleteCookie(name: 'access_token' | 'expires_in') {
    if (typeof window === 'undefined') {
      switch (name) {
        case 'access_token':
          removeAccessTokenCookie(name, { path: '/', expires: new Date(1970, 1, 1, 0, 0, 0, 0) });
          break;
        case 'expires_in':
          removeExpiresInCookie(name, { path: '/', expires: new Date(1970, 1, 1, 0, 0, 0, 0) });
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
        getExpiresIn,
        getExpiresInOrThrow,
        setExpiresIn,
        deleteExpiresIn,
      }}>
      {children}
    </NookiesContext.Provider>
  );
};
