import type { ReactNode } from 'react';
import { UnitsFiltersProvider } from './providers/units-filters.provider';
import { UnitsProvider } from './providers/units.provider';
import { PaginationProvider } from '../shared/providers/pagination.provider';
import { UnitsOrderByProvider } from './providers/units-order-by.provider';

type UnitsLayoutProps = {
  children: ReactNode;
};

export const UnitsLayout = ({ children }: UnitsLayoutProps) => {
  return (
    <PaginationProvider>
      <UnitsFiltersProvider>
        <UnitsOrderByProvider>
          <UnitsProvider>{children}</UnitsProvider>
        </UnitsOrderByProvider>
      </UnitsFiltersProvider>
    </PaginationProvider>
  );
};
