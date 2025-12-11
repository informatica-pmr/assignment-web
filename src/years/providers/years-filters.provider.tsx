/* eslint-disable react-hooks/use-memo */
import { useCallback, useState, type ReactNode } from "react";
import { YearsFiltersContext } from "../contexts/years-filters.context";

type YearsFiltersProviderProps = {
  children: ReactNode;
};

export const YearsFiltersProvider = ({children}: YearsFiltersProviderProps) => {
  const [yearId, setYearId] = useState('');
  const [record, setRecord] = useState('');
  const [resolution, setResolution] = useState('');
  const [isBlocked, setIsBlocked] = useState('all');

  const changeYearId = useCallback(setYearId, [setYearId]);
  const changeRecord = useCallback(setRecord, [setRecord]);
  const changeResolution = useCallback(setResolution, [setResolution]);
  const changeIsBlocked = useCallback(setIsBlocked, [setIsBlocked]);

  return (<YearsFiltersContext.Provider value={{
    yearId,
    isBlocked,
    record,
    resolution,
    changeIsBlocked,
    changeRecord,
    changeResolution,
    changeYearId
  }}>{children}</YearsFiltersContext.Provider>)
};