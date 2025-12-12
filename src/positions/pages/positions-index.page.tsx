import { PositionsFilter } from "../components/positions-filter.component";
import { PositionsTable } from "../components/positions-table.component";
import { PositionsLayout } from "../layout";

export const PositionsIndexPage = () => {
  return (
    <PositionsLayout>
      <h2 className="mt-3 text-center">Cadastro de Cargos</h2>
      <hr />
      <PositionsFilter />
      <hr />
      <PositionsTable />
    </PositionsLayout>
  );
};