import { PreferencesFilter } from "../components/preferences-filter.component";
import { PreferencesTable } from "../components/preferences-table.component";
import { PreferencesLayout } from "../layout";

export const PreferencesIndexPage = () => {
  return (
    <PreferencesLayout>
      <h2 className="mt-3 text-center">Cadastro de Preferências</h2>
      <hr />
      <PreferencesFilter />
      <hr />
      <PreferencesTable />
    </PreferencesLayout>
  );
};