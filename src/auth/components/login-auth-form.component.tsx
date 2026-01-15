import { useState } from 'react';
import { SelectYears } from '../../years/components/select-years.component';
import { useAuth } from '../contexts/auth.context';
import { InputText } from '../../shared/components/input-text.component';
import { InputPassword } from '../../shared/components/input-password.component';
import { usePages } from '../../shared/contexts/pages.context';
import { HomePage } from '../../home/pages/home.page';

export const LoginAuthForm = () => {
  const { login } = useAuth();
  const { changePage } = usePages();
  const [yearId, setYearId] = useState('2025');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login({
      yearId: yearId === '' ? null : Number(yearId),
      username,
      password,
    });
    if (success) {
      changePage(<HomePage />);
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
