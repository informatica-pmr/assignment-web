import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useSituations } from '../contexts/situations.context';
import { useSituationsOrderBy } from '../contexts/situations-order-by.context';
import { useNavigate } from '../../shared/contexts/navigate.context';

export const SituationsTable = () => {
  const { situations, deleteSituation, findManySituations } = useSituations();
  const { name, changeName } = useSituationsOrderBy();
  const navigate = useNavigate();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[{ id: 1, value: 'Nome', sort: name, changeSort: changeName }]}
      rows={situations.map((x) => ({
        id: x.situationId,
        checked: false,
        cols: [{ id: `${x.situationId}_${x.name}`, value: x.name }],
      }))}
      createHandle={() => navigate('/situations/create')}
      editHandle={() => navigate(`/situations/${tableRef.current?.getSelectedRow() ?? ''}`)}
      deleteHandle={async () => {
        const anwser = confirm('Deseja remover esta situação?');
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
