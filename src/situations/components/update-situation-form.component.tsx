import { useEffect, useState } from 'react';
import { useSituations } from '../contexts/situations.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { toast } from 'react-toastify';
import { useNavigate } from '../../shared/contexts/navigate.context';
import { FormFooter } from '../../shared/components/form-footer.component';

type UpdateSituationFormProps = {
  id: string;
};

export const UpdateSituationForm = ({ id }: UpdateSituationFormProps) => {
  const { findOneSituation, updateSituation } = useSituations();
  const navigate = useNavigate();

  const [name, setName] = useState('');

  useEffect(() => {
    const load = async () => {
      const unit = await findOneSituation(id);
      if (!unit) {
        return;
      }
      setName(unit.name);
    };

    if (id !== '') {
      load();
    }
  }, [findOneSituation, id]);

  const handleSubmit = async () => {
    if (!name || name === '') {
      toast('campo nome inválido', { type: 'error' });
      return;
    }

    const updated = await updateSituation(id, {
      name,
    });

    if (updated) {
      navigate('/situations');
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
