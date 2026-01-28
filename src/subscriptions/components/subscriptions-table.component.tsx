import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useSubscriptions } from '../contexts/subscriptions.context';
import { useSubscriptionsOrderBy } from '../contexts/subscriptions-order-by.context';
import { useNavigate } from '../../shared/contexts/navigate.context';

export const SubscriptionsTable = () => {
  const { subscriptions, deleteSubscription, findManySubscriptions } = useSubscriptions();
  const { unit, teacher, preference, changePreference, changeTeacher, changeUnit } =
    useSubscriptionsOrderBy();
  const navigate = useNavigate();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 2, value: 'Professor(a)', sort: teacher, changeSort: changeTeacher },
        { id: 3, value: 'Unidade', sort: unit, changeSort: changeUnit },
        { id: 4, value: 'Preferência', sort: preference, changeSort: changePreference },
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
      createHandle={() => navigate('/subscriptions/create')}
      editHandle={() => navigate(`/subscriptions/${tableRef.current?.getSelectedRow() ?? ''}`)}
      deleteHandle={async () => {
        const anwser = confirm('Deseja remover esta inscrição?');
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
