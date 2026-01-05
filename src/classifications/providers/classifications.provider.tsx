import { useCallback, useState, type ReactNode } from 'react';
import { ClassificationsContext } from '../contexts/classifications.context';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyClassificationsOutputDTO } from '../dtos/outputs/find-many-classifications.output.dto';
import { useClassificationsFilters } from '../contexts/classifications-filters.context';
import { usePagination } from '../../shared/contexts/pagination.context';
import type { FindManyClassificationsInputDTO } from '../dtos/inputs/find-many-classifications.input.dto';

type ClassificationsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('classifications');

export const ClassificationsProvider = ({ children }: ClassificationsProviderProps) => {
  const { page, size, changePagination } = usePagination();
  const filters = useClassificationsFilters();
  const [classifications, setClassifications] = useState<FindManyClassificationsOutputDTO[]>([]);

  const findManyClassifications = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<
        FindManyClassificationsOutputDTO[],
        FindManyClassificationsInputDTO
      >({
        filters: {
          ...filters,
          page,
          size,
        },
      });

      setClassifications(data ?? []);
      changePagination(pagination);
    } catch (err) {
      console.error(err);
    }
  }, [filters, page, size, changePagination]);

  return (
    <ClassificationsContext.Provider
      value={{
        classifications,
        findManyClassifications,
      }}>
      {children}
    </ClassificationsContext.Provider>
  );
};
