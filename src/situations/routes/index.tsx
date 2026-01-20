import { Route } from 'react-router';
import { SituationsIndexPage } from '../pages/situations-index.page';
import { SituationsUpdatePage } from '../pages/situations-update.page';
import { SituationsCreatePage } from '../pages/situations-create.page';

export const SituationsRoutes = [
  <Route key='situations-list' path='situations'>
    <Route index element={<SituationsIndexPage />} />
    <Route path='create' element={<SituationsCreatePage />} />
    <Route path=':id' element={<SituationsUpdatePage />} />
  </Route>,
];
