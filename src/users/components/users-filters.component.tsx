import { useEffect } from 'react';
import { InputText } from '../../shared/components/input-text.component';
import { Row } from '../../shared/components/row';
import { Select } from '../../shared/components/select.component';
import { useUsersFilters } from '../contexts/users-filters.context';
import { useUsers } from '../contexts/users.context';
import { SelectRoles } from '../../roles/components/select-roles.component';

export const UsersFilters = () => {
  const { findManyUsers } = useUsers();
  const { username, name, active, changeName, changeUsername, changeActive } = useUsersFilters();

  useEffect(() => {
    findManyUsers();
  }, [findManyUsers]);

  return (
    <Row>
      <InputText col={2} label='Login' value={username} setValue={changeUsername} />
      <InputText col={6} label='Nome' value={name} setValue={changeName} />
      <SelectRoles all col={2} roleId={''} setRoleId={() => {}} />
      <Select
        all
        col={2}
        label='Ativo'
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
