import { Table } from '../../shared/components/table.component';
import { useUsers } from '../contexts/users.context';

export const UsersTable = () => {
  const { users } = useUsers();

  return (
    <Table
      headers={[
        { id: 1, value: 'login' },
        { id: 2, value: 'nome' },
      ]}
      rows={users.map((x, index) => ({
        id: index,
        checked: false,
        cols: [
          { id: '1', value: x.username },
          { id: '2', value: x.name },
        ],
      }))}
    />
  );
};
