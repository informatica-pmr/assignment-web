import { Route } from 'react-router';
import { CivilStatusesIndexPage } from '../pages/civil-statuses-index.page';
import { CivilStatusesUpdatePage } from '../pages/civil-statuses-update.page';
import { CivilStatusesCreatePage } from '../pages/civil-statuses-create.page';

export const CivilStatusesRoutes = [
  <Route key='civil-statuses-list' path='civil-statuses'>
    <Route index element={<CivilStatusesIndexPage />} />
    <Route path='create' element={<CivilStatusesCreatePage />} />
    <Route path=':id' element={<CivilStatusesUpdatePage />} />
  </Route>,
];
