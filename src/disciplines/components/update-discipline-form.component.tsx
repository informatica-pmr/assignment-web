import { useEffect, useState } from 'react';
import { useDisciplines } from '../contexts/disciplines.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

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
        <InputText col={12} label='nome' value={name} setValue={setName} />
      </Row>
      <hr />
      <Row>
        <div className='col-sm-2'>
          <button
            type='button'
            className='btn btn-primary w-100'
            onClick={() => navigate('/disciplines')}>
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
