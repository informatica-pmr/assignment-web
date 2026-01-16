import { useState } from 'react';
import { useSituations } from '../contexts/situations.context';
import { usePages } from '../../shared/contexts/pages.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { SituationsIndexPage } from '../pages/situations-index.page';
import { toast } from 'react-toastify';

export const CreateSituationForm = () => {
  const { createSituation } = useSituations();
  const { changePage } = usePages();

  const [name, setName] = useState('');

  const handleSubmit = async () => {
    if (!name || name === '') {
      toast('campo nome inválido', { type: 'error' });
      return;
    }

    const created = await createSituation({
      name,
    });

    if (created) {
      changePage(<SituationsIndexPage />);
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
            onClick={() => changePage(<SituationsIndexPage />)}>
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
