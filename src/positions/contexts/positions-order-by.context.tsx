import { createContext, useContext } from 'react';

export type PositionsOrderByContextProps = {
  name: string;
  active: string;
  changeName: (value: string) => void;
  changeActive: (value: string) => void;
};

export const PositionsOrderByContext = createContext<PositionsOrderByContextProps | null>(null);

export const usePositionsOrderBy = () => {
  const context = useContext(PositionsOrderByContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
