import { createContext, useContext } from "react";

export type SubscriptionsFiltersContextProps = {
  yearId: string;
  teacherId: string;
  preferenceId: string;
  changePreferenceId: (value: string) => void;
  changeTeacherId: (value: string) => void;
  changeYearId: (value: string) => void;
};

export const SubscriptionsFiltersContext = createContext<SubscriptionsFiltersContextProps | null>(null);

export const useSubscriptionsFilters = () => {
  const context = useContext(SubscriptionsFiltersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};