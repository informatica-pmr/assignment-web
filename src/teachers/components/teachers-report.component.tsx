import { useEffect, useState } from 'react';
import { Row } from '../../shared/components/row';
import { Select } from '../../shared/components/select.component';
import { SelectUnits } from '../../units/components/select-units.component';
import { useReportTeachers } from '../contexts/report-teachers.context';
import { useTeachersFilters } from '../contexts/teachers-filters.context';
import { useTeachersOrderBy } from '../contexts/teachers-order-by.context';
import { useAuth } from '../../auth/contexts/auth.context';
import { ReportTeachers } from '../../shared/toolkit/report-teatchers';
import { useLoadUnits } from '../../units/contexts/load-units.context';

export const TeachersReport = () => {
  const { yearId } = useAuth();
  const { units } = useLoadUnits();
  const { teachers, findManyTeachers } = useReportTeachers();
  const { unitId, changeUnitId } = useTeachersFilters();
  const { changeUnit, changeName } = useTeachersOrderBy();

  const [sort, setSort] = useState<string>('');

  const handleExportClick = () => {
    const filters = ``;
    const unit =
      unitId !== 'all'
        ? units.find((u) => u.unitId === Number(unitId))!.name.toUpperCase()
        : 'GERAL';
    const orderBy =
      sort === 'unit'
        ? 'ORDENADO POR UNIDADE'
        : sort === 'teacher'
          ? 'ORDENADO POR PROFESSOR'
          : 'SEM ORDENAÇÃO';
    const fileName = `${unit} - ${orderBy}`;
    const fileReference = `${yearId}`;
    const report = new ReportTeachers(teachers, fileName, fileReference, filters);
    report.create();
    report.export();
  };

  useEffect(() => {
    findManyTeachers();
  }, [findManyTeachers]);

  return (
    <>
      <Row>
        <SelectUnits all col={6} unitId={unitId} setUnitId={changeUnitId} />
        <Select
          all
          col={6}
          label='ordenar por'
          value={sort}
          setValue={(value) => {
            setSort(value);
            if (value === 'unit') {
              changeUnit('a');
              changeName('');
            } else if (value === 'teacher') {
              changeName('a');
              changeUnit('');
            } else {
              changeName('');
              changeUnit('');
            }
          }}
          data={[
            { value: 'unit', display: 'unidade' },
            { value: 'teacher', display: 'professor' },
          ]}
        />
      </Row>
      <hr />
      <div className='d-flex col-sm-12 gap-2 justify-content-center'>
        <button type='button' className='btn btn-primary' onClick={handleExportClick}>
          Gerar Relatório
        </button>
      </div>
    </>
  );
};
