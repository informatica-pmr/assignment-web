import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useSituations } from '../contexts/situations.context';
import { usePages } from '../../shared/contexts/pages.context';
import { SituationsCreatePage } from '../pages/situations-create.page';
import { SituationsUpdatePage } from '../pages/situations-update.page';
import { useSituationsOrderBy } from '../contexts/situations-order-by.context';

export const SituationsTable = () => {
  const { situations, deleteSituation, findManySituations } = useSituations();
  const { name, changeName } = useSituationsOrderBy();
  const { changePage } = usePages();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[{ id: 1, value: 'nome', sort: name, changeSort: changeName }]}
      rows={situations.map((x) => ({
        id: x.situationId,
        checked: false,
        cols: [{ id: `${x.situationId}_${x.name}`, value: x.name }],
      }))}
      createHandle={() => changePage(<SituationsCreatePage />)}
      editHandle={() =>
        changePage(<SituationsUpdatePage id={tableRef.current?.getSelectedRow() ?? ''} />)
      }
      deleteHandle={async () => {
        const anwser = confirm('deseja remover esta situação?');
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? '';
          const deleted = await deleteSituation(id);
          if (deleted) {
            await findManySituations();
          }
        }
      }}
    />
  );
};
