import type { ReactNode } from 'react';
import { SubscriptionsFiltersProvider } from './providers/subscriptions-filters.provider';
import { SubscriptionsProvider } from './providers/subscriptions.provider';
import { PaginationProvider } from '../shared/providers/pagination.provider';
import { LoadPreferencesProvider } from '../preferences/providers/load-preferences.provider';
import { LoadTeachersProvider } from '../teachers/providers/load-teachers.provider';
import { LoadTitlesProvider } from '../titles/providers/load-titles.provider';
import { SubscriptionsOrderByProvider } from './providers/subscriptions-order-by.provider';

type SubscriptionsLayoutProps = {
  children: ReactNode;
};

export const SubscriptionsLayout = ({ children }: SubscriptionsLayoutProps) => {
  return (
    <PaginationProvider>
      <LoadPreferencesProvider>
        <LoadTeachersProvider>
          <LoadTitlesProvider>
            <SubscriptionsFiltersProvider>
              <SubscriptionsOrderByProvider>
                <SubscriptionsProvider>{children}</SubscriptionsProvider>
              </SubscriptionsOrderByProvider>
            </SubscriptionsFiltersProvider>
          </LoadTitlesProvider>
        </LoadTeachersProvider>
      </LoadPreferencesProvider>
    </PaginationProvider>
  );
};
