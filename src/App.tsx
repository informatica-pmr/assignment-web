import { CookiesProvider } from "react-cookie";
import "./App.css";
import { AuthProvider } from "./auth/providers/auth.provider";
import { Layout } from "./shared/components/layout";
import { NookiesProvider } from "./shared/providers/nookies.provider";
import { PagesProvider } from "./shared/providers/pages.provider";

function App() {
  return (
    <>
      <PagesProvider>
        <CookiesProvider>
          <NookiesProvider>
          <AuthProvider>
          <Layout/>
        </AuthProvider>
        </NookiesProvider>
        </CookiesProvider>
      </PagesProvider>
    </>
  );
}

export default App;
