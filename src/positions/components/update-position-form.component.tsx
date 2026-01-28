import { useEffect, useState } from 'react';
import { usePositions } from '../contexts/positions.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { Select } from '../../shared/components/select.component';
import { toast } from 'react-toastify';
import { useNavigate } from '../../shared/contexts/navigate.context';
import { FormFooter } from '../../shared/components/form-footer.component';

type UpdatePositionFormProps = {
  id: string;
};

export const UpdatePositionForm = ({ id }: UpdatePositionFormProps) => {
  const { findOnePosition, updatePosition } = usePositions();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [active, setActive] = useState('');

  useEffect(() => {
    const load = async () => {
      const position = await findOnePosition(id);
      if (!position) {
        return;
      }
      setName(position.name);
      setActive(position.active);
    };

    if (id !== '') {
      load();
    }
  }, [findOnePosition, id]);

  const handleSubmit = async () => {
    if (!name || name === '') {
      toast('campo nome inválido', { type: 'error' });
      return;
    }

    const updated = await updatePosition(id, {
      name,
      active,
    });

    if (updated) {
      navigate('/positions');
    }
  };

  return (
    <>
      <Row>
        <InputText col={10} label='Nome' value={name} setValue={setName} />
        <Select
          col={2}
          label='Ativo'
          value={active}
          setValue={setActive}
          data={[
            { value: 'S', display: 'sim' },
            { value: 'N', display: 'não' },
          ]}
        />
      </Row>
      <hr />
      <FormFooter handleSubmit={handleSubmit} />
    </>
  );
};
