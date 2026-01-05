import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useClassifications } from '../contexts/classifications.context';
import { useLoadTitles } from '../../titles/contexts/load-tiltes.context';
import { Formatter } from '../../shared/toolkit/formatter';
import { Report } from '../../shared/toolkit/report';
import { usePagination } from '../../shared/contexts/pagination.context';

const formatter = new Formatter();

export const ClassificationsTable = () => {
  const { classifications, findManyClassifications } = useClassifications();
  const { titles } = useLoadTitles();
  const { changePagination, pagination } = usePagination();

  const tableRef = useRef<TableElement>(null);

  const handleExportClick = () => {
    changePagination({
      page: 1,
      recordsPerPage: pagination?.totalRecords ?? 5,
      totalPages: pagination?.totalPages ?? 1,
      totalRecords: pagination?.totalRecords ?? 0,
    });
    findManyClassifications();
    const filters = ``;
    const fileName = '';
    const fileReference = '2026';
    const report = new Report(classifications, fileName, fileReference, filters);
    report.create();
    report.export();
  };

  return (
    <Table
      ref={tableRef}
      headers={[{ id: 1, value: 'Nome' }]
        .concat(titles.map((t, i) => ({ id: i + 2, value: t.alias ?? '' })))
        .concat({ id: titles.length + 2, value: 'Total' })}
      rows={classifications.map((x) => ({
        id: x.subscriptionId,
        checked: false,
        cols: [{ id: `name_${x.name}`, value: x.name }]
          .concat(
            titles.map((_, i) => {
              const id = `${_.alias ?? ''}_${
                Object.entries(x)
                  .find((e) => e[0] === `t${i + 1}`)![1]
                  ?.toString() ?? ''
              }`;
              const value = formatter.decimal(
                Object.entries(x).find((e) => e[0] === `t${i + 1}`)![1]!,
              );

              return {
                id,
                value,
              };
            }),
          )
          .concat({ id: `total_${x.total}`, value: formatter.decimal(x.total) }),
      }))}
      exportHandle={handleExportClick}
    />
  );
};
