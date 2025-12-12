/* eslint-disable react-hooks/use-memo */
import { useCallback, useState, type ReactNode } from "react";
import { PreferencesFiltersContext } from "../contexts/preferences-filters.context";

type PreferencesFiltersProviderProps = {
  children: ReactNode;
};

export const PreferencesFiltersProvider = ({children}: PreferencesFiltersProviderProps) => {
  const [name, setName] = useState('');

  const changeName = useCallback(setName, [setName]);

  return (<PreferencesFiltersContext.Provider value={{
    name,
    changeName,
  }}>{children}</PreferencesFiltersContext.Provider>)
};