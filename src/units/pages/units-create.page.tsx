import { CreateUnitForm } from "../components/create-unit-form.component";
import { UnitsLayout } from "../layout";

export const UnitsCreatePage = () => {
  return (
    <UnitsLayout>
      <h2 className="mt-3 text-center">Cadastrar nova Unidade</h2>
      <hr />
      <CreateUnitForm />
    </UnitsLayout>
  );
};