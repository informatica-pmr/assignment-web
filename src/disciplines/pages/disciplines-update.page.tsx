import { useParams } from 'react-router';
import { UpdateDisciplineForm } from '../components/update-discipline-form.component';
import { DisciplinesLayout } from '../layout';

export const DisciplinesUpdatePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <DisciplinesLayout>
      <h2 className='mt-3 text-center'>Editar Disciplina</h2>
      <hr />
      <UpdateDisciplineForm id={id ?? ''} />
    </DisciplinesLayout>
  );
};
