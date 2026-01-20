import { useParams } from 'react-router';
import { UpdateSubscriptionForm } from '../components/update-subscription-form.component';
import { SubscriptionsLayout } from '../layout';

export const SubscriptionsUpdatePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <SubscriptionsLayout>
      <h2 className='mt-3 text-center'>Editar Inscrição</h2>
      <hr />
      <UpdateSubscriptionForm id={id ?? ''} />
    </SubscriptionsLayout>
  );
};
