import { Route } from 'react-router';
import { UsersIndexPage } from '../pages/users-index.page';
import { UsersUpdatePage } from '../pages/users-update.page';
import { UsersCreatePage } from '../pages/users-create.page';

export const UsersRoutes = [
  <Route key='users-list' path='users'>
    <Route index element={<UsersIndexPage />} />
    <Route path='create' element={<UsersCreatePage />} />
    <Route path=':id' element={<UsersUpdatePage />} />
  </Route>,
];
