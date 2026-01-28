import { useEffect } from 'react';
import { InputText } from '../../shared/components/input-text.component';
import { Row } from '../../shared/components/row';
import { useTeachersFilters } from '../contexts/teachers-filters.context';
import { useTeachers } from '../contexts/teachers.context';
import { SelectUnits } from '../../units/components/select-units.component';
import { InputDate } from '../../shared/components/input-date.component';
import { InputPhone } from '../../shared/components/input-phone.component';
import { SelectPositions } from '../../positions/components/select-positions.component';
import { SelectSituations } from '../../situations/components/select-situations.component';

export const TeachersFilter = () => {
  const {
    name,
    unitId,
    birthAt,
    cellphone,
    positionId,
    situationId,
    changeName,
    changeUnitId,
    changeBirthAt,
    changeCellphone,
    changePositionId,
    changeSituationId,
  } = useTeachersFilters();
  const { findManyTeachers } = useTeachers();

  useEffect(() => {
    findManyTeachers();
  }, [findManyTeachers]);

  return (
    <Row>
      <InputText col={2} label='Nome' value={name} setValue={changeName} />
      <SelectUnits all col={2} unitId={unitId} setUnitId={changeUnitId} />
      <InputDate col={2} label='Nascimento' value={birthAt} setValue={changeBirthAt} />
      <InputPhone col={2} label='Celular' value={cellphone} setValue={changeCellphone} />
      <SelectPositions all col={2} positionId={positionId} setPositionId={changePositionId} />
      <SelectSituations all col={2} situationId={situationId} setSituationId={changeSituationId} />
    </Row>
  );
};
