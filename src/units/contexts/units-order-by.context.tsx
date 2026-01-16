import { createContext, useContext } from 'react';

export type UnitsOrderByContextProps = {
  name: string;
  changeName: (value: string) => void;
};

export const UnitsOrderByContext = createContext<UnitsOrderByContextProps | null>(null);

export const useUnitsOrderBy = () => {
  const context = useContext(UnitsOrderByContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
