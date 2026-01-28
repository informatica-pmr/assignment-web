import { useState } from 'react';
import { useCivilStatuses } from '../contexts/civil-statuses.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { toast } from 'react-toastify';
import { useNavigate } from '../../shared/contexts/navigate.context';
import { FormFooter } from '../../shared/components/form-footer.component';

export const CreateCivilStatusForm = () => {
  const { createCivilStatus } = useCivilStatuses();
  const navigate = useNavigate();

  const [name, setName] = useState('');

  const handleSubmit = async () => {
    if (!name || name === '') {
      toast('campo nome inválido', { type: 'error' });
      return;
    }

    const created = await createCivilStatus({
      name,
    });

    if (created) {
      navigate('/civil-statuses');
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
