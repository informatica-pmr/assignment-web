import { useCallback, useState, type ReactNode } from 'react';
import { SubscriptionsFiltersContext } from '../contexts/subscriptions-filters.context';

type SubscriptionsFiltersProviderProps = {
  children: ReactNode;
};

export const SubscriptionsFiltersProvider = ({ children }: SubscriptionsFiltersProviderProps) => {
  const [yearId, setYearId] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [preferenceId, setPreferenceId] = useState('');

  const changeYearId = useCallback((value: string) => setYearId(value), []);
  const changeTeacherId = useCallback((value: string) => setTeacherId(value), []);
  const changePreferenceId = useCallback((value: string) => setPreferenceId(value), []);

  return (
    <SubscriptionsFiltersContext.Provider
      value={{
        yearId,
        teacherId,
        preferenceId,
        changePreferenceId,
        changeYearId,
        changeTeacherId,
      }}>
      {children}
    </SubscriptionsFiltersContext.Provider>
  );
};
