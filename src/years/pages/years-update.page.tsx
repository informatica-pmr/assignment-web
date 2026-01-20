import { useParams } from 'react-router';
import { UpdateYearForm } from '../components/update-year-form.component';
import { YearsLayout } from '../layout';

export const YearsUpdatePage = () => {
  const { id } = useParams();
  return (
    <YearsLayout>
      <h2 className='mt-3 text-center'>Editar Ano</h2>
      <hr />
      <UpdateYearForm id={id ?? ''} />
    </YearsLayout>
  );
};
