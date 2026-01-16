import { useEffect, useState } from 'react';
import { useCivilStatuses } from '../contexts/civil-statuses.context';
import { usePages } from '../../shared/contexts/pages.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { CivilStatusesIndexPage } from '../pages/civil-statuses-index.page';
import { toast } from 'react-toastify';

type UpdateCivilStatusFormProps = {
  id: string;
};

export const UpdateCivilStatusForm = ({ id }: UpdateCivilStatusFormProps) => {
  const { findOneCivilStatus, updateCivilStatus } = useCivilStatuses();
  const { changePage } = usePages();

  const [name, setName] = useState('');

  useEffect(() => {
    const load = async () => {
      const unit = await findOneCivilStatus(id);
      if (!unit) {
        return;
      }
      setName(unit.name);
    };

    if (id !== '') {
      load();
    }
  }, [findOneCivilStatus, id]);

  const handleSubmit = async () => {
    if (!name || name === '') {
      toast('campo nome inválido', { type: 'error' });
      return;
    }

    const updated = await updateCivilStatus(id, {
      name,
    });

    if (updated) {
      changePage(<CivilStatusesIndexPage />);
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
            onClick={() => changePage(<CivilStatusesIndexPage />)}>
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
