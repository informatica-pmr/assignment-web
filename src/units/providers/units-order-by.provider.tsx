import { useCallback, useState, type ReactNode } from 'react';
import { UnitsOrderByContext } from '../contexts/units-order-by.context';

type UnitsOrderByProviderProps = {
  children: ReactNode;
};

export const UnitsOrderByProvider = ({ children }: UnitsOrderByProviderProps) => {
  const [name, setName] = useState('');

  const changeName = useCallback((value: string) => setName(value), []);

  return (
    <UnitsOrderByContext.Provider
      value={{
        name,
        changeName,
      }}>
      {children}
    </UnitsOrderByContext.Provider>
  );
};
