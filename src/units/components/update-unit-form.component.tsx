import { useEffect, useState } from 'react';
import { useUnits } from '../contexts/units.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { toast } from 'react-toastify';
import { useNavigate } from '../../shared/contexts/navigate.context';
import { FormFooter } from '../../shared/components/form-footer.component';

type UpdateUnitFormProps = {
  id: string;
};

export const UpdateUnitForm = ({ id }: UpdateUnitFormProps) => {
  const { findOneUnit, updateUnit } = useUnits();
  const navigate = useNavigate();

  const [name, setName] = useState('');

  useEffect(() => {
    const load = async () => {
      const unit = await findOneUnit(id);
      if (!unit) {
        return;
      }
      setName(unit.name);
    };

    if (id !== '') {
      load();
    }
  }, [findOneUnit, id]);

  const handleSubmit = async () => {
    if (!name || name === '') {
      toast('campo nome inválido', { type: 'error' });
      return;
    }

    const updated = await updateUnit(id, {
      name,
    });

    if (updated) {
      navigate('/units');
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
