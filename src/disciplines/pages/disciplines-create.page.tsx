import { CreateDisciplineForm } from "../components/create-discipline-form.component";
import { DisciplinesLayout } from "../layout";

export const DisciplinesCreatePage = () => {
  return (
    <DisciplinesLayout>
      <h2 className="mt-3 text-center">Cadastrar nova Disciplina</h2>
      <hr />
      <CreateDisciplineForm />
    </DisciplinesLayout>
  );
};