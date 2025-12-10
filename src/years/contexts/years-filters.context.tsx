import { createContext, useContext } from "react";

export type YearsFiltersContextProps = {
  yearId: string;
  record: string;
  resolution: string;
  isBloqued: string;
};

export const YearsFiltersContext = createContext<YearsFiltersContextProps | null>(null);

export const useYearsFilters = () => {
  const context = useContext(YearsFiltersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};