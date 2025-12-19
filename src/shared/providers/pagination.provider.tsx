import { useState, useCallback, type ReactNode } from 'react';
import type { Pagination } from '../dtos/outputs/success-response.dto';
import { PaginationContext } from '../contexts/pagination.context';

type PaginationProviderProps = {
  children: ReactNode;
};

export const PaginationProvider = ({ children }: PaginationProviderProps) => {
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    totalPages: 0,
    recordsPerPage: 10,
    totalRecords: 0,
  });
  const page =
    pagination.totalPages > 0 && Number(pagination.page) > pagination.totalPages
      ? `${pagination.totalPages}`
      : `${pagination.page}`;
  const size = pagination.recordsPerPage.toString();

  const from =
    (pagination.page - 1) * pagination.recordsPerPage + Math.min(1, pagination.totalRecords);
  const to = Math.min(pagination.totalRecords, pagination.page * pagination.recordsPerPage);

  const siblingPages = [pagination.page - 1, pagination.page, pagination.page + 1].filter(
    (page) => page > 0 && page <= pagination.totalPages,
  );

  const changePagination = useCallback((pagination?: Pagination) => {
    if (pagination) setPagination(pagination);
  }, []);

  return (
    <PaginationContext.Provider
      value={{
        page,
        size,
        pagination,
        from,
        to,
        siblingPages,
        changePagination,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
