import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useDisciplines } from '../contexts/disciplines.context';
import { usePages } from '../../shared/contexts/pages.context';
import { DisciplinesCreatePage } from '../pages/disciplines-create.page';
import { DisciplinesUpdatePage } from '../pages/disciplines-update.page';
import { useDisciplinesOrderBy } from '../contexts/disciplines-order-by.context';

export const DisciplinesTable = () => {
  const { disciplines, deleteDiscipline, findManyDisciplines } = useDisciplines();
  const { name, changeName } = useDisciplinesOrderBy();
  const { changePage } = usePages();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[{ id: 1, value: 'nome', sort: name, changeSort: changeName }]}
      rows={disciplines.map((x) => ({
        id: x.disciplineId,
        checked: false,
        cols: [{ id: `${x.disciplineId}_${x.name}`, value: x.name }],
      }))}
      createHandle={() => changePage(<DisciplinesCreatePage />)}
      editHandle={() =>
        changePage(<DisciplinesUpdatePage id={tableRef.current?.getSelectedRow() ?? ''} />)
      }
      deleteHandle={async () => {
        const anwser = confirm('deseja remover esta disciplina?');
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
