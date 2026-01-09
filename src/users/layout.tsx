import { LoadRolesProvider } from '../roles/providers/load-roles.provider';
import { PaginationProvider } from '../shared/providers/pagination.provider';
import { LoadUnitsProvider } from '../units/providers/load-units.provider';
import { UsersFiltersProvider } from './providers/users-filters.provider';
import { UsersOrderByProvider } from './providers/users-order-by.provider';
import { UsersProvider } from './providers/users.provider';

export const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PaginationProvider>
      <LoadRolesProvider>
        <LoadUnitsProvider>
          <UsersFiltersProvider>
            <UsersOrderByProvider>
              <UsersProvider>{children}</UsersProvider>
            </UsersOrderByProvider>
          </UsersFiltersProvider>
        </LoadUnitsProvider>
      </LoadRolesProvider>
    </PaginationProvider>
  );
};
