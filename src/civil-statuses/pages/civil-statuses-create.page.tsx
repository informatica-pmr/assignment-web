import { CreateCivilStatusForm } from "../components/create-civil-status-form.component";
import { CivilStatusesLayout } from "../layout";

export const CivilStatusesCreatePage = () => {
  return (
    <CivilStatusesLayout>
      <h2 className="mt-3 text-center">Cadastrar novo Estado civil</h2>
      <hr />
      <CreateCivilStatusForm />
    </CivilStatusesLayout>
  );
};