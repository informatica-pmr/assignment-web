import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { usePositions } from '../contexts/positions.context';
import { usePositionsOrderBy } from '../contexts/positions-order-by.context';
import { useNavigate } from '../../shared/contexts/navigate.context';

export const PositionsTable = () => {
  const { positions, deletePosition, findManyPositions } = usePositions();
  const { name, active, changeActive, changeName } = usePositionsOrderBy();
  const navigate = useNavigate();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 1, value: 'Nome', sort: name, changeSort: changeName },
        { id: 2, value: 'Ativo', sort: active, changeSort: changeActive },
      ]}
      rows={positions.map((x) => ({
        id: x.positionId,
        checked: false,
        cols: [
          { id: `${x.positionId}_${x.name}`, value: x.name },
          { id: `${x.positionId}_${x.active}`, value: x.active === 'S' ? 'Sim' : 'Não' },
        ],
      }))}
      createHandle={() => navigate('/positions/create')}
      editHandle={() => navigate(`/positions/${tableRef.current?.getSelectedRow() ?? ''}`)}
      deleteHandle={async () => {
        const anwser = confirm('Deseja remover este cargo?');
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? '';
          const deleted = await deletePosition(id);
          if (deleted) {
            await findManyPositions();
          }
        }
      }}
    />
  );
};
