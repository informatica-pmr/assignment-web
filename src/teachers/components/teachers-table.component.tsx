import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useTeachers } from '../contexts/teachers.context';
import { useLoadUnits } from '../../units/contexts/load-units.context';
import { Formatter } from '../../shared/toolkit/formatter';
import { useLoadPositions } from '../../positions/contexts/load-positions.context';
import { useLoadSituations } from '../../situations/contexts/load-situations.context';
import { useAuth } from '../../auth/contexts/auth.context';
import { useTeachersOrderBy } from '../contexts/teachers-order-by.context';
import { useNavigate } from '../../shared/contexts/navigate.context';
import { toast } from 'react-toastify';
import { useImports } from '../../imports/contexts/imports.context';

const formatter = new Formatter();

export const TeachersTable = () => {
  const { yearId } = useAuth();
  const { teachers, deleteTeacher, importTeachers, findManyTeachers } = useTeachers();
  const { isImported } = useImports();
  const {
    name,
    unit,
    birthAt,
    cellphone,
    position,
    situation,
    changeName,
    changeUnit,
    changeBirthAt,
    changeCellphone,
    changePosition,
    changeSituation,
  } = useTeachersOrderBy();
  const navigate = useNavigate();
  const { units } = useLoadUnits();
  const { positions } = useLoadPositions();
  const { situations } = useLoadSituations();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 1, value: 'Nome', sort: name, changeSort: changeName },
        { id: 2, value: 'Unidade', sort: unit, changeSort: changeUnit },
        { id: 3, value: 'Nascimento', sort: birthAt, changeSort: changeBirthAt },
        { id: 4, value: 'Celular', sort: cellphone, changeSort: changeCellphone },
        { id: 5, value: 'Cargo', sort: position, changeSort: changePosition },
        { id: 6, value: 'Situação', sort: situation, changeSort: changeSituation },
      ]}
      rows={teachers.map((x) => ({
        id: x.teacherId,
        checked: false,
        cols: [
          { id: `name_${x.name}`, value: x.name ?? '' },
          {
            id: `unit_${x.unitId}`,
            value: units.find((u) => u.unitId === x.unitId)?.name ?? '',
          },
          {
            id: `birthAt_${x.birthAt}`,
            value: formatter.date(x.birthAt ?? ''),
          },
          {
            id: `cellphone_${x.cellphone}`,
            value: formatter.phoneNumber(x.cellphone ?? ''),
          },
          {
            id: `position_${x.positionId}`,
            value: positions.find((p) => p.positionId === x.positionId)?.name ?? '',
          },
          {
            id: `situation_${x.situationId}`,
            value: situations.find((s) => s.situationId === x.situationId)?.name ?? '',
          },
        ],
      }))}
      createHandle={() => navigate('/teachers/create')}
      editHandle={() => navigate(`/teachers/${tableRef.current?.getSelectedRow() ?? ''}`)}
      deleteHandle={async () => {
        const anwser = confirm('Deseja remover este(a) professor(a)?');
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? '';
          const deleted = await deleteTeacher(id);
          if (deleted) {
            await findManyTeachers();
          }
        }
      }}
      importHandle={async () => {
        const anwser = confirm('Deseja importar os professores do ano anterior?');
        if (anwser) {
          const isTeachersImported = await isImported('teachers');
          if (isTeachersImported) {
            toast('Professores(as) do ano anterior já importados', { type: 'info' });
            return;
          }
          const imported = await importTeachers({ yearId });
          if (imported) {
            await findManyTeachers();
          }
        }
      }}
    />
  );
};
