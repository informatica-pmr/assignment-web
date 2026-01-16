import { useCallback, useState, type ReactNode } from 'react';
import { SubscriptionsOrderByContext } from '../contexts/subscriptions-order-by.context';

type SubscriptionsOrderByProviderProps = {
  children: ReactNode;
};

export const SubscriptionsOrderByProvider = ({ children }: SubscriptionsOrderByProviderProps) => {
  const [unit, setUnit] = useState('');
  const [teacher, setTeacher] = useState('');
  const [preference, setPreference] = useState('');

  const changeUnit = useCallback((value: string) => setUnit(value), []);
  const changeTeacher = useCallback((value: string) => setTeacher(value), []);
  const changePreference = useCallback((value: string) => setPreference(value), []);

  return (
    <SubscriptionsOrderByContext.Provider
      value={{
        unit,
        teacher,
        preference,
        changePreference,
        changeUnit,
        changeTeacher,
      }}>
      {children}
    </SubscriptionsOrderByContext.Provider>
  );
};
