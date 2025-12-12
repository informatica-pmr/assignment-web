import { CreatePositionForm } from "../components/create-position-form.component";
import { PositionsLayout } from "../layout";

export const PositionsCreatePage = () => {
  return (
    <PositionsLayout>
      <h2 className="mt-3 text-center">Cadastrar novo Cargo</h2>
      <hr />
      <CreatePositionForm />
    </PositionsLayout>
  );
};