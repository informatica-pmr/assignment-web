import { useState } from 'react';
import { usePositions } from '../contexts/positions.context';
import { usePages } from '../../shared/contexts/pages.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { PositionsIndexPage } from '../pages/positions-index.page';
import { Select } from '../../shared/components/select.component';
import { toast } from 'react-toastify';

export const CreatePositionForm = () => {
  const { createPosition } = usePositions();
  const { changePage } = usePages();

  const [name, setName] = useState('');
  const [active, setActive] = useState('');

  const handleSubmit = async () => {
    if (!name || name === '') {
      toast('campo nome inválido', { type: 'error' });
      return;
    }

    const created = await createPosition({
      name,
      active,
    });

    if (created) {
      changePage(<PositionsIndexPage />);
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
            onClick={() => changePage(<PositionsIndexPage />)}>
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
