import { createContext, useContext } from 'react';

export type TitlesOrderByContextProps = {
  description: string;
  alias: string;
  weight: string;
  max: string;
  order: string;
  type: string;
  active: string;
  changeDescription: (value: string) => void;
  changeAlias: (value: string) => void;
  changeWeight: (value: string) => void;
  changeMax: (value: string) => void;
  changeOrder: (value: string) => void;
  changeType: (value: string) => void;
  changeActive: (value: string) => void;
};

export const TitlesOrderByContext = createContext<TitlesOrderByContextProps | null>(null);

export const useTitlesOrderBy = () => {
  const context = useContext(TitlesOrderByContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
