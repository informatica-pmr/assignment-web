import { CreateSubscriptionForm } from "../components/create-subscription-form.component";
import { SubscriptionsLayout } from "../layout";

export const SubscriptionsCreatePage = () => {
  return (
    <SubscriptionsLayout>
      <h2 className="mt-3 text-center">Cadastrar nova Inscrição</h2>
      <hr />
      <CreateSubscriptionForm />
    </SubscriptionsLayout>
  );
};