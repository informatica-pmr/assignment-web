import { Route, Routes } from 'react-router';
import './App.css';
import { AuthProvider } from './auth/providers/auth.provider';
import { Layout } from './shared/components/layout';
import { ToastContainer } from 'react-toastify';
import { YearsRoutes } from './years/routes';
import { PagesProvider } from './shared/providers/pages.provider';
import { UsersRoutes } from './users/routes';
import { UnitsRoutes } from './units/routes';
import { TitlesRoutes } from './titles/routes';
import { TeachersRoutes } from './teachers/routes';
import { SubscriptionsRoutes } from './subscriptions/routes';
import { SituationsRoutes } from './situations/routes';
import { PreferencesRoutes } from './preferences/routes';
import { PositionsRoutes } from './positions/routes';
import { HomePage } from './home/pages/home.page';
import { DisciplinesRoutes } from './disciplines/routes';
import { ClassificationsRoutes } from './classifications/routes';
import { CivilStatusesRoutes } from './civil-statuses/routes';
import { AuthRoutes } from './auth/routes';

function App() {
  return (
    <AuthProvider>
      <PagesProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            {YearsRoutes},{UsersRoutes},{UnitsRoutes},{TitlesRoutes},{TeachersRoutes},
            {SubscriptionsRoutes},{SituationsRoutes},{PreferencesRoutes},{PositionsRoutes},
            {DisciplinesRoutes},{ClassificationsRoutes},{CivilStatusesRoutes},{AuthRoutes}
          </Route>
        </Routes>
      </PagesProvider>
      <ToastContainer position='top-right' autoClose={3000} theme='colored' />
    </AuthProvider>
  );
}

export default App;
