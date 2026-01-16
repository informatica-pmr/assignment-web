import { useCallback, useState, type ReactNode } from 'react';
import { DisciplinesContext } from '../contexts/disciplines.context';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyDisciplinesOutputDTO } from '../dtos/outputs/find-many-disciplines.output.dto';
import type { FindOneDisciplinesOutputDTO } from '../dtos/outputs/find-one-disciplines.output.dto';
import { useDisciplinesFilters } from '../contexts/disciplines-filters.context';
import type { CreateDisciplinesInputDTO } from '../dtos/inputs/create-disciplines.input.dto';
import type { CreateDisciplinesOutputDTO } from '../dtos/outputs/create-disciplines.output.dto';
import type { UpdateDisciplinesInputDTO } from '../dtos/inputs/update-disciplines.input.dto';
import { usePagination } from '../../shared/contexts/pagination.context';
import type { FindManyDisciplinesInputDTO } from '../dtos/inputs/find-many-disciplines.input.dto';
import { useNookies } from '../../shared/contexts/nookies.context';
import { toast } from 'react-toastify';
import type { OrderByDisciplinesInputDTO } from '../dtos/inputs/order-by-disciplines.input.dto';
import { useDisciplinesOrderBy } from '../contexts/disciplines-order-by.context';

type DisciplinesProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('disciplines');

export const DisciplinesProvider = ({ children }: DisciplinesProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const { page, size, changePagination } = usePagination();
  const filters = useDisciplinesFilters();
  const orderBy = useDisciplinesOrderBy();
  const [disciplines, setDisciplines] = useState<FindManyDisciplinesOutputDTO[]>([]);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findOneDiscipline = useCallback(async (id: string) => {
    try {
      const { data } = await fetch.get<FindOneDisciplinesOutputDTO | undefined>({
        id,
      });

      return data;
    } catch (err) {
      fetch.handleError(err);
    }
  }, []);
  const findManyDisciplines = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<
        FindManyDisciplinesOutputDTO[],
        FindManyDisciplinesInputDTO,
        OrderByDisciplinesInputDTO
      >({
        filters: {
          ...filters,
          page,
          size,
        },
        orderBy,
      });

      setDisciplines(data ?? []);
      changePagination(pagination);
    } catch (err) {
      fetch.handleError(err);
    }
  }, [filters, orderBy, page, size, changePagination]);
  const createDiscipline = useCallback(async (createDisciplineDTO: CreateDisciplinesInputDTO) => {
    try {
      await fetch.post<CreateDisciplinesOutputDTO, CreateDisciplinesInputDTO>(createDisciplineDTO);

      toast('disciplina criada com sucesso', { type: 'success' });

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  const updateDiscipline = useCallback(
    async (id: string, updateDisciplineDTO: UpdateDisciplinesInputDTO) => {
      try {
        await fetch.put<UpdateDisciplinesInputDTO>(id, updateDisciplineDTO);

        toast('disciplina atualizada com sucesso', { type: 'success' });

        return true;
      } catch (err) {
        fetch.handleError(err);
        return false;
      }
    },
    [],
  );
  const deleteDiscipline = useCallback(async (id: string) => {
    try {
      await fetch.delete(id);

      toast('disciplina deletada com sucesso', { type: 'success' });

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  return (
    <DisciplinesContext.Provider
      value={{
        disciplines,
        findOneDiscipline,
        findManyDisciplines,
        createDiscipline,
        updateDiscipline,
        deleteDiscipline,
      }}>
      {children}
    </DisciplinesContext.Provider>
  );
};
