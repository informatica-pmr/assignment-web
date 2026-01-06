import { UsersFilters } from '../components/users-filters.component';
import { UsersTable } from '../components/users-table.component';
import { UsersLayout } from '../layout';

export const UsersIndexPage = () => {
  return (
    <UsersLayout>
      <h2 className='mt-3 text-center'>Cadastro de Usuários</h2>
      <hr />
      <UsersFilters />
      <hr />
      <UsersTable />
    </UsersLayout>
  );
};
