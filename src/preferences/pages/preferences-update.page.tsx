import { useParams } from 'react-router';
import { UpdatePreferenceForm } from '../components/update-preference-form.component';
import { PreferencesLayout } from '../layout';

export const PreferencesUpdatePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <PreferencesLayout>
      <h2 className='mt-3 text-center'>Editar Preferência</h2>
      <hr />
      <UpdatePreferenceForm id={id ?? ''} />
    </PreferencesLayout>
  );
};
