import { createContext, useContext } from "react";

export type TitlesFiltersContextProps = {
  yearId: string;
  description: string;
  alias: string;
  weight: string;
  max: string;
  order: string;
  type: string;
  active: string;
  changeYearId: (value: string) => void;
  changeDescription: (value: string) => void;
  changeAlias: (value: string) => void;
  changeWeight: (value: string) => void;
  changeMax: (value: string) => void;
  changeOrder: (value: string) => void;
  changeType: (value: string) => void;
  changeActive: (value: string) => void;
};

export const TitlesFiltersContext = createContext<TitlesFiltersContextProps | null>(null);

export const useTitlesFilters = () => {
  const context = useContext(TitlesFiltersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};