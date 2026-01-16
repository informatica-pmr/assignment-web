import { useCallback, useState, type ReactNode } from 'react';
import { TitlesOrderByContext } from '../contexts/titles-order-by.context';

type TitlesOrderByProviderProps = {
  children: ReactNode;
};

export const TitlesOrderByProvider = ({ children }: TitlesOrderByProviderProps) => {
  const [description, setDescription] = useState('');
  const [alias, setAlias] = useState('');
  const [weight, setWeight] = useState('');
  const [max, setMax] = useState('');
  const [order, setOrder] = useState('');
  const [type, setType] = useState('');
  const [active, setActive] = useState('all');

  const changeDescription = useCallback((value: string) => setDescription(value), []);
  const changeAlias = useCallback((value: string) => setAlias(value), []);
  const changeWeight = useCallback((value: string) => setWeight(value), []);
  const changeMax = useCallback((value: string) => setMax(value), []);
  const changeOrder = useCallback((value: string) => setOrder(value), []);
  const changeType = useCallback((value: string) => setType(value), []);
  const changeActive = useCallback((value: string) => setActive(value), []);

  return (
    <TitlesOrderByContext.Provider
      value={{
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
      }}>
      {children}
    </TitlesOrderByContext.Provider>
  );
};
