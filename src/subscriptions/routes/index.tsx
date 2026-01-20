import { Route } from 'react-router';
import { SubscriptionsIndexPage } from '../pages/subscriptions-index.page';
import { SubscriptionsUpdatePage } from '../pages/subscriptions-update.page';
import { SubscriptionsCreatePage } from '../pages/subscriptions-create.page';

export const SubscriptionsRoutes = [
  <Route key='subscriptions-list' path='subscriptions'>
    <Route index element={<SubscriptionsIndexPage />} />
    <Route path='create' element={<SubscriptionsCreatePage />} />
    <Route path=':id' element={<SubscriptionsUpdatePage />} />
  </Route>,
];
