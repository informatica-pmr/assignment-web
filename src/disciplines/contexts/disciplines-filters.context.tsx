import { createContext, useContext } from "react";

export type DisciplinesFiltersContextProps = {
  name: string;
  changeName: (value: string) => void;
};

export const DisciplinesFiltersContext = createContext<DisciplinesFiltersContextProps | null>(null);

export const useDisciplinesFilters = () => {
  const context = useContext(DisciplinesFiltersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};