import { InputText } from '../../shared/components/input-text.component';
import { Row } from '../../shared/components/row';
import { Select } from '../../shared/components/select.component';
import { useUsersFilters } from '../contexts/users-filters.context';
import { SelectUsersRoles } from './select-users-roles.component';

export const UsersFilters = () => {
  const { username, name, role, active, changeName, changeUsername, changeRole, changeActive } =
    useUsersFilters();

  return (
    <Row>
      <InputText col={2} label='login' value={username} setValue={changeUsername} />
      <InputText col={2} label='name' value={name} setValue={changeName} />
      <SelectUsersRoles all col={2} userRole={role} setUserRole={changeRole} />
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
