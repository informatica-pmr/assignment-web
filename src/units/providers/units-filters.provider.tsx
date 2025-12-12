/* eslint-disable react-hooks/use-memo */
import { useCallback, useState, type ReactNode } from "react";
import { UnitsFiltersContext } from "../contexts/units-filters.context";

type UnitsFiltersProviderProps = {
  children: ReactNode;
};

export const UnitsFiltersProvider = ({children}: UnitsFiltersProviderProps) => {
  const [name, setName] = useState('');

  const changeName = useCallback(setName, [setName]);

  return (<UnitsFiltersContext.Provider value={{
    name,
    changeName,
  }}>{children}</UnitsFiltersContext.Provider>)
};