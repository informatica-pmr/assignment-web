import { Select } from '../../shared/components/select.component';
import { useLoadRoles } from '../contexts/load-roles.context';

type SelectRolesProps = {
  all?: boolean;
  col: number;
  empty?: boolean;
  disabled?: boolean;
  roleId: string | number;
  setRoleId: (roleId: string) => void;
};

export const SelectRoles = ({
  all = false,
  col,
  empty = false,
  disabled = false,
  roleId,
  setRoleId,
}: SelectRolesProps) => {
  const { roles } = useLoadRoles();

  return (
    <Select
      all={all}
      col={col}
      label='Perfil'
      default={empty}
      disabled={disabled}
      value={roleId as string}
      setValue={setRoleId}
      data={roles.map((r) => ({ value: r.roleId.toString(), display: r.description }))}
    />
  );
};
