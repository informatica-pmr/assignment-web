import { CreateTitleForm } from "../components/create-title-form.component";
import { TitlesLayout } from "../layout";

export const TitlesCreatePage = () => {
  return (
    <TitlesLayout>
      <h2 className="mt-3 text-center">Cadastrar novo Título</h2>
      <hr />
      <CreateTitleForm />
    </TitlesLayout>
  );
};