import { CreateUserForm } from '../components/create-user-form.component';
import { UsersLayout } from '../layout';

export const UsersCreatePage = () => {
  return (
    <UsersLayout>
      <h2 className='mt-3 text-center'>Cadastrar novo Usuário</h2>
      <hr />
      <CreateUserForm />
    </UsersLayout>
  );
};
