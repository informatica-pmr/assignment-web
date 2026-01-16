import { useEffect } from 'react';
import { InputText } from '../../shared/components/input-text.component';
import { Row } from '../../shared/components/row';
import { useUnitsFilters } from '../contexts/units-filters.context';
import { useUnits } from '../contexts/units.context';

export const UnitsFilter = () => {
  const { name, changeName } = useUnitsFilters();
  const { findManyUnits } = useUnits();

  useEffect(() => {
    findManyUnits();
  }, [findManyUnits]);

  return (
    <Row>
      <InputText col={12} label='nome' value={name} setValue={changeName} />
    </Row>
  );
};
