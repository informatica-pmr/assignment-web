import { Route } from 'react-router';
import { PreferencesIndexPage } from '../pages/preferences-index.page';
import { PreferencesUpdatePage } from '../pages/preferences-update.page';
import { PreferencesCreatePage } from '../pages/preferences-create.page';

export const PreferencesRoutes = [
  <Route key='preferences-list' path='preferences'>
    <Route index element={<PreferencesIndexPage />} />
    <Route path='create' element={<PreferencesCreatePage />} />
    <Route path=':id' element={<PreferencesUpdatePage />} />
  </Route>,
];
