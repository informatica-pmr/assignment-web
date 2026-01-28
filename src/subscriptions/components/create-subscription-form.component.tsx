import { useRef, useState } from 'react';
import { useSubscriptions } from '../contexts/subscriptions.context';
import { Row } from '../../shared/components/row';
import { useAuth } from '../../auth/contexts/auth.context';
import { SelectPreferences } from '../../preferences/components/select-preferences.component';
import { SelectTeachers } from '../../teachers/components/select-teachers.component';
import {
  SubscriptionTitlesForm,
  type SubscriptionTitlesFormElement,
} from './subscription-titles-form.component';
import { toast } from 'react-toastify';
import { useNavigate } from '../../shared/contexts/navigate.context';
import { FormFooter } from '../../shared/components/form-footer.component';

export const CreateSubscriptionForm = () => {
  const { yearId } = useAuth();
  const { createSubscription } = useSubscriptions();
  const navigate = useNavigate();

  const [teacherId, setTeacherId] = useState('');
  const [preferenceId, setPreferenceId] = useState('');

  const subscriptionTitlesRef = useRef<SubscriptionTitlesFormElement>(null);

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

    const created = await createSubscription({
      yearId,
      teacherId: parseInt(teacherId, 10),
      preferenceId: parseInt(preferenceId, 10),
      titles,
    });

    if (created) {
      navigate('/subscriptions');
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
      <FormFooter handleSubmit={handleSubmit} />
    </>
  );
};
