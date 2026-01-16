import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useCivilStatuses } from '../contexts/civil-statuses.context';
import { usePages } from '../../shared/contexts/pages.context';
import { CivilStatusesCreatePage } from '../pages/civil-statuses-create.page';
import { CivilStatusesUpdatePage } from '../pages/civil-statuses-update.page';
import { useCivilStatusesOrderBy } from '../contexts/civil-statuses-order-by.context';

export const CivilStatusesTable = () => {
  const { civilStatuses, deleteCivilStatus, findManyCivilStatuses } = useCivilStatuses();
  const { name, changeName } = useCivilStatusesOrderBy();
  const { changePage } = usePages();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[{ id: 1, value: 'nome', sort: name, changeSort: changeName }]}
      rows={civilStatuses.map((x) => ({
        id: x.civilStatusId,
        checked: false,
        cols: [{ id: `${x.civilStatusId}_${x.name}`, value: x.name }],
      }))}
      createHandle={() => changePage(<CivilStatusesCreatePage />)}
      editHandle={() =>
        changePage(<CivilStatusesUpdatePage id={tableRef.current?.getSelectedRow() ?? ''} />)
      }
      deleteHandle={async () => {
        const anwser = confirm('deseja remover este estado civil?');
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? '';
          const deleted = await deleteCivilStatus(id);
          if (deleted) {
            await findManyCivilStatuses();
          }
        }
      }}
    />
  );
};
