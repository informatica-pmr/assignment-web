import { UpdateTeacherForm } from "../components/update-teacher-form.component";
import { TeachersLayout } from "../layout";

type TeachersUpdatePageProps = {
  id: string;
};

export const TeachersUpdatePage = ({id}: TeachersUpdatePageProps) => {
  return (
    <TeachersLayout>
      <h2 className="mt-3 text-center">Editar Professor(a)</h2>
      <hr />
      <UpdateTeacherForm id={id} />
    </TeachersLayout>
  );
};