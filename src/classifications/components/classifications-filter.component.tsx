import { useEffect } from 'react';
import { InputText } from '../../shared/components/input-text.component';
import { Row } from '../../shared/components/row';
import { useClassificationsFilters } from '../contexts/classifications-filters.context';
import { useClassifications } from '../contexts/classifications.context';

export const ClassificationsFilter = () => {
  const { name, changeName } = useClassificationsFilters();
  const { findManyClassifications } = useClassifications();

  useEffect(() => {
    findManyClassifications();
  }, [findManyClassifications]);

  return (
    <Row>
      <InputText col={12} label='nome' value={name} setValue={changeName} />
    </Row>
  );
};
