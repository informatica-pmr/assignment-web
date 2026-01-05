import type { ReactNode } from 'react';
import { ClassificationsFiltersProvider } from './providers/classifications-filters.provider';
import { ClassificationsProvider } from './providers/classifications.provider';
import { PaginationProvider } from '../shared/providers/pagination.provider';
import { LoadTitlesProvider } from '../titles/providers/load-titles.provider';
import { LoadPositionsProvider } from '../positions/providers/load-positions.provider';
import { LoadSituationsProvider } from '../situations/providers/load-situations.provider';
import { LoadUnitsProvider } from '../units/providers/load-units.provider';

type ClassificationsLayoutProps = {
  children: ReactNode;
};

export const ClassificationsLayout = ({ children }: ClassificationsLayoutProps) => {
  return (
    <PaginationProvider>
      <LoadPositionsProvider>
        <LoadSituationsProvider>
          <LoadUnitsProvider>
            <LoadTitlesProvider>
              <ClassificationsFiltersProvider>
                <ClassificationsProvider>{children}</ClassificationsProvider>
              </ClassificationsFiltersProvider>
            </LoadTitlesProvider>
          </LoadUnitsProvider>
        </LoadSituationsProvider>
      </LoadPositionsProvider>
    </PaginationProvider>
  );
};
