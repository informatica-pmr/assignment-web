import type { ReactNode } from "react";
import { SubscriptionsFiltersProvider } from "./providers/subscriptions-filters.provider";
import { SubscriptionsProvider } from "./providers/subscriptions.provider";
import { PaginationProvider } from "../shared/providers/pagination.provider";
import { LoadPreferencesProvider } from "../preferences/providers/load-preferences.provider";
import { LoadTeachersProvider } from "../teachers/providers/load-teachers.provider";
import { LoadTitlesProvider } from "../titles/providers/load-titles.provider";

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
              <SubscriptionsProvider>{children}</SubscriptionsProvider>
            </SubscriptionsFiltersProvider>
          </LoadTitlesProvider>
        </LoadTeachersProvider>
      </LoadPreferencesProvider>
    </PaginationProvider>
  );
};
