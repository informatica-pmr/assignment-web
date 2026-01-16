import type { ReactNode } from 'react';
import { YearsFiltersProvider } from './providers/years-filters.provider';
import { YearsProvider } from './providers/years.provider';
import { PaginationProvider } from '../shared/providers/pagination.provider';
import { YearsOrderByProvider } from './providers/years-order-by.provider';

type YearsLayoutProps = {
  children: ReactNode;
};

export const YearsLayout = ({ children }: YearsLayoutProps) => {
  return (
    <PaginationProvider>
      <YearsFiltersProvider>
        <YearsOrderByProvider>
          <YearsProvider>{children}</YearsProvider>
        </YearsOrderByProvider>
      </YearsFiltersProvider>
    </PaginationProvider>
  );
};
