import { Select } from '../../shared/components/select.component';
import { useLoadRoles } from '../contexts/load-roles.context';

type SelectRolesComponentProps = {
  all?: boolean;
  col: number;
  empty?: boolean;
  disabled?: boolean;
  roleId?: string | number;
  setRoleId: (roleId: string) => void;
};

export const SelectRolesComponent = ({
  all = false,
  col,
  empty = false,
  disabled = false,
  roleId,
  setRoleId,
}: SelectRolesComponentProps) => {
  const { roles } = useLoadRoles();

  return (
    <Select
      all={all}
      col={col}
      label='perfil'
      default={empty}
      disabled={disabled}
      value={roleId as string}
      setValue={setRoleId}
      data={roles.map((r) => ({ value: r.roleId.toString(), display: r.description }))}
    />
  );
};
