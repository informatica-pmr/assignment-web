import { useEffect, useRef, useState } from 'react';
import { useSubscriptions } from '../contexts/subscriptions.context';
import { usePages } from '../../shared/contexts/pages.context';
import { Row } from '../../shared/components/row';
import { SubscriptionsIndexPage } from '../pages/subscriptions-index.page';
import { useAuth } from '../../auth/contexts/auth.context';
import {
  SubscriptionTitlesForm,
  type SubscriptionTitlesFormElement,
} from './subscription-titles-form.component';
import { SelectPreferences } from '../../preferences/components/select-preferences.component';
import { SelectTeachers } from '../../teachers/components/select-teachers.component';
import { toast } from 'react-toastify';

type UpdateSubscriptionFormProps = {
  id: string;
};

export const UpdateSubscriptionForm = ({ id }: UpdateSubscriptionFormProps) => {
  const { yearId } = useAuth();
  const { findOneSubscription, updateSubscription } = useSubscriptions();
  const { changePage } = usePages();

  const [teacherId, setTeacherId] = useState('');
  const [preferenceId, setPreferenceId] = useState('');

  const subscriptionTitlesRef = useRef<SubscriptionTitlesFormElement>(null);

  useEffect(() => {
    const load = async () => {
      const subscription = await findOneSubscription(id);
      if (!subscription) {
        return;
      }

      setTeacherId(subscription.teacherId.toString());
      setPreferenceId(subscription.preferenceId.toString());

      subscriptionTitlesRef.current?.setTitles(subscription.titles ?? []);
      subscriptionTitlesRef.current?.setPoints(subscription.points ?? []);
    };

    if (id !== '') {
      load();
    }
  }, [findOneSubscription, id]);

  const handleSubmit = async () => {
    const titles = subscriptionTitlesRef.current?.getTitles() || [];

    if (!teacherId || teacherId === '') {
      toast('campo professor inválido', { type: 'error' });
      return;
    }

    if (!preferenceId || preferenceId === '') {
      toast('campo preferência inválido', { type: 'error' });
      return;
    }

    const updated = await updateSubscription(id, {
      yearId,
      teacherId: parseInt(teacherId, 10),
      preferenceId: parseInt(preferenceId, 10),
      titles,
    });

    if (updated) {
      changePage(<SubscriptionsIndexPage />);
    }
  };

  return (
    <>
      <Row>
        <SelectTeachers all col={8} teacherId={teacherId} setTeacherId={setTeacherId} />
        <SelectPreferences
          all
          col={4}
          preferenceId={preferenceId}
          setPreferenceId={setPreferenceId}
        />
      </Row>
      <hr />
      <SubscriptionTitlesForm ref={subscriptionTitlesRef} />
      <hr />
      <Row>
        <div className='col-sm-2'>
          <button
            type='button'
            className='btn btn-primary w-100'
            onClick={() => changePage(<SubscriptionsIndexPage />)}>
            voltar
          </button>
        </div>
        <div className='col-sm-2 ms-auto'>
          <button type='submit' className='btn btn-success w-100' onClick={() => handleSubmit()}>
            salvar
          </button>
        </div>
      </Row>
    </>
  );
};
