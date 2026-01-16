import { useCallback, useState, type ReactNode } from 'react';
import { CivilStatusesOrderByContext } from '../contexts/civil-statuses-order-by.context';

type CivilStatusesOrderByProviderProps = {
  children: ReactNode;
};

export const CivilStatusesOrderByProvider = ({ children }: CivilStatusesOrderByProviderProps) => {
  const [name, setName] = useState('');

  const changeName = useCallback((value: string) => setName(value), []);

  return (
    <CivilStatusesOrderByContext.Provider
      value={{
        name,
        changeName,
      }}>
      {children}
    </CivilStatusesOrderByContext.Provider>
  );
};
