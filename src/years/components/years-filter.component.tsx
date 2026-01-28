import { useEffect } from 'react';
import { InputText } from '../../shared/components/input-text.component';
import { Row } from '../../shared/components/row';
import { Select } from '../../shared/components/select.component';
import { useYearsFilters } from '../contexts/years-filters.context';
import { useYears } from '../contexts/years.context';

export const YearsFilter = () => {
  const {
    yearId,
    record,
    resolution,
    isBlocked,
    changeYearId,
    changeRecord,
    changeResolution,
    changeIsBlocked,
  } = useYearsFilters();
  const { findManyYears } = useYears();

  useEffect(() => {
    findManyYears();
  }, [findManyYears]);

  return (
    <Row>
      <InputText col={3} label='Ano' value={yearId} setValue={changeYearId} />
      <InputText col={3} label='Ficha' value={record} setValue={changeRecord} />
      <InputText col={3} label='Resolução' value={resolution} setValue={changeResolution} />
      <Select
        col={3}
        all
        label='Bloqueado'
        value={isBlocked}
        setValue={changeIsBlocked}
        data={[
          { value: 'S', display: 'Sim' },
          { value: 'N', display: 'Não' },
        ]}
      />
    </Row>
  );
};
