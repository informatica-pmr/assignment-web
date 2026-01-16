import { useCallback, useState, type ReactNode } from 'react';
import { SituationsOrderByContext } from '../contexts/situations-order-by.context';

type SituationsOrderByProviderProps = {
  children: ReactNode;
};

export const SituationsOrderByProvider = ({ children }: SituationsOrderByProviderProps) => {
  const [name, setName] = useState('');

  const changeName = useCallback((value: string) => setName(value), []);

  return (
    <SituationsOrderByContext.Provider
      value={{
        name,
        changeName,
      }}>
      {children}
    </SituationsOrderByContext.Provider>
  );
};
