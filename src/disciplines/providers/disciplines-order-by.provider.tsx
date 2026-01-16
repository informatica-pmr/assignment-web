import { useCallback, useState, type ReactNode } from 'react';
import { DisciplinesOrderByContext } from '../contexts/disciplines-order-by.context';

type DisciplinesOrderByProviderProps = {
  children: ReactNode;
};

export const DisciplinesOrderByProvider = ({ children }: DisciplinesOrderByProviderProps) => {
  const [name, setName] = useState('');

  const changeName = useCallback((value: string) => setName(value), []);

  return (
    <DisciplinesOrderByContext.Provider
      value={{
        name,
        changeName,
      }}>
      {children}
    </DisciplinesOrderByContext.Provider>
  );
};
