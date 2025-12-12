import { UpdatePositionForm } from "../components/update-position-form.component";
import { PositionsLayout } from "../layout";

type PositionsUpdatePageProps = {
  id: string;
};

export const PositionsUpdatePage = ({id}: PositionsUpdatePageProps) => {
  return (
    <PositionsLayout>
      <h2 className="mt-3 text-center">Editar Cargo</h2>
      <hr />
      <UpdatePositionForm id={id} />
    </PositionsLayout>
  );
};