import { DisciplinesFilter } from "../components/disciplines-filter.component";
import { DisciplinesTable } from "../components/disciplines-table.component";
import { DisciplinesLayout } from "../layout";

export const DisciplinesIndexPage = () => {
  return (
    <DisciplinesLayout>
      <h2 className="mt-3 text-center">Cadastro de Disciplinas</h2>
      <hr />
      <DisciplinesFilter />
      <hr />
      <DisciplinesTable />
    </DisciplinesLayout>
  );
};