import { useParams } from 'react-router';
import { UpdateSituationForm } from '../components/update-situation-form.component';
import { SituationsLayout } from '../layout';

export const SituationsUpdatePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <SituationsLayout>
      <h2 className='mt-3 text-center'>Editar Situação</h2>
      <hr />
      <UpdateSituationForm id={id ?? ''} />
    </SituationsLayout>
  );
};
