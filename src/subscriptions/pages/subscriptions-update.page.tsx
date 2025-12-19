import { UpdateSubscriptionForm } from "../components/update-subscription-form.component";
import { SubscriptionsLayout } from "../layout";

type SubscriptionsUpdatePageProps = {
  id: string;
};

export const SubscriptionsUpdatePage = ({id}: SubscriptionsUpdatePageProps) => {
  return (
    <SubscriptionsLayout>
      <h2 className="mt-3 text-center">Editar Inscrição</h2>
      <hr />
      <UpdateSubscriptionForm id={id} />
    </SubscriptionsLayout>
  );
};