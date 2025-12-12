import { UnitsFilter } from "../components/units-filter.component";
import { UnitsTable } from "../components/units-table.component";
import { UnitsLayout } from "../layout";

export const UnitsIndexPage = () => {
  return (
    <UnitsLayout>
      <h2 className="mt-3 text-center">Cadastro de Unidades</h2>
      <hr />
      <UnitsFilter />
      <hr />
      <UnitsTable />
    </UnitsLayout>
  );
};