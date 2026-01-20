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
import { useNavigate } from 'react-router';

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
      <Row>
        <div className='col-sm-2'>
          <button
            type='button'
            className='btn btn-primary w-100'
            onClick={() => navigate('/subscriptions')}>
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
