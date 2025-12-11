import type { ReactNode } from "react";
import { YearsFiltersProvider } from "./providers/years-filters.provider";
import { YearsProvider } from "./providers/years.provider";
import { PaginationProvider } from "../shared/providers/pagination.provider";

type YearsLayoutProps = {
  children: ReactNode;
};

export const YearsLayout = ({children}: YearsLayoutProps) => {
  return (
    <PaginationProvider>
      <YearsFiltersProvider>
      <YearsProvider>
        {children}
      </YearsProvider>
    </YearsFiltersProvider>
    </PaginationProvider>
  )
};