import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useDisciplines } from '../contexts/disciplines.context';
import { useDisciplinesOrderBy } from '../contexts/disciplines-order-by.context';
import { useNavigate } from '../../shared/contexts/navigate.context';

export const DisciplinesTable = () => {
  const { disciplines, deleteDiscipline, findManyDisciplines } = useDisciplines();
  const { name, changeName } = useDisciplinesOrderBy();
  const navigate = useNavigate();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[{ id: 1, value: 'Nome', sort: name, changeSort: changeName }]}
      rows={disciplines.map((x) => ({
        id: x.disciplineId,
        checked: false,
        cols: [{ id: `${x.disciplineId}_${x.name}`, value: x.name }],
      }))}
      createHandle={() => navigate('/disciplines/create')}
      editHandle={() => navigate(`/disciplines/${tableRef.current?.getSelectedRow() ?? ''}`)}
      deleteHandle={async () => {
        const anwser = confirm('Deseja remover esta disciplina?');
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? '';
          const deleted = await deleteDiscipline(id);
          if (deleted) {
            await findManyDisciplines();
          }
        }
      }}
    />
  );
};
