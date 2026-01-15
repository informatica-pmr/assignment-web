import { CookiesProvider } from 'react-cookie';
import './App.css';
import { AuthProvider } from './auth/providers/auth.provider';
import { Layout } from './shared/components/layout';
import { NookiesProvider } from './shared/providers/nookies.provider';
import { PagesProvider } from './shared/providers/pages.provider';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <CookiesProvider>
      <NookiesProvider>
        <AuthProvider>
          <PagesProvider>
            <Layout />
            <ToastContainer position='top-right' autoClose={3000} theme='colored' />
          </PagesProvider>
        </AuthProvider>
      </NookiesProvider>
    </CookiesProvider>
  );
}

export default App;
