import { Route } from 'react-router';
import { ClassificationsIndexPage } from '../pages/classifications-index.page';

export const ClassificationsRoutes = [
  <Route key='classifications-list' path='classifications'>
    <Route index element={<ClassificationsIndexPage />} />
  </Route>,
];
