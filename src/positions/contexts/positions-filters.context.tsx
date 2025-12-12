import { createContext, useContext } from "react";

export type PositionsFiltersContextProps = {
  name: string;
  active: string;
  changeName: (value: string) => void;
  changeActive: (value: string) => void;
};

export const PositionsFiltersContext = createContext<PositionsFiltersContextProps | null>(null);

export const usePositionsFilters = () => {
  const context = useContext(PositionsFiltersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};