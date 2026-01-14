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

type SituationsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('situations');

export const SituationsProvider = ({ children }: SituationsProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const { page, size, changePagination } = usePagination();
  const filters = useSituationsFilters();
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
        FindManySituationsInputDTO
      >({
        filters: {
          ...filters,
          page,
          size,
        },
      });

      setSituations(data ?? []);
      changePagination(pagination);
    } catch (err) {
      fetch.handleError(err);
    }
  }, [filters, page, size, changePagination]);
  const createSituation = useCallback(async (createSituationDTO: CreateSituationsInputDTO) => {
    try {
      await fetch.post<CreateSituationsOutputDTO, CreateSituationsInputDTO>(createSituationDTO);

      alert('situação criada com sucesso');

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

        alert('situação atualizada com sucesso');

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

      alert('situação deletada com sucesso');

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
