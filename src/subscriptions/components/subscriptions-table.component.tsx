import { useRef } from "react";
import {
  Table,
  type TableElement,
} from "../../shared/components/table.component";
import { useSubscriptions } from "../contexts/subscriptions.context";
import { usePages } from "../../shared/contexts/pages.context";
import { SubscriptionsCreatePage } from "../pages/subscriptions-create.page";
import { SubscriptionsUpdatePage } from "../pages/subscriptions-update.page";

export const SubscriptionsTable = () => {
  const { subscriptions, deleteSubscription, findManySubscriptions } = useSubscriptions();
  const { changePage } = usePages();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 2, value: "professor(a)" },
        { id: 3, value: "unidade" },
        { id: 4, value: "preferência" },
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
        changePage(
          <SubscriptionsUpdatePage id={tableRef.current?.getSelectedRow() ?? ""} />
        )
      }
      deleteHandle={async () => {
        const anwser = confirm("deseja remover esta inscrição?");
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? "";
          const deleted = await deleteSubscription(id);
          if (deleted) {
            await findManySubscriptions();
          }
        }
      }}
    />
  );
};
