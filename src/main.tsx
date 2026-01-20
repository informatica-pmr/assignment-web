import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { CookiesProvider } from 'react-cookie';
import { NookiesProvider } from './shared/providers/nookies.provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter
      basename={document.location.origin.includes('localhost') ? undefined : 'educacao/atribui-v2'}>
      <CookiesProvider>
        <NookiesProvider>
          <App />
        </NookiesProvider>
      </CookiesProvider>
    </BrowserRouter>
  </StrictMode>,
);
