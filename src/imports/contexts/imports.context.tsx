import { createContext, useContext } from 'react';

type ImportsContextProps = {
  isImported: (type: string) => Promise<boolean>;
};

export const ImportsContext = createContext<ImportsContextProps | null>(null);

export const useImports = () => {
  const context = useContext(ImportsContext);
  if (!context) {
    throw new Error('provider not found (imports)');
  }
  return context;
};
