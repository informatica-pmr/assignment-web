import { Route } from 'react-router';
import { TitlesIndexPage } from '../pages/titles-index.page';
import { TitlesUpdatePage } from '../pages/titles-update.page';
import { TitlesCreatePage } from '../pages/titles-create.page';

export const TitlesRoutes = [
  <Route key='titles-list' path='titles'>
    <Route index element={<TitlesIndexPage />} />
    <Route path='create' element={<TitlesCreatePage />} />
    <Route path=':id' element={<TitlesUpdatePage />} />
  </Route>,
];
