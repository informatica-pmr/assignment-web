import type { ReactNode } from 'react';
import { CivilStatusesFiltersProvider } from './providers/civil-statuses-filters.provider';
import { CivilStatusesProvider } from './providers/civil-statuses.provider';
import { PaginationProvider } from '../shared/providers/pagination.provider';
import { CivilStatusesOrderByProvider } from './providers/civil-statuses-order-by.provider';

type CivilStatusesLayoutProps = {
  children: ReactNode;
};

export const CivilStatusesLayout = ({ children }: CivilStatusesLayoutProps) => {
  return (
    <PaginationProvider>
      <CivilStatusesFiltersProvider>
        <CivilStatusesOrderByProvider>
          <CivilStatusesProvider>{children}</CivilStatusesProvider>
        </CivilStatusesOrderByProvider>
      </CivilStatusesFiltersProvider>
    </PaginationProvider>
  );
};
