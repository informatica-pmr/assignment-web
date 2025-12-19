import { useContext, createContext } from 'react';

type NookiesContextProps = {
  getAccessToken: () => string | undefined;
  getAccessTokenOrThrow: () => string;
  setAccessToken: (accessToken: string) => void;
  deleteAccessToken: () => void;
};

export const NookiesContext = createContext<NookiesContextProps | null>(null);

export const useNookies = () => {
  const context = useContext(NookiesContext);
  if (!context) {
    throw new Error('o contexto de Nookies precisa ser usado sob o provedor de Nookies');
  }
  return context;
};
