import { useCallback, useState, type ReactNode } from 'react';
import { YearsFiltersContext } from '../contexts/years-filters.context';

type YearsFiltersProviderProps = {
  children: ReactNode;
};

export const YearsFiltersProvider = ({ children }: YearsFiltersProviderProps) => {
  const [yearId, setYearId] = useState('');
  const [record, setRecord] = useState('');
  const [resolution, setResolution] = useState('');
  const [isBlocked, setIsBlocked] = useState('all');

  const changeYearId = useCallback((value: string) => setYearId(value), []);
  const changeRecord = useCallback((value: string) => setRecord(value), []);
  const changeResolution = useCallback((value: string) => setResolution(value), []);
  const changeIsBlocked = useCallback((value: string) => setIsBlocked(value), []);

  return (
    <YearsFiltersContext.Provider
      value={{
        yearId,
        isBlocked,
        record,
        resolution,
        changeIsBlocked,
        changeRecord,
        changeResolution,
        changeYearId,
      }}>
      {children}
    </YearsFiltersContext.Provider>
  );
};
