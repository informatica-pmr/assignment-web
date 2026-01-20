import { useParams } from 'react-router';
import { UpdatePositionForm } from '../components/update-position-form.component';
import { PositionsLayout } from '../layout';

export const PositionsUpdatePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <PositionsLayout>
      <h2 className='mt-3 text-center'>Editar Cargo</h2>
      <hr />
      <UpdatePositionForm id={id ?? ''} />
    </PositionsLayout>
  );
};
