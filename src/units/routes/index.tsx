import { Route } from 'react-router';
import { UnitsIndexPage } from '../pages/units-index.page';
import { UnitsUpdatePage } from '../pages/units-update.page';
import { UnitsCreatePage } from '../pages/units-create.page';

export const UnitsRoutes = [
  <Route key='units-list' path='units'>
    <Route index element={<UnitsIndexPage />} />
    <Route path='create' element={<UnitsCreatePage />} />
    <Route path=':id' element={<UnitsUpdatePage />} />
  </Route>,
];
