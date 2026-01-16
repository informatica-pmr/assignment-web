import { useCallback, useState, type ReactNode } from 'react';
import { SituationsFiltersContext } from '../contexts/situations-filters.context';

type SituationsFiltersProviderProps = {
  children: ReactNode;
};

export const SituationsFiltersProvider = ({ children }: SituationsFiltersProviderProps) => {
  const [name, setName] = useState('');

  const changeName = useCallback((value: string) => setName(value), []);

  return (
    <SituationsFiltersContext.Provider
      value={{
        name,
        changeName,
      }}>
      {children}
    </SituationsFiltersContext.Provider>
  );
};
