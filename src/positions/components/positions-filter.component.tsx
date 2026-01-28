import { useEffect } from 'react';
import { InputText } from '../../shared/components/input-text.component';
import { Row } from '../../shared/components/row';
import { usePositionsFilters } from '../contexts/positions-filters.context';
import { usePositions } from '../contexts/positions.context';
import { Select } from '../../shared/components/select.component';

export const PositionsFilter = () => {
  const { name, active, changeName, changeActive } = usePositionsFilters();
  const { findManyPositions } = usePositions();

  useEffect(() => {
    findManyPositions();
  }, [findManyPositions]);

  return (
    <Row>
      <InputText col={10} label='Nome' value={name} setValue={changeName} />
      <Select
        col={2}
        all
        label='Ativo'
        value={active}
        setValue={changeActive}
        data={[
          { value: 'S', display: 'sim' },
          { value: 'N', display: 'não' },
        ]}
      />
    </Row>
  );
};
