import { LoginAuthForm } from '../components/login-auth-form.component';
import { AuthLayout } from '../layout';

export const AuthLoginPage = () => {
  return (
    <AuthLayout>
      <h2 className='mt-3 text-center'>Autenticação de usuário</h2>
      <hr />
      <LoginAuthForm />
    </AuthLayout>
  );
};
