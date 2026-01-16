import { createContext, useContext } from 'react';

export type SubscriptionsOrderByContextProps = {
  unit: string;
  teacher: string;
  preference: string;
  changePreference: (value: string) => void;
  changeTeacher: (value: string) => void;
  changeUnit: (value: string) => void;
};

export const SubscriptionsOrderByContext = createContext<SubscriptionsOrderByContextProps | null>(
  null,
);

export const useSubscriptionsOrderBy = () => {
  const context = useContext(SubscriptionsOrderByContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
