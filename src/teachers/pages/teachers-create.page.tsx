import { CreateTeacherForm } from "../components/create-teacher-form.component";
import { TeachersLayout } from "../layout";

export const TeachersCreatePage = () => {
  return (
    <TeachersLayout>
      <h2 className="mt-3 text-center">Cadastrar novo(a) Professor(a)</h2>
      <hr />
      <CreateTeacherForm />
    </TeachersLayout>
  );
};