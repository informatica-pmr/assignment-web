import { UpdateYearForm } from "../components/update-year-form.component";
import { YearsLayout } from "../layout";

type YearsUpdatePageProps = {
  id: string;
};

export const YearsUpdatePage = ({id}: YearsUpdatePageProps) => {
  return (
    <YearsLayout>
      <h2 className="mt-3 text-center">Editar Ano</h2>
      <hr />
      <UpdateYearForm id={id} />
    </YearsLayout>
  );
};