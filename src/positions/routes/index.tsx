import { Route } from 'react-router';
import { PositionsIndexPage } from '../pages/positions-index.page';
import { PositionsUpdatePage } from '../pages/positions-update.page';
import { PositionsCreatePage } from '../pages/positions-create.page';

export const PositionsRoutes = [
  <Route key='positions-list' path='positions'>
    <Route index element={<PositionsIndexPage />} />
    <Route path='create' element={<PositionsCreatePage />} />
    <Route path=':id' element={<PositionsUpdatePage />} />
  </Route>,
];
