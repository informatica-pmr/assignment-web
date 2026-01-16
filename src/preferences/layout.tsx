import type { ReactNode } from 'react';
import { PreferencesFiltersProvider } from './providers/preferences-filters.provider';
import { PreferencesProvider } from './providers/preferences.provider';
import { PaginationProvider } from '../shared/providers/pagination.provider';
import { PreferencesOrderByProvider } from './providers/preferences-order-by.provider';

type PreferencesLayoutProps = {
  children: ReactNode;
};

export const PreferencesLayout = ({ children }: PreferencesLayoutProps) => {
  return (
    <PaginationProvider>
      <PreferencesFiltersProvider>
        <PreferencesOrderByProvider>
          <PreferencesProvider>{children}</PreferencesProvider>
        </PreferencesOrderByProvider>
      </PreferencesFiltersProvider>
    </PaginationProvider>
  );
};
