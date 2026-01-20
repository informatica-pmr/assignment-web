import { useParams } from 'react-router';
import { UpdateTeacherForm } from '../components/update-teacher-form.component';
import { TeachersLayout } from '../layout';

export const TeachersUpdatePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <TeachersLayout>
      <h2 className='mt-3 text-center'>Editar Professor(a)</h2>
      <hr />
      <UpdateTeacherForm id={id ?? ''} />
    </TeachersLayout>
  );
};
