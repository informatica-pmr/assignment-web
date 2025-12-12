import { SituationsFilter } from "../components/situations-filter.component";
import { SituationsTable } from "../components/situations-table.component";
import { SituationsLayout } from "../layout";

export const SituationsIndexPage = () => {
  return (
    <SituationsLayout>
      <h2 className="mt-3 text-center">Cadastro de Situações</h2>
      <hr />
      <SituationsFilter />
      <hr />
      <SituationsTable />
    </SituationsLayout>
  );
};