import type { ReactNode } from "react";
import { SituationsFiltersProvider } from "./providers/situations-filters.provider";
import { SituationsProvider } from "./providers/situations.provider";
import { PaginationProvider } from "../shared/providers/pagination.provider";

type SituationsLayoutProps = {
  children: ReactNode;
};

export const SituationsLayout = ({children}: SituationsLayoutProps) => {
  return (
    <PaginationProvider>
      <SituationsFiltersProvider>
      <SituationsProvider>
        {children}
      </SituationsProvider>
    </SituationsFiltersProvider>
    </PaginationProvider>
  )
};