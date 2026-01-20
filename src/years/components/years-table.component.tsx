import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useYears } from '../contexts/years.context';
import { useYearsOrderBy } from '../contexts/years-order-by.context';
import { useNavigate } from 'react-router';

export const YearsTable = () => {
  const navigate = useNavigate();
  const { years, deleteYear, findManyYears } = useYears();
  const {
    yearId,
    record,
    resolution,
    isBlocked,
    changeYearId,
    changeRecord,
    changeResolution,
    changeIsBlocked,
  } = useYearsOrderBy();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 1, value: 'ano', sort: yearId, changeSort: changeYearId },
        { id: 2, value: 'ficha', sort: record, changeSort: changeRecord },
        { id: 3, value: 'resolução', sort: resolution, changeSort: changeResolution },
        { id: 4, value: 'bloqueado', sort: isBlocked, changeSort: changeIsBlocked },
      ]}
      rows={years.map((x) => ({
        id: x.yearId,
        checked: false,
        cols: [
          { id: `${x.yearId}_${x.yearId}`, value: x.yearId.toString() },
          { id: `${x.yearId}_${x.record}`, value: x.record },
          { id: `${x.yearId}_${x.resolution}`, value: x.resolution },
          { id: `${x.yearId}_${x.isBlocked}`, value: x.isBlocked === 'S' ? 'sim' : 'não' },
        ],
      }))}
      createHandle={() => navigate('/years/create')}
      editHandle={() => navigate(`/years/${tableRef.current?.getSelectedRow() ?? ''}`)}
      deleteHandle={async () => {
        const anwser = confirm('deseja remover este ano?');
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? '';
          const deleted = await deleteYear(id);
          if (deleted) {
            await findManyYears();
          }
        }
      }}
    />
  );
};
