import { createContext, useContext } from "react";

export type UnitsFiltersContextProps = {
  name: string;
  changeName: (value: string) => void;
};

export const UnitsFiltersContext = createContext<UnitsFiltersContextProps | null>(null);

export const useUnitsFilters = () => {
  const context = useContext(UnitsFiltersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};