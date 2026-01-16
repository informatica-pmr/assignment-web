import type { ReactNode } from 'react';
import { PositionsFiltersProvider } from './providers/positions-filters.provider';
import { PositionsProvider } from './providers/positions.provider';
import { PaginationProvider } from '../shared/providers/pagination.provider';
import { PositionsOrderByProvider } from './providers/positions-order-by.provider';

type PositionsLayoutProps = {
  children: ReactNode;
};

export const PositionsLayout = ({ children }: PositionsLayoutProps) => {
  return (
    <PaginationProvider>
      <PositionsFiltersProvider>
        <PositionsOrderByProvider>
          <PositionsProvider>{children}</PositionsProvider>
        </PositionsOrderByProvider>
      </PositionsFiltersProvider>
    </PaginationProvider>
  );
};
