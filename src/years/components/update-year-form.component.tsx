import { useEffect, useState } from 'react';
import { useYears } from '../contexts/years.context';
import { usePages } from '../../shared/contexts/pages.context';
import { YearsIndexPage } from '../pages/years-index.page';
import { Row } from '../../shared/components/row';
import { InputNumber } from '../../shared/components/input-number.component';
import { InputText } from '../../shared/components/input-text.component';
import { Select } from '../../shared/components/select.component';
import { toast } from 'react-toastify';

type UpdateYearFormProps = {
  id: string;
};

export const UpdateYearForm = ({ id }: UpdateYearFormProps) => {
  const { findOneYear, updateYear } = useYears();
  const { changePage } = usePages();

  const [year, setYear] = useState(new Date().getFullYear());
  const [record, setRecord] = useState('');
  const [resolution, setResolution] = useState('');
  const [isBlocked, setIsBlocked] = useState('N');

  useEffect(() => {
    const load = async () => {
      const year = await findOneYear(id);
      if (!year) {
        return;
      }
      setYear(year.yearId);
      setRecord(year.record);
      setResolution(year.resolution);
      setIsBlocked(year.isBlocked);
    };

    if (id !== '') {
      load();
    }
  }, [findOneYear, id]);

  const handleSubmit = async () => {
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

    const updated = await updateYear(id, {
      record,
      resolution,
      isBlocked,
    });

    if (updated) {
      changePage(<YearsIndexPage />);
    }
  };

  return (
    <>
      <Row>
        <InputNumber col={1} label='ano' readonly value={year} setValue={setYear} />
        <InputText col={4} label='ficha' value={record} setValue={setRecord} />
        <InputText col={6} label='resolução' value={resolution} setValue={setResolution} />
        <Select
          col={1}
          label='bloqueado'
          value={isBlocked}
          setValue={setIsBlocked}
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
            onClick={() => changePage(<YearsIndexPage />)}>
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
