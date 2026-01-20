import { useState } from 'react';
import { useAuth } from '../contexts/auth.context';
import { InputText } from '../../shared/components/input-text.component';
import { InputPassword } from '../../shared/components/input-password.component';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export const ResetAuthForm = () => {
  const { userId, reset, logout } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6 || password.length > 12) {
      toast('A senha atual contém entre 6 e 12 caracteres.', { type: 'error' });
      return;
    }
    if (newPassword.length < 6 || newPassword.length > 12) {
      toast('A nova senha contém entre 6 e 12 caracteres.', { type: 'error' });
      return;
    }
    if (newPassword !== newPasswordConfirm) {
      toast('A nova senha não confere.', { type: 'error' });
      return;
    }
    const success = await reset(userId, { password, newPassword });
    if (success) {
      logout();
      navigate('/auth/login');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-50 mx-auto'>
      <InputText col={12} label='usuário' value={userId} disabled />
      <InputPassword col={12} label='senha atual' value={password} setValue={setPassword} />
      <InputPassword col={12} label='nova senha' value={newPassword} setValue={setNewPassword} />
      <InputPassword
        col={12}
        label='repetir nova senha'
        value={newPasswordConfirm}
        setValue={setNewPasswordConfirm}
      />
      <hr />
      <button type='submit' className='btn btn-success w-100'>
        Alterar senha
      </button>
    </form>
  );
};
