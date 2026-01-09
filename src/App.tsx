import { CookiesProvider } from 'react-cookie';
import './App.css';
import { AuthProvider } from './auth/providers/auth.provider';
import { Layout } from './shared/components/layout';
import { NookiesProvider } from './shared/providers/nookies.provider';
import { PagesProvider } from './shared/providers/pages.provider';

function App() {
  return (
    <CookiesProvider>
      <NookiesProvider>
        <AuthProvider>
          <PagesProvider>
            <Layout />
          </PagesProvider>
        </AuthProvider>
      </NookiesProvider>
    </CookiesProvider>
  );
}

export default App;
