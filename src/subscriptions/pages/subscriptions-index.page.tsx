import { SubscriptionsFilter } from "../components/subscriptions-filter.component";
import { SubscriptionsTable } from "../components/subscriptions-table.component";
import { SubscriptionsLayout } from "../layout";

export const SubscriptionsIndexPage = () => {
  return (
    <SubscriptionsLayout>
      <h2 className="mt-3 text-center">Cadastro de Inscrições</h2>
      <hr />
      <SubscriptionsFilter />
      <hr />
      <SubscriptionsTable />
    </SubscriptionsLayout>
  );
};