import { useEffect } from 'react';
import { InputText } from '../../shared/components/input-text.component';
import { Row } from '../../shared/components/row';
import { useSituationsFilters } from '../contexts/situations-filters.context';
import { useSituations } from '../contexts/situations.context';

export const SituationsFilter = () => {
  const { name, changeName } = useSituationsFilters();
  const { findManySituations } = useSituations();

  useEffect(() => {
    findManySituations();
  }, [findManySituations]);

  return (
    <Row>
      <InputText col={12} label='Nome' value={name} setValue={changeName} />
    </Row>
  );
};
