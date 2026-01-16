import React from 'react';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { SelectRoles } from '../../roles/components/select-roles.component';
import { usePages } from '../../shared/contexts/pages.context';
import { UsersIndexPage } from '../pages/users-index.page';
import { InputEmail } from '../../shared/components/input-email.component';
import { InputPassword } from '../../shared/components/input-password.component';
import { useUsers } from '../contexts/users.context';
import { SelectUnits } from '../../units/components/select-units.component';
import { toast } from 'react-toastify';

export const CreateUserForm: React.FC = () => {
  // Component implementation
  const { changePage } = usePages();
  const { createUser } = useUsers();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [roleId, setRoleId] = React.useState('');
  const [unitId, setUnitId] = React.useState('');

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

    const created = await createUser({
      name,
      email,
      username,
      password,
      active: 'Y',
      roleId: Number(roleId),
      unitId: Number(unitId),
    });
    if (created) changePage(<UsersIndexPage />);
  };

  return (
    <>
      <Row>
        <InputText col={4} label='name' value={name} setValue={setName} />
        <InputEmail col={4} label='email' value={email} setValue={setEmail} />
        <SelectUnits col={4} unitId={unitId} setUnitId={setUnitId} />
      </Row>
      <Row>
        <SelectRoles empty col={4} roleId={roleId} setRoleId={setRoleId} />
        <InputText col={4} label='username' value={username} setValue={setUsername} />
        <InputPassword col={4} label='password' value={password} setValue={setPassword} />
      </Row>
      <hr />
      <Row>
        <div className='col-sm-2'>
          <button
            type='button'
            className='btn btn-primary w-100'
            onClick={() => changePage(<UsersIndexPage />)}>
            voltar
          </button>
        </div>
        <div className='col-sm-2 ms-auto'>
          <button type='submit' className='btn btn-success w-100' onClick={() => handleSubmit()}>
            salvar
          </button>
        </div>
      </Row>
    </>
  );
};
