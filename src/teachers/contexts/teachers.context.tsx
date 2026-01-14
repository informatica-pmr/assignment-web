import { createContext, useContext } from 'react';
import type { CreateTeachersInputDTO } from '../dtos/inputs/create-teachers.input.dto';
import type { UpdateTeachersInputDTO } from '../dtos/inputs/update-teachers.input.dto';
import type { FindManyTeachersOutputDTO } from '../dtos/outputs/find-many-teachers.output.dto';
import type { FindOneTeachersOutputDTO } from '../dtos/outputs/find-one-teachers.output.dto';
import type { ImportTeachersInputDTO } from '../dtos/inputs/import-teachers.input.dto';

export type TeachersContextProps = {
  teachers: FindManyTeachersOutputDTO[];
  findOneTeacher: (id: string) => Promise<FindOneTeachersOutputDTO | undefined>;
  findManyTeachers: () => Promise<void>;
  createTeacher: (createTeacherDTO: CreateTeachersInputDTO) => Promise<boolean>;
  updateTeacher: (id: string, updateTeacherDTO: UpdateTeachersInputDTO) => Promise<boolean>;
  deleteTeacher: (id: string) => Promise<boolean>;
  importTeachers: (importDTO: ImportTeachersInputDTO) => Promise<boolean>;
};

export const TeachersContext = createContext<TeachersContextProps | null>(null);

export const useTeachers = () => {
  const context = useContext(TeachersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
