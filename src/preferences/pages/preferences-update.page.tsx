import { UpdatePreferenceForm } from "../components/update-preference-form.component";
import { PreferencesLayout } from "../layout";

type PreferencesUpdatePageProps = {
  id: string;
};

export const PreferencesUpdatePage = ({id}: PreferencesUpdatePageProps) => {
  return (
    <PreferencesLayout>
      <h2 className="mt-3 text-center">Editar Preferência</h2>
      <hr />
      <UpdatePreferenceForm id={id} />
    </PreferencesLayout>
  );
};