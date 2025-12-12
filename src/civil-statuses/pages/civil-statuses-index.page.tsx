import { CivilStatusesFilter } from "../components/civil-statuses-filter.component";
import { CivilStatusesTable } from "../components/civil-statuses-table.component";
import { CivilStatusesLayout } from "../layout";

export const CivilStatusesIndexPage = () => {
  return (
    <CivilStatusesLayout>
      <h2 className="mt-3 text-center">Cadastro de Estados civis</h2>
      <hr />
      <CivilStatusesFilter />
      <hr />
      <CivilStatusesTable />
    </CivilStatusesLayout>
  );
};