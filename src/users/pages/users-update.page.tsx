import { UpdateUserForm } from '../components/update-user-form.component';
import { UsersLayout } from '../layout';

export const UsersUpdatePage = ({ id }: { id: string }) => {
  return (
    <UsersLayout>
      <h2 className='mt-3 text-center'>Atualizar Usuário</h2>
      <hr />
      <UpdateUserForm id={id} />
    </UsersLayout>
  );
};
