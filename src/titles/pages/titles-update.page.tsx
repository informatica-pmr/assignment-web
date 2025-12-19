import { UpdateTitleForm } from "../components/update-title-form.component";
import { TitlesLayout } from "../layout";

type TitlesUpdatePageProps = {
  id: string;
};

export const TitlesUpdatePage = ({id}: TitlesUpdatePageProps) => {
  return (
    <TitlesLayout>
      <h2 className="mt-3 text-center">Editar Título</h2>
      <hr />
      <UpdateTitleForm id={id} />
    </TitlesLayout>
  );
};