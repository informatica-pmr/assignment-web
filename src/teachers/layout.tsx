import type { ReactNode } from "react";
import { TeachersFiltersProvider } from "./providers/teachers-filters.provider";
import { TeachersProvider } from "./providers/teachers.provider";
import { PaginationProvider } from "../shared/providers/pagination.provider";
import { LoadUnitsProvider } from "../units/providers/load-units.provider";
import { LoadCivilStatusesProvider } from "../civil-statuses/providers/load-civil-statuses.provider";
import { LoadSituationsProvider } from "../situations/providers/load-situations.provider";
import { LoadPreferencesProvider } from "../preferences/providers/load-preferences.provider";
import { LoadPositionsProvider } from "../positions/providers/load-positions.provider";
import { LoadDisciplinesProvider } from "../disciplines/providers/load-disciplines.provider";

type TeachersLayoutProps = {
  children: ReactNode;
};

export const TeachersLayout = ({ children }: TeachersLayoutProps) => {
  return (
    <PaginationProvider>
      <LoadUnitsProvider>
        <LoadCivilStatusesProvider>
          <LoadSituationsProvider>
            <LoadPreferencesProvider>
              <LoadPositionsProvider>
                <LoadDisciplinesProvider>
                  <TeachersFiltersProvider>
                    <TeachersProvider>{children}</TeachersProvider>
                  </TeachersFiltersProvider>
                </LoadDisciplinesProvider>
              </LoadPositionsProvider>
            </LoadPreferencesProvider>
          </LoadSituationsProvider>
        </LoadCivilStatusesProvider>
      </LoadUnitsProvider>
    </PaginationProvider>
  );
};
