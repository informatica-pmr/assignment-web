import { createContext, useContext } from "react";

export type SituationsFiltersContextProps = {
  name: string;
  changeName: (value: string) => void;
};

export const SituationsFiltersContext = createContext<SituationsFiltersContextProps | null>(null);

export const useSituationsFilters = () => {
  const context = useContext(SituationsFiltersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};