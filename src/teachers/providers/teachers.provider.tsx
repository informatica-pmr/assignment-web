import { useCallback, useState, type ReactNode } from 'react';
import { TeachersContext } from '../contexts/teachers.context';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyTeachersOutputDTO } from '../dtos/outputs/find-many-teachers.output.dto';
import type { FindOneTeachersOutputDTO } from '../dtos/outputs/find-one-teachers.output.dto';
import { useTeachersFilters } from '../contexts/teachers-filters.context';
import type { CreateTeachersInputDTO } from '../dtos/inputs/create-teachers.input.dto';
import type { CreateTeachersOutputDTO } from '../dtos/outputs/create-teachers.output.dto';
import type { UpdateTeachersInputDTO } from '../dtos/inputs/update-teachers.input.dto';
import { usePagination } from '../../shared/contexts/pagination.context';
import type { FindManyTeachersInputDTO } from '../dtos/inputs/find-many-teachers.input.dto';
import { useAuth } from '../../auth/contexts/auth.context';
import { useNookies } from '../../shared/contexts/nookies.context';
import type { ImportTeachersInputDTO } from '../dtos/inputs/import-teachers.input.dto';

type TeachersProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('teachers');

export const TeachersProvider = ({ children }: TeachersProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const { yearId } = useAuth();
  const { page, size, changePagination } = usePagination();
  const filters = useTeachersFilters();
  const [teachers, setTeachers] = useState<FindManyTeachersOutputDTO[]>([]);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findOneTeacher = useCallback(async (id: string) => {
    try {
      const { data } = await fetch.get<FindOneTeachersOutputDTO | undefined>({
        id,
      });

      return data;
    } catch (err) {
      fetch.handleError(err);
    }
  }, []);
  const findManyTeachers = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<
        FindManyTeachersOutputDTO[],
        FindManyTeachersInputDTO
      >({
        filters: {
          ...filters,
          yearId: yearId.toString(),
          page,
          size,
        },
      });

      setTeachers(data ?? []);
      changePagination(pagination);
    } catch (err) {
      fetch.handleError(err);
    }
  }, [filters, page, size, changePagination, yearId]);
  const createTeacher = useCallback(async (createTeacherDTO: CreateTeachersInputDTO) => {
    try {
      await fetch.post<CreateTeachersOutputDTO, CreateTeachersInputDTO>(createTeacherDTO);

      alert('professor(a) criado(a) com sucesso');

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  const updateTeacher = useCallback(
    async (id: string, updateTeacherDTO: UpdateTeachersInputDTO) => {
      try {
        await fetch.put<UpdateTeachersInputDTO>(id, updateTeacherDTO);

        alert('professor(a) atualizado(a) com sucesso');

        return true;
      } catch (err) {
        fetch.handleError(err);
        return false;
      }
    },
    [],
  );
  const deleteTeacher = useCallback(async (id: string) => {
    try {
      await fetch.delete(id);

      alert('professor(a) deletado(a) com sucesso');

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);

  const importTeachers = useCallback(async (importDTO: ImportTeachersInputDTO) => {
    try {
      await fetch.post<ImportTeachersInputDTO>(importDTO, 'import');

      alert('Professores importados com sucesso');

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);

  return (
    <TeachersContext.Provider
      value={{
        teachers,
        findOneTeacher,
        findManyTeachers,
        createTeacher,
        updateTeacher,
        deleteTeacher,
        importTeachers,
      }}>
      {children}
    </TeachersContext.Provider>
  );
};
