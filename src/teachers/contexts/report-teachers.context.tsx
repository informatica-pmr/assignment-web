import { createContext, useContext } from 'react';
import type { FindManyTeachersOutputDTO } from '../dtos/outputs/find-many-teachers.output.dto';

export type ReportTeachersContextProps = {
  findManyTeachers: () => Promise<FindManyTeachersOutputDTO[]>;
};

export const ReportTeachersContext = createContext<ReportTeachersContextProps | null>(null);

export const useReportTeachers = () => {
  const context = useContext(ReportTeachersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
