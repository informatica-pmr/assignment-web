import { useParams } from 'react-router';
import { UpdateUserForm } from '../components/update-user-form.component';
import { UsersLayout } from '../layout';

export const UsersUpdatePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <UsersLayout>
      <h2 className='mt-3 text-center'>Atualizar Usuário</h2>
      <hr />
      <UpdateUserForm id={id ?? ''} />
    </UsersLayout>
  );
};
