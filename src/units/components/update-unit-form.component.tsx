import { useEffect, useState } from 'react';
import { useUnits } from '../contexts/units.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

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
        <InputText col={12} label='nome' value={name} setValue={setName} />
      </Row>
      <hr />
      <Row>
        <div className='col-sm-2'>
          <button
            type='button'
            className='btn btn-primary w-100'
            onClick={() => navigate('/units')}>
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
