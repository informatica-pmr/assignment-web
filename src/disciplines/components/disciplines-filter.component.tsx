import { useEffect } from 'react';
import { InputText } from '../../shared/components/input-text.component';
import { Row } from '../../shared/components/row';
import { useDisciplinesFilters } from '../contexts/disciplines-filters.context';
import { useDisciplines } from '../contexts/disciplines.context';

export const DisciplinesFilter = () => {
  const { name, changeName } = useDisciplinesFilters();
  const { findManyDisciplines } = useDisciplines();

  useEffect(() => {
    findManyDisciplines();
  }, [findManyDisciplines]);

  return (
    <Row>
      <InputText col={12} label='nome' value={name} setValue={changeName} />
    </Row>
  );
};
