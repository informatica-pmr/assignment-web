import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useSubscriptions } from '../contexts/subscriptions.context';
import { usePages } from '../../shared/contexts/pages.context';
import { SubscriptionsCreatePage } from '../pages/subscriptions-create.page';
import { SubscriptionsUpdatePage } from '../pages/subscriptions-update.page';
import { useSubscriptionsOrderBy } from '../contexts/subscriptions-order-by.context';

export const SubscriptionsTable = () => {
  const { subscriptions, deleteSubscription, findManySubscriptions } = useSubscriptions();
  const { unit, teacher, preference, changePreference, changeTeacher, changeUnit } =
    useSubscriptionsOrderBy();
  const { changePage } = usePages();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 2, value: 'professor(a)', sort: teacher, changeSort: changeTeacher },
        { id: 3, value: 'unidade', sort: unit, changeSort: changeUnit },
        { id: 4, value: 'preferência', sort: preference, changeSort: changePreference },
      ]}
      rows={subscriptions.map((x) => ({
        id: x.subscriptionId,
        checked: false,
        cols: [
          { id: `teacherId_${x.teacherId}`, value: x.teacherName },
          { id: `teacherUnit_${x.teacherUnit}`, value: x.teacherUnit },
          { id: `preferenceId_${x.preferenceId}`, value: x.preferenceName },
        ],
      }))}
      createHandle={() => changePage(<SubscriptionsCreatePage />)}
      editHandle={() =>
        changePage(<SubscriptionsUpdatePage id={tableRef.current?.getSelectedRow() ?? ''} />)
      }
      deleteHandle={async () => {
        const anwser = confirm('deseja remover esta inscrição?');
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? '';
          const deleted = await deleteSubscription(id);
          if (deleted) {
            await findManySubscriptions();
          }
        }
      }}
    />
  );
};
