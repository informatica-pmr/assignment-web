import { Table } from '../../shared/components/table.component';
import { useUsers } from '../contexts/users.context';

export const UsersTable = () => {
  const { users } = useUsers();

  return (
    <Table
      headers={[
        { id: 1, value: 'login' },
        { id: 2, value: 'nome' },
        { id: 3, value: 'perfil' },
        { id: 4, value: 'ativo' },
      ]}
      rows={users.map((x, index) => ({
        id: index,
        checked: false,
        cols: [
          { id: '1', value: x.username },
          { id: '2', value: x.name },
          { id: '3', value: x.roleDescription },
          { id: '4', value: x.active === 'Y' ? 'Sim' : 'Não' },
        ],
      }))}
    />
  );
};
