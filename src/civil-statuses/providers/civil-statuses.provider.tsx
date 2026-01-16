import { useCallback, useState, type ReactNode } from 'react';
import { CivilStatusesContext } from '../contexts/civil-statuses.context';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyCivilStatusesOutputDTO } from '../dtos/outputs/find-many-civil-statuses.output.dto';
import type { FindOneCivilStatusesOutputDTO } from '../dtos/outputs/find-one-civil-statuses.output.dto';
import { useCivilStatusesFilters } from '../contexts/civil-statuses-filters.context';
import type { CreateCivilStatusesInputDTO } from '../dtos/inputs/create-civil-statuses.input.dto';
import type { CreateCivilStatusesOutputDTO } from '../dtos/outputs/create-civil-statuses.output.dto';
import type { UpdateCivilStatusesInputDTO } from '../dtos/inputs/update-civil-statuses.input.dto';
import { usePagination } from '../../shared/contexts/pagination.context';
import type { FindManyCivilStatusesInputDTO } from '../dtos/inputs/find-many-civil-statuses.input.dto';
import { useNookies } from '../../shared/contexts/nookies.context';
import { toast } from 'react-toastify';
import { useCivilStatusesOrderBy } from '../contexts/civil-statuses-order-by.context';
import type { OrderByCivilStatusesInputDTO } from '../dtos/inputs/order-by-civil-statuses.input.dto';

type CivilStatusesProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('civil-statuses');

export const CivilStatusesProvider = ({ children }: CivilStatusesProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const { page, size, changePagination } = usePagination();
  const filters = useCivilStatusesFilters();
  const orderBy = useCivilStatusesOrderBy();
  const [civilStatuses, setCivilStatuses] = useState<FindManyCivilStatusesOutputDTO[]>([]);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findOneCivilStatus = useCallback(async (id: string) => {
    try {
      const { data } = await fetch.get<FindOneCivilStatusesOutputDTO | undefined>({
        id,
      });

      return data;
    } catch (err) {
      fetch.handleError(err);
    }
  }, []);
  const findManyCivilStatuses = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<
        FindManyCivilStatusesOutputDTO[],
        FindManyCivilStatusesInputDTO,
        OrderByCivilStatusesInputDTO
      >({
        filters: {
          ...filters,
          page,
          size,
        },
        orderBy,
      });

      setCivilStatuses(data ?? []);
      changePagination(pagination);
    } catch (err) {
      fetch.handleError(err);
    }
  }, [filters, orderBy, page, size, changePagination]);
  const createCivilStatus = useCallback(
    async (createCivilStatusDTO: CreateCivilStatusesInputDTO) => {
      try {
        await fetch.post<CreateCivilStatusesOutputDTO, CreateCivilStatusesInputDTO>(
          createCivilStatusDTO,
        );

        toast('estado civil criado com sucesso', { type: 'success' });

        return true;
      } catch (err) {
        fetch.handleError(err);
        return false;
      }
    },
    [],
  );
  const updateCivilStatus = useCallback(
    async (id: string, updateCivilStatusDTO: UpdateCivilStatusesInputDTO) => {
      try {
        await fetch.put<UpdateCivilStatusesInputDTO>(id, updateCivilStatusDTO);

        toast('estado civil atualizado com sucesso', { type: 'success' });

        return true;
      } catch (err) {
        fetch.handleError(err);
        return false;
      }
    },
    [],
  );
  const deleteCivilStatus = useCallback(async (id: string) => {
    try {
      await fetch.delete(id);

      toast('estado civil deletado com sucesso', { type: 'success' });

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  return (
    <CivilStatusesContext.Provider
      value={{
        civilStatuses,
        findOneCivilStatus,
        findManyCivilStatuses,
        createCivilStatus,
        updateCivilStatus,
        deleteCivilStatus,
      }}>
      {children}
    </CivilStatusesContext.Provider>
  );
};
