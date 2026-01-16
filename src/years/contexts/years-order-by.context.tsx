import { createContext, useContext } from 'react';

export type YearsOrderByContextProps = {
  yearId: string;
  record: string;
  resolution: string;
  isBlocked: string;
  changeYearId: (value: string) => void;
  changeRecord: (value: string) => void;
  changeResolution: (value: string) => void;
  changeIsBlocked: (value: string) => void;
};

export const YearsOrderByContext = createContext<YearsOrderByContextProps | null>(null);

export const useYearsOrderBy = () => {
  const context = useContext(YearsOrderByContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
