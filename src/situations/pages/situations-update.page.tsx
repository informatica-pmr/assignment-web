import { UpdateSituationForm } from "../components/update-situation-form.component";
import { SituationsLayout } from "../layout";

type SituationsUpdatePageProps = {
  id: string;
};

export const SituationsUpdatePage = ({id}: SituationsUpdatePageProps) => {
  return (
    <SituationsLayout>
      <h2 className="mt-3 text-center">Editar Situação</h2>
      <hr />
      <UpdateSituationForm id={id} />
    </SituationsLayout>
  );
};