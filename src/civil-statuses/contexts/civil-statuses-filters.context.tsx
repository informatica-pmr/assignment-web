import { createContext, useContext } from "react";

export type CivilStatusesFiltersContextProps = {
  name: string;
  changeName: (value: string) => void;
};

export const CivilStatusesFiltersContext = createContext<CivilStatusesFiltersContextProps | null>(null);

export const useCivilStatusesFilters = () => {
  const context = useContext(CivilStatusesFiltersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};