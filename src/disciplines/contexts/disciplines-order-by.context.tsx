import { createContext, useContext } from 'react';

export type DisciplinesOrderByContextProps = {
  name: string;
  changeName: (value: string) => void;
};

export const DisciplinesOrderByContext = createContext<DisciplinesOrderByContextProps | null>(null);

export const useDisciplinesOrderBy = () => {
  const context = useContext(DisciplinesOrderByContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
