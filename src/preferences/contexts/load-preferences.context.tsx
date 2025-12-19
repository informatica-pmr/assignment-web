import { createContext, useContext } from "react";
import type { FindManyPreferencesOutputDTO } from "../dtos/outputs/find-many-preferences.output.dto";

type LoadPreferencesContextProps = {
  preferences: FindManyPreferencesOutputDTO[];
  isLoading: boolean;
};

export const LoadPreferencesContext = createContext<LoadPreferencesContextProps | null>(null);

export const useLoadPreferences = () => {
  const context = useContext(LoadPreferencesContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};