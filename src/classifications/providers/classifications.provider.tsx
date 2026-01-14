import { useCallback, useState, type ReactNode } from 'react';
import { ClassificationsContext } from '../contexts/classifications.context';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyClassificationsOutputDTO } from '../dtos/outputs/find-many-classifications.output.dto';
import { useClassificationsFilters } from '../contexts/classifications-filters.context';
import type { FindManyClassificationsInputDTO } from '../dtos/inputs/find-many-classifications.input.dto';
import { useNookies } from '../../shared/contexts/nookies.context';

type ClassificationsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('classifications');

export const ClassificationsProvider = ({ children }: ClassificationsProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const filters = useClassificationsFilters();
  const [classifications, setClassifications] = useState<FindManyClassificationsOutputDTO[]>([]);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findManyClassifications = useCallback(async () => {
    try {
      const { data } = await fetch.get<
        FindManyClassificationsOutputDTO[],
        FindManyClassificationsInputDTO
      >({
        filters: {
          ...filters,
        },
      });

      setClassifications(data ?? []);
    } catch (err) {
      fetch.handleError(err);
    }
  }, [filters]);

  const findManyClassificationsRP = async () => {
    try {
      const { data } = await fetch.get<
        FindManyClassificationsOutputDTO[],
        FindManyClassificationsInputDTO
      >({
        filters: {
          ...filters,
        },
      });

      return data ?? [];
    } catch (err) {
      fetch.handleError(err);
      return [];
    }
  };

  return (
    <ClassificationsContext.Provider
      value={{
        classifications,
        findManyClassifications,
        findManyClassificationsRP,
      }}>
      {children}
    </ClassificationsContext.Provider>
  );
};
