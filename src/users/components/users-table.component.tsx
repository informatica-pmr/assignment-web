import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useUsers } from '../contexts/users.context';
import { useUsersOrderBy } from '../contexts/users-order-by.context';
import { useNavigate } from '../../shared/contexts/navigate.context';

export const UsersTable = () => {
  const navigate = useNavigate();
  const { users } = useUsers();
  const { username, name, active, changeName, changeUsername, changeActive } = useUsersOrderBy();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 1, value: 'Login', sort: username, changeSort: changeUsername },
        { id: 2, value: 'Nome', sort: name, changeSort: changeName },
        {
          id: 3,
          value: 'Perfil',
          sort: '',
          changeSort: (value: string) => {
            console.log(value, 'ainda não implementado');
          },
        },
        { id: 4, value: 'Ativo', sort: active, changeSort: changeActive },
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
        navigate('/users/create');
      }}
      editHandle={() => navigate(`/users/${tableRef.current?.getSelectedRow() ?? ''}`)}
    />
  );
};
