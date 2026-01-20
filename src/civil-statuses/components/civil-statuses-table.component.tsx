import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useCivilStatuses } from '../contexts/civil-statuses.context';
import { useCivilStatusesOrderBy } from '../contexts/civil-statuses-order-by.context';
import { useNavigate } from 'react-router';

export const CivilStatusesTable = () => {
  const { civilStatuses, deleteCivilStatus, findManyCivilStatuses } = useCivilStatuses();
  const { name, changeName } = useCivilStatusesOrderBy();
  const navigate = useNavigate();

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
      createHandle={() => navigate('/civil-statuses/create')}
      editHandle={() => navigate(`/civil-statuses/${tableRef.current?.getSelectedRow() ?? ''}`)}
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
