import type { ReactNode } from "react";
import { UnitsFiltersProvider } from "./providers/units-filters.provider";
import { UnitsProvider } from "./providers/units.provider";
import { PaginationProvider } from "../shared/providers/pagination.provider";

type UnitsLayoutProps = {
  children: ReactNode;
};

export const UnitsLayout = ({children}: UnitsLayoutProps) => {
  return (
    <PaginationProvider>
      <UnitsFiltersProvider>
      <UnitsProvider>
        {children}
      </UnitsProvider>
    </UnitsFiltersProvider>
    </PaginationProvider>
  )
};