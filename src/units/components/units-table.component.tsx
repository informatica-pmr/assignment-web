import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useUnits } from '../contexts/units.context';
import { useUnitsOrderBy } from '../contexts/units-order-by.context';
import { useNavigate } from 'react-router';

export const UnitsTable = () => {
  const { units, deleteUnit, findManyUnits } = useUnits();
  const { name, changeName } = useUnitsOrderBy();
  const navigate = useNavigate();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[{ id: 1, value: 'nome', sort: name, changeSort: changeName }]}
      rows={units.map((x) => ({
        id: x.unitId,
        checked: false,
        cols: [{ id: `${x.unitId}_${x.name}`, value: x.name }],
      }))}
      createHandle={() => navigate('/units/create')}
      editHandle={() => navigate(`/units/${tableRef.current?.getSelectedRow() ?? ''}`)}
      deleteHandle={async () => {
        const anwser = confirm('deseja remover esta unidade?');
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? '';
          const deleted = await deleteUnit(id);
          if (deleted) {
            await findManyUnits();
          }
        }
      }}
    />
  );
};
