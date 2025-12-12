/* eslint-disable react-hooks/use-memo */
import { useCallback, useState, type ReactNode } from "react";
import { DisciplinesFiltersContext } from "../contexts/disciplines-filters.context";

type DisciplinesFiltersProviderProps = {
  children: ReactNode;
};

export const DisciplinesFiltersProvider = ({children}: DisciplinesFiltersProviderProps) => {
  const [name, setName] = useState('');

  const changeName = useCallback(setName, [setName]);

  return (<DisciplinesFiltersContext.Provider value={{
    name,
    changeName,
  }}>{children}</DisciplinesFiltersContext.Provider>)
};