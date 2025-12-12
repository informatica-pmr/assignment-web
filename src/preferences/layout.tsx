import type { ReactNode } from "react";
import { PreferencesFiltersProvider } from "./providers/preferences-filters.provider";
import { PreferencesProvider } from "./providers/preferences.provider";
import { PaginationProvider } from "../shared/providers/pagination.provider";

type PreferencesLayoutProps = {
  children: ReactNode;
};

export const PreferencesLayout = ({children}: PreferencesLayoutProps) => {
  return (
    <PaginationProvider>
      <PreferencesFiltersProvider>
      <PreferencesProvider>
        {children}
      </PreferencesProvider>
    </PreferencesFiltersProvider>
    </PaginationProvider>
  )
};