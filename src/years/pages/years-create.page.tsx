import { CreateYearForm } from "../components/create-year-form.component";
import { YearsLayout } from "../layout";

export const YearsCreatePage = () => {
  return (
    <YearsLayout>
      <h2 className="mt-3 text-center">Cadastrar novo Ano</h2>
      <hr />
      <CreateYearForm />
    </YearsLayout>
  );
};