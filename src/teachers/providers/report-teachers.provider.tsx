import { useCallback, type ReactNode } from 'react';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyTeachersOutputDTO } from '../dtos/outputs/find-many-teachers.output.dto';
import { useTeachersFilters } from '../contexts/teachers-filters.context';
import type { FindManyTeachersInputDTO } from '../dtos/inputs/find-many-teachers.input.dto';
import { useAuth } from '../../auth/contexts/auth.context';
import { ReportTeachersContext } from '../contexts/report-teachers.context';
import {
  useTeachersOrderBy,
  type TeachersOrderByContextProps,
} from '../contexts/teachers-order-by.context';
import { useNookies } from '../../shared/contexts/nookies.context';

type ReportTeachersProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('teachers');

export const ReportTeachersProvider = ({ children }: ReportTeachersProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const { yearId } = useAuth();
  const filters = useTeachersFilters();
  const orderBy = useTeachersOrderBy();

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findManyTeachers = useCallback(async () => {
    try {
      const { data } = await fetch.get<
        FindManyTeachersOutputDTO[],
        FindManyTeachersInputDTO,
        TeachersOrderByContextProps
      >({
        filters: {
          ...filters,
          yearId: yearId.toString(),
        },
        orderBy,
      });

      return data ?? [];
    } catch (err) {
      fetch.handleError(err);
      return [];
    }
  }, [filters, orderBy, yearId]);
  return (
    <ReportTeachersContext.Provider
      value={{
        findManyTeachers,
      }}>
      {children}
    </ReportTeachersContext.Provider>
  );
};
