import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { LoadYearsContext } from '../contexts/load-years.context';
import type { FindManyYearsOutputDTO } from '../dtos/outputs/find-many-years.output.dto';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyYearsInputDTO } from '../dtos/inputs/find-many-years.input.dto';

type LoadYearsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('years');

export const LoadYearsProvider = ({ children }: LoadYearsProviderProps) => {
  const [years, setYears] = useState<FindManyYearsOutputDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const findManyYears = useCallback(async () => {
    try {
      const { data } = await fetch.get<FindManyYearsOutputDTO[], FindManyYearsInputDTO>({
        filters: {},
      });

      setYears(data ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    findManyYears();
  }, [findManyYears]);

  return (
    <LoadYearsContext.Provider value={{ years, isLoading }}>{children}</LoadYearsContext.Provider>
  );
};
