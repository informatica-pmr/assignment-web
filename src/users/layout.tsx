import { PaginationProvider } from '../shared/providers/pagination.provider';
import { LoadUnitsProvider } from '../units/providers/load-units.provider';
import { UsersFiltersProvider } from './providers/users-filters.provider';
import { UsersOrderByProvider } from './providers/users-order-by.provider';
import { UsersProvider } from './providers/users.provider';

export const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PaginationProvider>
      <LoadUnitsProvider>
        <UsersFiltersProvider>
          <UsersOrderByProvider>
            <UsersProvider>{children}</UsersProvider>
          </UsersOrderByProvider>
        </UsersFiltersProvider>
      </LoadUnitsProvider>
    </PaginationProvider>
  );
};
