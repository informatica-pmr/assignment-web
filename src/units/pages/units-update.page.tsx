import { useParams } from 'react-router';
import { UpdateUnitForm } from '../components/update-unit-form.component';
import { UnitsLayout } from '../layout';

export const UnitsUpdatePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <UnitsLayout>
      <h2 className='mt-3 text-center'>Editar Unidade</h2>
      <hr />
      <UpdateUnitForm id={id ?? ''} />
    </UnitsLayout>
  );
};
