import { Route } from 'react-router';
import { YearsIndexPage } from '../pages/years-index.page';
import { YearsUpdatePage } from '../pages/years-update.page';
import { YearsCreatePage } from '../pages/years-create.page';

export const YearsRoutes = [
  <Route key='years-list' path='years'>
    <Route index element={<YearsIndexPage />} />
    <Route path='create' element={<YearsCreatePage />} />
    <Route path=':id' element={<YearsUpdatePage />} />
  </Route>,
];
