import { YearsFilter } from "../components/years-filter.component";
import { YearsTable } from "../components/years-table.component";
import { YearsLayout } from "../layout";

export const YearsIndexPage = () => {
  return (
    <YearsLayout>
      <h2 className="mt-3 text-center">Cadastro de Anos</h2>
      <hr />
      <YearsFilter />
      <hr />
      <YearsTable />
    </YearsLayout>
  );
};