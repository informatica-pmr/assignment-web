import { createContext, useContext } from 'react';

export type PreferencesOrderByContextProps = {
  name: string;
  changeName: (value: string) => void;
};

export const PreferencesOrderByContext = createContext<PreferencesOrderByContextProps | null>(null);

export const usePreferencesOrderBy = () => {
  const context = useContext(PreferencesOrderByContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
