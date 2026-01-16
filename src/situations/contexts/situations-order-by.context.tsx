import { createContext, useContext } from 'react';

export type SituationsOrderByContextProps = {
  name: string;
  changeName: (value: string) => void;
};

export const SituationsOrderByContext = createContext<SituationsOrderByContextProps | null>(null);

export const useSituationsOrderBy = () => {
  const context = useContext(SituationsOrderByContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
