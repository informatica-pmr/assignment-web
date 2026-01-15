import { useCallback, useState, type ReactNode } from 'react';
import { TitlesContext } from '../contexts/titles.context';
import { Fetch, FetchError } from '../../shared/lib/fetch';
import type { FindManyTitlesOutputDTO } from '../dtos/outputs/find-many-titles.output.dto';
import type { FindOneTitlesOutputDTO } from '../dtos/outputs/find-one-titles.output.dto';
import { useTitlesFilters } from '../contexts/titles-filters.context';
import type { CreateTitlesInputDTO } from '../dtos/inputs/create-titles.input.dto';
import type { CreateTitlesOutputDTO } from '../dtos/outputs/create-titles.output.dto';
import type { UpdateTitlesInputDTO } from '../dtos/inputs/update-titles.input.dto';
import { usePagination } from '../../shared/contexts/pagination.context';
import type { FindManyTitlesInputDTO } from '../dtos/inputs/find-many-titles.input.dto';
import { useAuth } from '../../auth/contexts/auth.context';
import { useNookies } from '../../shared/contexts/nookies.context';
import type { ImportTitlesInputDTO } from '../dtos/inputs/import-titles.input.dto';
import { toast } from 'react-toastify';

type TitlesProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('titles');

export const TitlesProvider = ({ children }: TitlesProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const { yearId } = useAuth();
  const { page, size, changePagination } = usePagination();
  const filters = useTitlesFilters();
  const [titles, setTitles] = useState<FindManyTitlesOutputDTO[]>([]);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findOneTitle = useCallback(async (id: string) => {
    try {
      const { data } = await fetch.get<FindOneTitlesOutputDTO | undefined>({
        id,
      });

      return data;
    } catch (err) {
      fetch.handleError(err);
    }
  }, []);
  const findManyTitles = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<
        FindManyTitlesOutputDTO[],
        FindManyTitlesInputDTO
      >({
        filters: {
          ...filters,
          yearId: yearId.toString(),
          page,
          size,
        },
      });

      setTitles(data ?? []);
      changePagination(pagination);
    } catch (err) {
      fetch.handleError(err);
    }
  }, [filters, page, size, changePagination, yearId]);
  const createTitle = useCallback(async (createTitleDTO: CreateTitlesInputDTO) => {
    try {
      await fetch.post<CreateTitlesOutputDTO, CreateTitlesInputDTO>(createTitleDTO);

      alert('título criado com sucesso');

      return true;
    } catch (err) {
      if (err instanceof FetchError && err.statusCode >= 400 && err.statusCode < 500) {
        alert(err.errors?.join('\n') || 'erro ao criar título');
      } else {
        fetch.handleError(err);
      }
      return false;
    }
  }, []);
  const updateTitle = useCallback(async (id: string, updateTitleDTO: UpdateTitlesInputDTO) => {
    try {
      await fetch.put<UpdateTitlesInputDTO>(id, updateTitleDTO);

      toast('título atualizado com sucesso', { type: 'success' });

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  const deleteTitle = useCallback(async (id: string) => {
    try {
      await fetch.delete(id);

      alert('título deletado com sucesso');

      return true;
    } catch (err) {
      if (err instanceof FetchError && err.statusCode >= 400 && err.statusCode < 500) {
        alert(err.errors?.join('\n') || 'erro ao deletar título');
      } else {
        fetch.handleError(err);
      }
      return false;
    }
  }, []);

  const importTitles = useCallback(async (importDTO: ImportTitlesInputDTO) => {
    try {
      await fetch.post<ImportTitlesInputDTO>(importDTO, 'import');

      alert('Títulos importados com sucesso');

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);

  return (
    <TitlesContext.Provider
      value={{
        titles,
        findOneTitle,
        findManyTitles,
        createTitle,
        updateTitle,
        deleteTitle,
        importTitles,
      }}>
      {children}
    </TitlesContext.Provider>
  );
};
