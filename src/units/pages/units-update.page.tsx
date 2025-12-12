import { UpdateUnitForm } from "../components/update-unit-form.component";
import { UnitsLayout } from "../layout";

type UnitsUpdatePageProps = {
  id: string;
};

export const UnitsUpdatePage = ({id}: UnitsUpdatePageProps) => {
  return (
    <UnitsLayout>
      <h2 className="mt-3 text-center">Editar Unidade</h2>
      <hr />
      <UpdateUnitForm id={id} />
    </UnitsLayout>
  );
};