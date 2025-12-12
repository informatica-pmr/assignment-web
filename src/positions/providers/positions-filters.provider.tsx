/* eslint-disable react-hooks/use-memo */
import { useCallback, useState, type ReactNode } from "react";
import { PositionsFiltersContext } from "../contexts/positions-filters.context";

type PositionsFiltersProviderProps = {
  children: ReactNode;
};

export const PositionsFiltersProvider = ({children}: PositionsFiltersProviderProps) => {
  const [name, setName] = useState('');
  const [active, setActive] = useState('');

  const changeName = useCallback(setName, [setName]);
  const changeActive = useCallback(setActive, [setActive]);

  return (<PositionsFiltersContext.Provider value={{
    name,
    active,
    changeName,
    changeActive,
  }}>{children}</PositionsFiltersContext.Provider>)
};