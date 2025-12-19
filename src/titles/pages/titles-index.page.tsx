import { TitlesFilter } from "../components/titles-filter.component";
import { TitlesTable } from "../components/titles-table.component";
import { TitlesLayout } from "../layout";

export const TitlesIndexPage = () => {
  return (
    <TitlesLayout>
      <h2 className="mt-3 text-center">Cadastro de Títulos</h2>
      <hr />
      <TitlesFilter />
      <hr />
      <TitlesTable />
    </TitlesLayout>
  );
};