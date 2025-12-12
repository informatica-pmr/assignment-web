import { createContext, useContext } from "react";
import type { CreatePreferencesInputDTO } from "../dtos/inputs/create-preferences.input.dto";
import type { UpdatePreferencesInputDTO } from "../dtos/inputs/update-preferences.input.dto";
import type { FindManyPreferencesOutputDTO } from "../dtos/outputs/find-many-preferences.output.dto";
import type { FindOnePreferencesOutputDTO } from "../dtos/outputs/find-one-preferences.output.dto";

export type PreferencesContextProps = {
  preferences: FindManyPreferencesOutputDTO[];
  findOnePreference: (id: string) => Promise<FindOnePreferencesOutputDTO | undefined>;
  findManyPreferences: () => Promise<void>;
  createPreference: (createPreferenceDTO: CreatePreferencesInputDTO) => Promise<boolean>;
  updatePreference: (id: string, updatePreferenceDTO: UpdatePreferencesInputDTO) => Promise<boolean>;
  deletePreference: (id: string) => Promise<boolean>;
};

export const PreferencesContext = createContext<PreferencesContextProps | null>(null);

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};