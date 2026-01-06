import { ClassificationsFilter } from '../components/classifications-filter.component';
import { ClassificationsLayout } from '../layout';

export const ClassificationsIndexPage = () => {
  return (
    <ClassificationsLayout>
      <h2 className='mt-3 text-center'>Relatório de Classificação</h2>
      <hr />
      <ClassificationsFilter />
    </ClassificationsLayout>
  );
};
