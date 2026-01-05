import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useClassifications } from '../contexts/classifications.context';
import { useLoadTitles } from '../../titles/contexts/load-tiltes.context';
import { Formatter } from '../../shared/toolkit/formatter';

const formatter = new Formatter();

export const ClassificationsTable = () => {
  const { classifications } = useClassifications();
  const { titles } = useLoadTitles();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[{ id: 1, value: 'nome' }]
        .concat(titles.map((t, i) => ({ id: i + 2, value: t.alias ?? '' })))
        .concat({ id: titles.length + 1, value: 'total' })}
      rows={classifications.map((x) => ({
        id: x.subscriptionId,
        checked: false,
        cols: [{ id: `name_${x.name}`, value: x.name }]
          .concat(
            titles.map((_, i) => ({
              id: `${_.alias ?? ''}_${
                Object.entries(x)
                  .find((e) => e[0] === `t${i + 1}`)![1]
                  ?.toString() ?? ''
              }`,
              value: formatter.decimal(Object.entries(x).find((e) => e[0] === `t${i + 1}`)![1]!),
            })),
          )
          .concat({ id: `total_${x.total}`, value: formatter.decimal(x.total) }),
      }))}
    />
  );
};
