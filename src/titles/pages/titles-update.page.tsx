import { useParams } from 'react-router';
import { UpdateTitleForm } from '../components/update-title-form.component';
import { TitlesLayout } from '../layout';

export const TitlesUpdatePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <TitlesLayout>
      <h2 className='mt-3 text-center'>Editar Título</h2>
      <hr />
      <UpdateTitleForm id={id ?? ''} />
    </TitlesLayout>
  );
};
