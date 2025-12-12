import { CreateSituationForm } from "../components/create-situation-form.component";
import { SituationsLayout } from "../layout";

export const SituationsCreatePage = () => {
  return (
    <SituationsLayout>
      <h2 className="mt-3 text-center">Cadastrar nova Situação</h2>
      <hr />
      <CreateSituationForm />
    </SituationsLayout>
  );
};