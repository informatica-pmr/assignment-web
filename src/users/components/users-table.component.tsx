import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { usePages } from '../../shared/contexts/pages.context';
import { useUsers } from '../contexts/users.context';
import { UsersCreatePage } from '../pages/users-create.page';
import { UsersUpdatePage } from '../pages/users-update.page';
import { useUsersOrderBy } from '../contexts/users-order-by.context';

export const UsersTable = () => {
  const { changePage } = usePages();
  const { users } = useUsers();
  const { username, name, active, changeName, changeUsername, changeActive } = useUsersOrderBy();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 1, value: 'login', sort: username, changeSort: changeUsername },
        { id: 2, value: 'nome', sort: name, changeSort: changeName },
        {
          id: 3,
          value: 'perfil',
          sort: '',
          changeSort: (value: string) => {
            console.log(value, 'ainda não implementado');
          },
        },
        { id: 4, value: 'ativo', sort: active, changeSort: changeActive },
      ]}
      rows={users.map((x) => ({
        id: x.username,
        checked: false,
        cols: [
          { id: '1', value: x.username },
          { id: '2', value: x.name },
          { id: '3', value: x.roleDescription },
          { id: '4', value: x.active === 'Y' ? 'Sim' : 'Não' },
        ],
      }))}
      createHandle={() => {
        changePage(<UsersCreatePage />);
      }}
      editHandle={() =>
        changePage(<UsersUpdatePage id={tableRef.current?.getSelectedRow() ?? ''} />)
      }
    />
  );
};
