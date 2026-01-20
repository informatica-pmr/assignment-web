import { Route } from 'react-router';
import { DisciplinesIndexPage } from '../pages/disciplines-index.page';
import { DisciplinesUpdatePage } from '../pages/disciplines-update.page';
import { DisciplinesCreatePage } from '../pages/disciplines-create.page';

export const DisciplinesRoutes = [
  <Route key='disciplines-list' path='disciplines'>
    <Route index element={<DisciplinesIndexPage />} />
    <Route path='create' element={<DisciplinesCreatePage />} />
    <Route path=':id' element={<DisciplinesUpdatePage />} />
  </Route>,
];
