import React, { useEffect } from 'react';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { SelectRoles } from '../../roles/components/select-roles.component';
import { InputEmail } from '../../shared/components/input-email.component';
import { InputPassword } from '../../shared/components/input-password.component';
import { useUsers } from '../contexts/users.context';
import { SelectUnits } from '../../units/components/select-units.component';
import { Select } from '../../shared/components/select.component';
import { toast } from 'react-toastify';
import { useNavigate } from '../../shared/contexts/navigate.context';
import { FormFooter } from '../../shared/components/form-footer.component';

type UpdateUserFormProps = {
  id: string;
};

export const UpdateUserForm: React.FC<UpdateUserFormProps> = ({ id }) => {
  // Component implementation
  const navigate = useNavigate();
  const { updateUser, findOneUser } = useUsers();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState<string | undefined>(undefined);
  const [active, setActive] = React.useState('Y');
  const [roleId, setRoleId] = React.useState('');
  const [unitId, setUnitId] = React.useState('');

  useEffect(() => {
    const fetchData = async () => {
      const user = await findOneUser(id);
      if (user) {
        setName(user.name);
        setEmail(user.email);
        setUsername(user.username);
        setRoleId(user.roleId.toString());
        setUnitId(user.unitId.toString());
      }
    };
    fetchData();
  }, [findOneUser, id]);

  const handleSubmit = async () => {
    // Handle form submission logic
    if (!name || name.length === 0) {
      toast('O nome é obrigatório', { type: 'error' });
      return;
    }
    if (!email || email.length === 0) {
      toast('O email é obrigatório', { type: 'error' });
      return;
    }
    if (!username || username.length < 3) {
      toast('O username deve ter pelo menos 3 caracteres', { type: 'error' });
      return;
    }
    if (!password || password.length < 6) {
      toast('A senha deve ter pelo menos 6 caracteres', { type: 'error' });
      return;
    }
    if (!password || password.length > 12) {
      toast('A senha deve ter no máximo 12 caracteres', { type: 'error' });
      return;
    }
    if (!roleId || roleId.length === 0) {
      toast('O perfil é obrigatório', { type: 'error' });
      return;
    }
    if (!unitId || unitId.length === 0) {
      toast('A unidade é obrigatória', { type: 'error' });
      return;
    }

    const updated = await updateUser(id, {
      name,
      email,
      username: undefined,
      password,
      active,
      roleId: Number(roleId),
      unitId: unitId === '' ? undefined : Number(unitId),
    });
    if (updated) navigate('/users');
  };

  return (
    <>
      <Row>
        <InputText col={4} label='Nome' value={name} setValue={setName} />
        <InputEmail col={4} label='E-mail' value={email} setValue={setEmail} />
        <SelectUnits col={4} unitId={unitId} setUnitId={setUnitId} />
      </Row>
      <Row>
        <SelectRoles empty col={2} roleId={roleId} setRoleId={setRoleId} />
        <Select
          col={2}
          label='Ativo'
          value={active}
          setValue={setActive}
          data={[
            { value: 'Y', display: 'Sim' },
            { value: 'N', display: 'Não' },
          ]}
        />
        <InputText
          col={4}
          disabled
          label='Nome de Usuário'
          value={username}
          setValue={setUsername}
        />
        <InputPassword col={4} label='Senha' value={password ?? ''} setValue={setPassword} />
      </Row>
      <hr />
      <FormFooter handleSubmit={handleSubmit} />
    </>
  );
};
