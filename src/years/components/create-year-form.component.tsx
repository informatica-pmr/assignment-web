import { useState } from 'react';
import { useYears } from '../contexts/years.context';
import { Row } from '../../shared/components/row';
import { InputNumber } from '../../shared/components/input-number.component';
import { InputText } from '../../shared/components/input-text.component';
import { Select } from '../../shared/components/select.component';
import { toast } from 'react-toastify';
import { useNavigate } from '../../shared/contexts/navigate.context';
import { FormFooter } from '../../shared/components/form-footer.component';

export const CreateYearForm = () => {
  const { createYear } = useYears();
  const navigate = useNavigate();

  const [year, setYear] = useState(new Date().getFullYear());
  const [record, setRecord] = useState('');
  const [resolution, setResolution] = useState('');
  const [isBlocked, setIsBlocked] = useState('N');

  const handleSubmit = async () => {
    if (year < new Date().getFullYear() || year > new Date().getFullYear() + 1) {
      toast('campo ano inválido', { type: 'error' });
      return;
    }

    if (!record || record === '') {
      toast('campo ficha inválido', { type: 'error' });
      return;
    }

    if (!resolution || resolution === '') {
      toast('campo resolução inválido', { type: 'error' });
      return;
    }

    if (!isBlocked || isBlocked === '') {
      toast('campo bloqueado inválido', { type: 'error' });
      return;
    }

    const created = await createYear({
      yearId: year,
      record,
      resolution,
      isBlocked,
    });

    if (created) {
      navigate('/years');
    }
  };

  return (
    <>
      <Row>
        <InputNumber col={1} label='Ano' value={year} setValue={setYear} />
        <InputText col={4} label='Ficha' value={record} setValue={setRecord} />
        <InputText col={6} label='Resolução' value={resolution} setValue={setResolution} />
        <Select
          col={1}
          label='Bloqueado'
          value={isBlocked}
          setValue={setIsBlocked}
          data={[
            { value: 'S', display: 'Sim' },
            { value: 'N', display: 'Não' },
          ]}
        />
      </Row>
      <hr />
      <FormFooter handleSubmit={handleSubmit} />
    </>
  );
};
