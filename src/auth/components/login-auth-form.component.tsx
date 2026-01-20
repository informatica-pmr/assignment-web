import { useState } from 'react';
import { SelectYears } from '../../years/components/select-years.component';
import { useAuth } from '../contexts/auth.context';
import { InputText } from '../../shared/components/input-text.component';
import { InputPassword } from '../../shared/components/input-password.component';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export const LoginAuthForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [yearId, setYearId] = useState(new Date().getFullYear().toString());
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (yearId === '') {
      toast('campo ano obrigatório', { type: 'error' });
      return;
    }
    if (username === '') {
      toast('campo usuário obrigatório', { type: 'error' });
      return;
    }
    if (password === '') {
      toast('campo senha obrigatório', { type: 'error' });
      return;
    }
    if (password.length < 6 || password.length > 12) {
      toast('campo senha deve conter entre 6 e 12 caracteres', { type: 'error' });
      return;
    }

    const success = await login({
      yearId: yearId === '' ? null : Number(yearId),
      username,
      password,
    });
    if (success) {
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-50 mx-auto'>
      <SelectYears col={12} yearId={yearId} setYearId={setYearId} />
      <InputText col={12} label='usuário' value={username} setValue={setUsername} />
      <InputPassword col={12} label='senha' value={password} setValue={setPassword} />
      <hr />
      <button type='submit' className='btn btn-success w-100'>
        Login
      </button>
    </form>
  );
};
