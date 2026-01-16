import { useCallback, useState, type ReactNode } from 'react';
import { PreferencesFiltersContext } from '../contexts/preferences-filters.context';

type PreferencesFiltersProviderProps = {
  children: ReactNode;
};

export const PreferencesFiltersProvider = ({ children }: PreferencesFiltersProviderProps) => {
  const [name, setName] = useState('');

  const changeName = useCallback((value: string) => setName(value), []);

  return (
    <PreferencesFiltersContext.Provider
      value={{
        name,
        changeName,
      }}>
      {children}
    </PreferencesFiltersContext.Provider>
  );
};
