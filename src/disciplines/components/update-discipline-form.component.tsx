import { useEffect, useState } from 'react';
import { useDisciplines } from '../contexts/disciplines.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { toast } from 'react-toastify';
import { useNavigate } from '../../shared/contexts/navigate.context';
import { FormFooter } from '../../shared/components/form-footer.component';

type UpdateDisciplineFormProps = {
  id: string;
};

export const UpdateDisciplineForm = ({ id }: UpdateDisciplineFormProps) => {
  const { findOneDiscipline, updateDiscipline } = useDisciplines();
  const navigate = useNavigate();

  const [name, setName] = useState('');

  useEffect(() => {
    const load = async () => {
      const unit = await findOneDiscipline(id);
      if (!unit) {
        return;
      }
      setName(unit.name);
    };

    if (id !== '') {
      load();
    }
  }, [findOneDiscipline, id]);

  const handleSubmit = async () => {
    if (!name || name === '') {
      toast('campo nome inválido', { type: 'error' });
      return;
    }

    const updated = await updateDiscipline(id, {
      name,
    });

    if (updated) {
      navigate('/disciplines');
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
