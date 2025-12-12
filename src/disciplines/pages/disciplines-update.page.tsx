import { UpdateDisciplineForm } from "../components/update-discipline-form.component";
import { DisciplinesLayout } from "../layout";

type DisciplinesUpdatePageProps = {
  id: string;
};

export const DisciplinesUpdatePage = ({id}: DisciplinesUpdatePageProps) => {
  return (
    <DisciplinesLayout>
      <h2 className="mt-3 text-center">Editar Disciplina</h2>
      <hr />
      <UpdateDisciplineForm id={id} />
    </DisciplinesLayout>
  );
};