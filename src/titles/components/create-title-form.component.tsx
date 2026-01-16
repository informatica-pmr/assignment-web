import { useState } from 'react';
import { useTitles } from '../contexts/titles.context';
import { usePages } from '../../shared/contexts/pages.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { TitlesIndexPage } from '../pages/titles-index.page';
import { InputNumber } from '../../shared/components/input-number.component';
import { Select } from '../../shared/components/select.component';
import { useAuth } from '../../auth/contexts/auth.context';
import { InputDecimal } from '../../shared/components/input-decimal.component';
import { toast } from 'react-toastify';

export const CreateTitleForm = () => {
  const { yearId } = useAuth();
  const { createTitle } = useTitles();
  const { changePage } = usePages();

  const [description, setDescription] = useState('');
  const [alias, setAlias] = useState('');
  const [weight, setWeight] = useState(0);
  const [max, setMax] = useState(0);
  const [order, setOrder] = useState(0);
  const [active, setActive] = useState('S');

  const handleSubmit = async () => {
    if (!description || description === '') {
      toast('campo descrição inválido', { type: 'error' });
      return;
    }
    if (!alias || alias === '') {
      toast('campo sigla obrigatório', { type: 'error' });
      return;
    }
    if (weight < 0.001 || weight > 100) {
      toast('campo peso deve conter um valor entre 0,001 e 100', { type: 'error' });
      return;
    }
    if (max <= 0 || max > 999999) {
      toast('campo máximo deve conter um valor entre 1 e 999999', { type: 'error' });
      return;
    }
    if (order <= 0 || order > 22) {
      toast('campo ordem deve conter um valor entre 1 e 22', { type: 'error' });
      return;
    }

    const created = await createTitle({
      yearId,
      description,
      alias,
      weight,
      max,
      order,
      type: 'L',
      active,
    });

    if (created) {
      changePage(<TitlesIndexPage />);
    }
  };

  return (
    <>
      <Row>
        <InputText col={10} label='descrição' value={description} setValue={setDescription} />
        <InputText col={2} label='sigla' value={alias} setValue={setAlias} />
      </Row>
      <Row>
        <InputDecimal col={3} label='peso' value={weight} setValue={setWeight} />
        <InputDecimal col={3} label='máximo' value={max} setValue={setMax} />
        <InputNumber col={3} label='ordem' value={order} setValue={setOrder} />
        <Select
          col={3}
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
            onClick={() => changePage(<TitlesIndexPage />)}>
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
