import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { usePages } from '../../shared/contexts/pages.context';
import { useUsers } from '../contexts/users.context';
import { UsersCreatePage } from '../pages/users-create.page';
import { UsersUpdatePage } from '../pages/users-update.page';

export const UsersTable = () => {
  const { changePage } = usePages();
  const { users } = useUsers();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 1, value: 'login' },
        { id: 2, value: 'nome' },
        { id: 3, value: 'perfil' },
        { id: 4, value: 'ativo' },
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
