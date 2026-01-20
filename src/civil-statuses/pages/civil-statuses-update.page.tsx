import { useParams } from 'react-router';
import { UpdateCivilStatusForm } from '../components/update-civil-status-form.component';
import { CivilStatusesLayout } from '../layout';

export const CivilStatusesUpdatePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <CivilStatusesLayout>
      <h2 className='mt-3 text-center'>Editar Estado civil</h2>
      <hr />
      <UpdateCivilStatusForm id={id ?? ''} />
    </CivilStatusesLayout>
  );
};
