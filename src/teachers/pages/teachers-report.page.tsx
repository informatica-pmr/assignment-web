import { LoadUnitsProvider } from '../../units/providers/load-units.provider';
import { TeachersReport } from '../components/teachers-report.component';
import { ReportTeachersProvider } from '../providers/report-teachers.provider';
import { TeachersFiltersProvider } from '../providers/teachers-filters.provider';
import { TeachersOrderByProvider } from '../providers/teachers-order-by.provider';

export const TeachersReportPage = () => {
  return (
    <LoadUnitsProvider>
      <TeachersFiltersProvider>
        <TeachersOrderByProvider>
          <ReportTeachersProvider>
            <h2 className='mt-3 text-center'>Relatório de Professores(as)</h2>
            <hr />
            <TeachersReport />
          </ReportTeachersProvider>
        </TeachersOrderByProvider>
      </TeachersFiltersProvider>
    </LoadUnitsProvider>
  );
};
