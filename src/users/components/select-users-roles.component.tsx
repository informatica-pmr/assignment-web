import { Select } from '../../shared/components/select.component';
import { useLoadUsersRoles } from '../contexts/load-users-roles.context';

type SelectUsersRolesProps = {
  all?: boolean;
  col: number;
  empty?: boolean;
  disabled?: boolean;
  userRole: string | number;
  setUserRole: (role: string) => void;
};

export const SelectUsersRoles = ({
  all,
  col,
  empty,
  disabled,
  userRole,
  setUserRole,
}: SelectUsersRolesProps) => {
  const { usersRoles } = useLoadUsersRoles();

  return (
    <Select
      all={all}
      col={col}
      label='perfil de usuário'
      default={empty}
      disabled={disabled}
      value={userRole as string}
      setValue={setUserRole}
      data={usersRoles.map((role) => ({ value: role.value, display: role.displayValue }))}
    />
  );
};
