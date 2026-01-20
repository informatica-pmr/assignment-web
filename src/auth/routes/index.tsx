import { Route } from 'react-router';
import { AuthLoginPage } from '../pages/auth-login.page';
import { AuthResetPage } from '../pages/auth-reset.page';

export const AuthRoutes = [
  <Route key='auth-list' path='auth'>
    <Route path='login' element={<AuthLoginPage />} />
    <Route path='reset' element={<AuthResetPage />} />
  </Route>,
];
