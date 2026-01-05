import type { ReactNode } from 'react';
import { ClassificationsFiltersProvider } from './providers/classifications-filters.provider';
import { ClassificationsProvider } from './providers/classifications.provider';
import { PaginationProvider } from '../shared/providers/pagination.provider';
import { LoadTitlesProvider } from '../titles/providers/load-titles.provider';

type ClassificationsLayoutProps = {
  children: ReactNode;
};

export const ClassificationsLayout = ({ children }: ClassificationsLayoutProps) => {
  return (
    <PaginationProvider>
      <LoadTitlesProvider>
        <ClassificationsFiltersProvider>
          <ClassificationsProvider>{children}</ClassificationsProvider>
        </ClassificationsFiltersProvider>
      </LoadTitlesProvider>
    </PaginationProvider>
  );
};
