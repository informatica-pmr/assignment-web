import { Route } from 'react-router';
import { TeachersIndexPage } from '../pages/teachers-index.page';
import { TeachersUpdatePage } from '../pages/teachers-update.page';
import { TeachersCreatePage } from '../pages/teachers-create.page';
import { TeachersReportPage } from '../pages/teachers-report.page';

export const TeachersRoutes = [
  <Route key='teachers-list' path='teachers'>
    <Route index element={<TeachersIndexPage />} />
    <Route path='create' element={<TeachersCreatePage />} />
    <Route path='report' element={<TeachersReportPage />} />
    <Route path=':id' element={<TeachersUpdatePage />} />
  </Route>,
];
