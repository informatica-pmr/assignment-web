import { useCallback, useState, type ReactNode } from 'react';
import { TitlesFiltersContext } from '../contexts/titles-filters.context';

type TitlesFiltersProviderProps = {
  children: ReactNode;
};

export const TitlesFiltersProvider = ({ children }: TitlesFiltersProviderProps) => {
  const [yearId, setYearId] = useState('');
  const [description, setDescription] = useState('');
  const [alias, setAlias] = useState('');
  const [weight, setWeight] = useState('');
  const [max, setMax] = useState('');
  const [order, setOrder] = useState('');
  const [type, setType] = useState('');
  const [active, setActive] = useState('all');

  const changeYearId = useCallback((value: string) => setYearId(value), []);
  const changeDescription = useCallback((value: string) => setDescription(value), []);
  const changeAlias = useCallback((value: string) => setAlias(value), []);
  const changeWeight = useCallback((value: string) => setWeight(value), []);
  const changeMax = useCallback((value: string) => setMax(value), []);
  const changeOrder = useCallback((value: string) => setOrder(value), []);
  const changeType = useCallback((value: string) => setType(value), []);
  const changeActive = useCallback((value: string) => setActive(value), []);

  return (
    <TitlesFiltersContext.Provider
      value={{
        yearId,
        description,
        alias,
        weight,
        max,
        order,
        type,
        active,
        changeDescription,
        changeAlias,
        changeWeight,
        changeMax,
        changeOrder,
        changeType,
        changeActive,
        changeYearId,
      }}>
      {children}
    </TitlesFiltersContext.Provider>
  );
};
