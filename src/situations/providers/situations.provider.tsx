import { useCallback, useState, type ReactNode } from 'react';
import { SituationsContext } from '../contexts/situations.context';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManySituationsOutputDTO } from '../dtos/outputs/find-many-situations.output.dto';
import type { FindOneSituationsOutputDTO } from '../dtos/outputs/find-one-situations.output.dto';
import { useSituationsFilters } from '../contexts/situations-filters.context';
import type { CreateSituationsInputDTO } from '../dtos/inputs/create-situations.input.dto';
import type { CreateSituationsOutputDTO } from '../dtos/outputs/create-situations.output.dto';
import type { UpdateSituationsInputDTO } from '../dtos/inputs/update-situations.input.dto';
import { usePagination } from '../../shared/contexts/pagination.context';
import type { FindManySituationsInputDTO } from '../dtos/inputs/find-many-situations.input.dto';
import { useNookies } from '../../shared/contexts/nookies.context';
import { toast } from 'react-toastify';
import { useSituationsOrderBy } from '../contexts/situations-order-by.context';
import type { OrderBySituationsInputDTO } from '../dtos/inputs/order-by-situations.input.dto';

type SituationsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('situations');

export const SituationsProvider = ({ children }: SituationsProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const { page, size, changePagination } = usePagination();
  const filters = useSituationsFilters();
  const orderBy = useSituationsOrderBy();
  const [situations, setSituations] = useState<FindManySituationsOutputDTO[]>([]);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findOneSituation = useCallback(async (id: string) => {
    try {
      const { data } = await fetch.get<FindOneSituationsOutputDTO | undefined>({
        id,
      });

      return data;
    } catch (err) {
      fetch.handleError(err);
    }
  }, []);
  const findManySituations = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<
        FindManySituationsOutputDTO[],
        FindManySituationsInputDTO,
        OrderBySituationsInputDTO
      >({
        filters: {
          ...filters,
          page,
          size,
        },
        orderBy,
      });

      setSituations(data ?? []);
      changePagination(pagination);
    } catch (err) {
      fetch.handleError(err);
    }
  }, [filters, orderBy, page, size, changePagination]);
  const createSituation = useCallback(async (createSituationDTO: CreateSituationsInputDTO) => {
    try {
      await fetch.post<CreateSituationsOutputDTO, CreateSituationsInputDTO>(createSituationDTO);

      toast('situação criada com sucesso', { type: 'success' });

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  const updateSituation = useCallback(
    async (id: string, updateSituationDTO: UpdateSituationsInputDTO) => {
      try {
        await fetch.put<UpdateSituationsInputDTO>(id, updateSituationDTO);

        toast('situação atualizada com sucesso', { type: 'success' });

        return true;
      } catch (err) {
        fetch.handleError(err);
        return false;
      }
    },
    [],
  );
  const deleteSituation = useCallback(async (id: string) => {
    try {
      await fetch.delete(id);

      toast('situação deletada com sucesso', { type: 'success' });

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  return (
    <SituationsContext.Provider
      value={{
        situations,
        findOneSituation,
        findManySituations,
        createSituation,
        updateSituation,
        deleteSituation,
      }}>
      {children}
    </SituationsContext.Provider>
  );
};
