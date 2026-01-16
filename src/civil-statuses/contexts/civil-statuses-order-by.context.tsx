import { createContext, useContext } from 'react';

export type CivilStatusesOrderByContextProps = {
  name: string;
  changeName: (value: string) => void;
};

export const CivilStatusesOrderByContext = createContext<CivilStatusesOrderByContextProps | null>(
  null,
);

export const useCivilStatusesOrderBy = () => {
  const context = useContext(CivilStatusesOrderByContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
