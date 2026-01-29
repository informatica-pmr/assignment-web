import type { ReactNode } from 'react';
import { TitlesFiltersProvider } from './providers/titles-filters.provider';
import { TitlesProvider } from './providers/titles.provider';
import { PaginationProvider } from '../shared/providers/pagination.provider';
import { TitlesOrderByProvider } from './providers/titles-order-by.provider';
import { ImportsProvider } from '../imports/providers/imports.provider';

type TitlesLayoutProps = {
  children: ReactNode;
};

export const TitlesLayout = ({ children }: TitlesLayoutProps) => {
  return (
    <PaginationProvider>
      <ImportsProvider>
        <TitlesFiltersProvider>
          <TitlesOrderByProvider>
            <TitlesProvider>{children}</TitlesProvider>
          </TitlesOrderByProvider>
        </TitlesFiltersProvider>
      </ImportsProvider>
    </PaginationProvider>
  );
};
