import { UpdateCivilStatusForm } from "../components/update-civil-status-form.component";
import { CivilStatusesLayout } from "../layout";

type CivilStatusesUpdatePageProps = {
  id: string;
};

export const CivilStatusesUpdatePage = ({id}: CivilStatusesUpdatePageProps) => {
  return (
    <CivilStatusesLayout>
      <h2 className="mt-3 text-center">Editar Estado civil</h2>
      <hr />
      <UpdateCivilStatusForm id={id} />
    </CivilStatusesLayout>
  );
};