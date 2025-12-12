import type { ReactNode } from "react";
import { CivilStatusesFiltersProvider } from "./providers/civil-statuses-filters.provider";
import { CivilStatusesProvider } from "./providers/civil-statuses.provider";
import { PaginationProvider } from "../shared/providers/pagination.provider";

type CivilStatusesLayoutProps = {
  children: ReactNode;
};

export const CivilStatusesLayout = ({children}: CivilStatusesLayoutProps) => {
  return (
    <PaginationProvider>
      <CivilStatusesFiltersProvider>
      <CivilStatusesProvider>
        {children}
      </CivilStatusesProvider>
    </CivilStatusesFiltersProvider>
    </PaginationProvider>
  )
};