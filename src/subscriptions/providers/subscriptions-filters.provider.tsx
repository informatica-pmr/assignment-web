/* eslint-disable react-hooks/use-memo */
import { useCallback, useState, type ReactNode } from "react";
import { SubscriptionsFiltersContext } from "../contexts/subscriptions-filters.context";

type SubscriptionsFiltersProviderProps = {
  children: ReactNode;
};

export const SubscriptionsFiltersProvider = ({children}: SubscriptionsFiltersProviderProps) => {
  const [yearId, setYearId] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [preferenceId, setPreferenceId] = useState('');
  
  const changeYearId = useCallback(setYearId, [setYearId]);
  const changeTeacherId = useCallback(setTeacherId, [setTeacherId]);
  const changePreferenceId = useCallback(setPreferenceId, [setPreferenceId]);

  return (<SubscriptionsFiltersContext.Provider value={{
    yearId,
    teacherId,
    preferenceId,
    changePreferenceId,
    changeYearId,
    changeTeacherId,
  }}>{children}</SubscriptionsFiltersContext.Provider>)
};