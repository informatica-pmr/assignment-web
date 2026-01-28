import { useEffect } from 'react';
import { InputText } from '../../shared/components/input-text.component';
import { Row } from '../../shared/components/row';
import { useCivilStatusesFilters } from '../contexts/civil-statuses-filters.context';
import { useCivilStatuses } from '../contexts/civil-statuses.context';

export const CivilStatusesFilter = () => {
  const { name, changeName } = useCivilStatusesFilters();
  const { findManyCivilStatuses } = useCivilStatuses();

  useEffect(() => {
    findManyCivilStatuses();
  }, [findManyCivilStatuses]);

  return (
    <Row>
      <InputText col={12} label='Nome' value={name} setValue={changeName} />
    </Row>
  );
};
