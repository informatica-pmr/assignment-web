import { useState } from 'react';
import { usePreferences } from '../contexts/preferences.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { toast } from 'react-toastify';
import { useNavigate } from '../../shared/contexts/navigate.context';
import { FormFooter } from '../../shared/components/form-footer.component';

export const CreatePreferenceForm = () => {
  const { createPreference } = usePreferences();
  const navigate = useNavigate();

  const [name, setName] = useState('');

  const handleSubmit = async () => {
    if (!name || name === '') {
      toast('campo nome inválido', { type: 'error' });
      return;
    }

    const created = await createPreference({
      name,
    });

    if (created) {
      navigate('/preferences');
    }
  };

  return (
    <>
      <Row>
        <InputText col={12} label='Nome' value={name} setValue={setName} />
      </Row>
      <hr />
      <FormFooter handleSubmit={handleSubmit} />
    </>
  );
};
