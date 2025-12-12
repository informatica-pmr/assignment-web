/* eslint-disable react-hooks/use-memo */
import { useCallback, useState, type ReactNode } from "react";
import { CivilStatusesFiltersContext } from "../contexts/civil-statuses-filters.context";

type CivilStatusesFiltersProviderProps = {
  children: ReactNode;
};

export const CivilStatusesFiltersProvider = ({children}: CivilStatusesFiltersProviderProps) => {
  const [name, setName] = useState('');

  const changeName = useCallback(setName, [setName]);

  return (<CivilStatusesFiltersContext.Provider value={{
    name,
    changeName,
  }}>{children}</CivilStatusesFiltersContext.Provider>)
};