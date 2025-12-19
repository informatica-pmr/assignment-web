import { TeachersFilter } from "../components/teachers-filter.component";
import { TeachersTable } from "../components/teachers-table.component";
import { TeachersLayout } from "../layout";

export const TeachersIndexPage = () => {
  return (
    <TeachersLayout>
      <h2 className="mt-3 text-center">Cadastro de Professores(as)</h2>
      <hr />
      <TeachersFilter />
      <hr />
      <TeachersTable />
    </TeachersLayout>
  );
};