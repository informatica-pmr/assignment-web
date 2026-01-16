import { useCallback, useState, type ReactNode } from 'react';
import { PreferencesOrderByContext } from '../contexts/preferences-order-by.context';

type PreferencesOrderByProviderProps = {
  children: ReactNode;
};

export const PreferencesOrderByProvider = ({ children }: PreferencesOrderByProviderProps) => {
  const [name, setName] = useState('');

  const changeName = useCallback((value: string) => setName(value), []);

  return (
    <PreferencesOrderByContext.Provider
      value={{
        name,
        changeName,
      }}>
      {children}
    </PreferencesOrderByContext.Provider>
  );
};
