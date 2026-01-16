import { useCallback, useState, type ReactNode } from 'react';
import { PositionsOrderByContext } from '../contexts/positions-order-by.context';

type PositionsOrderByProviderProps = {
  children: ReactNode;
};

export const PositionsOrderByProvider = ({ children }: PositionsOrderByProviderProps) => {
  const [name, setName] = useState('');
  const [active, setActive] = useState('');

  const changeName = useCallback((value: string) => setName(value), []);
  const changeActive = useCallback((value: string) => setActive(value), []);

  return (
    <PositionsOrderByContext.Provider
      value={{
        name,
        active,
        changeName,
        changeActive,
      }}>
      {children}
    </PositionsOrderByContext.Provider>
  );
};
