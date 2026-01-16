import { useCallback, useState, type ReactNode } from 'react';
import { YearsOrderByContext } from '../contexts/years-order-by.context';

type YearsOrderByProviderProps = {
  children: ReactNode;
};

export const YearsOrderByProvider = ({ children }: YearsOrderByProviderProps) => {
  const [yearId, setYearId] = useState('');
  const [record, setRecord] = useState('');
  const [resolution, setResolution] = useState('');
  const [isBlocked, setIsBlocked] = useState('');

  const changeYearId = useCallback((value: string) => setYearId(value), []);
  const changeRecord = useCallback((value: string) => setRecord(value), []);
  const changeResolution = useCallback((value: string) => setResolution(value), []);
  const changeIsBlocked = useCallback((value: string) => setIsBlocked(value), []);

  return (
    <YearsOrderByContext.Provider
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
    </YearsOrderByContext.Provider>
  );
};
