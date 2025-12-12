import type { ReactNode } from "react";
import { DisciplinesFiltersProvider } from "./providers/disciplines-filters.provider";
import { DisciplinesProvider } from "./providers/disciplines.provider";
import { PaginationProvider } from "../shared/providers/pagination.provider";

type DisciplinesLayoutProps = {
  children: ReactNode;
};

export const DisciplinesLayout = ({children}: DisciplinesLayoutProps) => {
  return (
    <PaginationProvider>
      <DisciplinesFiltersProvider>
      <DisciplinesProvider>
        {children}
      </DisciplinesProvider>
    </DisciplinesFiltersProvider>
    </PaginationProvider>
  )
};