import type { ReactNode } from "react";
import { PositionsFiltersProvider } from "./providers/positions-filters.provider";
import { PositionsProvider } from "./providers/positions.provider";
import { PaginationProvider } from "../shared/providers/pagination.provider";

type PositionsLayoutProps = {
  children: ReactNode;
};

export const PositionsLayout = ({children}: PositionsLayoutProps) => {
  return (
    <PaginationProvider>
      <PositionsFiltersProvider>
      <PositionsProvider>
        {children}
      </PositionsProvider>
    </PositionsFiltersProvider>
    </PaginationProvider>
  )
};