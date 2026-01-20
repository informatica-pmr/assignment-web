import { useEffect, useState } from 'react';
import { usePositions } from '../contexts/positions.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { Select } from '../../shared/components/select.component';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

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
        <InputText col={10} label='nome' value={name} setValue={setName} />
        <Select
          col={2}
          label='ativo'
          value={active}
          setValue={setActive}
          data={[
            { value: 'S', display: 'sim' },
            { value: 'N', display: 'não' },
          ]}
        />
      </Row>
      <hr />
      <Row>
        <div className='col-sm-2'>
          <button
            type='button'
            className='btn btn-primary w-100'
            onClick={() => navigate('/positions')}>
            voltar
          </button>
        </div>
        <div className='col-sm-2 ms-auto'>
          <button type='submit' className='btn btn-success w-100' onClick={() => handleSubmit()}>
            salvar
          </button>
        </div>
      </Row>
    </>
  );
};
