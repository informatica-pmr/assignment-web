import { createContext, useContext } from "react";

export type PreferencesFiltersContextProps = {
  name: string;
  changeName: (value: string) => void;
};

export const PreferencesFiltersContext = createContext<PreferencesFiltersContextProps | null>(null);

export const usePreferencesFilters = () => {
  const context = useContext(PreferencesFiltersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};