import { useEffect } from 'react';
import { InputText } from '../../shared/components/input-text.component';
import { Row } from '../../shared/components/row';
import { Select } from '../../shared/components/select.component';
import { useUsersFilters } from '../contexts/users-filters.context';
import { useUsers } from '../contexts/users.context';

export const UsersFilters = () => {
  const { findManyUsers } = useUsers();
  const { username, name, active, changeName, changeUsername, changeActive } = useUsersFilters();

  useEffect(() => {
    findManyUsers();
  }, [findManyUsers]);

  return (
    <Row>
      <InputText col={2} label='login' value={username} setValue={changeUsername} />
      <InputText col={2} label='name' value={name} setValue={changeName} />
      <Select
        all
        col={1}
        label='ativo'
        value={active}
        setValue={changeActive}
        data={[
          { value: 'Y', display: 'Sim' },
          { value: 'N', display: 'Não' },
        ]}
      />
    </Row>
  );
};
