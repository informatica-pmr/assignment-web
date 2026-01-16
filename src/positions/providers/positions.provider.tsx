import { useCallback, useState, type ReactNode } from 'react';
import { PositionsContext } from '../contexts/positions.context';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyPositionsOutputDTO } from '../dtos/outputs/find-many-positions.output.dto';
import type { FindOnePositionsOutputDTO } from '../dtos/outputs/find-one-positions.output.dto';
import { usePositionsFilters } from '../contexts/positions-filters.context';
import type { CreatePositionsInputDTO } from '../dtos/inputs/create-positions.input.dto';
import type { CreatePositionsOutputDTO } from '../dtos/outputs/create-positions.output.dto';
import type { UpdatePositionsInputDTO } from '../dtos/inputs/update-positions.input.dto';
import { usePagination } from '../../shared/contexts/pagination.context';
import type { FindManyPositionsInputDTO } from '../dtos/inputs/find-many-positions.input.dto';
import { useNookies } from '../../shared/contexts/nookies.context';
import { toast } from 'react-toastify';
import { usePositionsOrderBy } from '../contexts/positions-order-by.context';
import type { OrderByPositionsInputDTO } from '../dtos/inputs/order-by-positions.input.dto';

type PositionsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('positions');

export const PositionsProvider = ({ children }: PositionsProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const { page, size, changePagination } = usePagination();
  const filters = usePositionsFilters();
  const orderBy = usePositionsOrderBy();
  const [positions, setPositions] = useState<FindManyPositionsOutputDTO[]>([]);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findOnePosition = useCallback(async (id: string) => {
    try {
      const { data } = await fetch.get<FindOnePositionsOutputDTO | undefined>({
        id,
      });

      return data;
    } catch (err) {
      fetch.handleError(err);
    }
  }, []);
  const findManyPositions = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<
        FindManyPositionsOutputDTO[],
        FindManyPositionsInputDTO,
        OrderByPositionsInputDTO
      >({
        filters: {
          ...filters,
          page,
          size,
        },
        orderBy,
      });

      setPositions(data ?? []);
      changePagination(pagination);
    } catch (err) {
      fetch.handleError(err);
    }
  }, [filters, orderBy, page, size, changePagination]);
  const createPosition = useCallback(async (createPositionDTO: CreatePositionsInputDTO) => {
    try {
      await fetch.post<CreatePositionsOutputDTO, CreatePositionsInputDTO>(createPositionDTO);

      toast('cargo criado com sucesso', { type: 'success' });

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  const updatePosition = useCallback(
    async (id: string, updatePositionDTO: UpdatePositionsInputDTO) => {
      try {
        await fetch.put<UpdatePositionsInputDTO>(id, updatePositionDTO);

        toast('cargo atualizado com sucesso', { type: 'success' });

        return true;
      } catch (err) {
        fetch.handleError(err);
        return false;
      }
    },
    [],
  );
  const deletePosition = useCallback(async (id: string) => {
    try {
      await fetch.delete(id);

      toast('cargo deletado com sucesso', { type: 'success' });

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  return (
    <PositionsContext.Provider
      value={{
        positions,
        findOnePosition,
        findManyPositions,
        createPosition,
        updatePosition,
        deletePosition,
      }}>
      {children}
    </PositionsContext.Provider>
  );
};
