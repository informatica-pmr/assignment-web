import { CreatePreferenceForm } from "../components/create-preference-form.component";
import { PreferencesLayout } from "../layout";

export const PreferencesCreatePage = () => {
  return (
    <PreferencesLayout>
      <h2 className="mt-3 text-center">Cadastrar nova Preferência</h2>
      <hr />
      <CreatePreferenceForm />
    </PreferencesLayout>
  );
};