import "./App.css";
import { Layout } from "./shared/components/layout";
import { PagesProvider } from "./shared/providers/pages.provider";

function App() {
  return (
    <>
      <PagesProvider>
        <Layout/>
      </PagesProvider>
    </>
  );
}

export default App;
