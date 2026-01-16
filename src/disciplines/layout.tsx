import type { ReactNode } from 'react';
import { DisciplinesFiltersProvider } from './providers/disciplines-filters.provider';
import { DisciplinesProvider } from './providers/disciplines.provider';
import { PaginationProvider } from '../shared/providers/pagination.provider';
import { DisciplinesOrderByProvider } from './providers/disciplines-order-by.provider';

type DisciplinesLayoutProps = {
  children: ReactNode;
};

export const DisciplinesLayout = ({ children }: DisciplinesLayoutProps) => {
  return (
    <PaginationProvider>
      <DisciplinesFiltersProvider>
        <DisciplinesOrderByProvider>
          <DisciplinesProvider>{children}</DisciplinesProvider>
        </DisciplinesOrderByProvider>
      </DisciplinesFiltersProvider>
    </PaginationProvider>
  );
};
