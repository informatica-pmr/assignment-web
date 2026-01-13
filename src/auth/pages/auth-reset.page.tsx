import { ResetAuthForm } from '../components/reset-auth-form.component';
import { AuthLayout } from '../layout';

export const AuthResetPage = () => {
  return (
    <AuthLayout>
      <h2 className='mt-3 text-center'>Atualizar senha</h2>
      <hr />
      <ResetAuthForm />
    </AuthLayout>
  );
};
