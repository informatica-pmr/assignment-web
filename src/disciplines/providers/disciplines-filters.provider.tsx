import { useCallback, useState, type ReactNode } from 'react';
import { DisciplinesFiltersContext } from '../contexts/disciplines-filters.context';

type DisciplinesFiltersProviderProps = {
  children: ReactNode;
};

export const DisciplinesFiltersProvider = ({ children }: DisciplinesFiltersProviderProps) => {
  const [name, setName] = useState('');

  const changeName = useCallback((value: string) => setName(value), []);

  return (
    <DisciplinesFiltersContext.Provider
      value={{
        name,
        changeName,
      }}>
      {children}
    </DisciplinesFiltersContext.Provider>
  );
};
