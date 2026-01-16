import { useCallback, useState, type ReactNode } from 'react';
import { UnitsContext } from '../contexts/units.context';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyUnitsOutputDTO } from '../dtos/outputs/find-many-units.output.dto';
import type { FindOneUnitsOutputDTO } from '../dtos/outputs/find-one-units.output.dto';
import { useUnitsFilters } from '../contexts/units-filters.context';
import type { CreateUnitsInputDTO } from '../dtos/inputs/create-units.input.dto';
import type { CreateUnitsOutputDTO } from '../dtos/outputs/create-units.output.dto';
import type { UpdateUnitsInputDTO } from '../dtos/inputs/update-units.input.dto';
import { usePagination } from '../../shared/contexts/pagination.context';
import type { FindManyUnitsInputDTO } from '../dtos/inputs/find-many-units.input.dto';
import { useNookies } from '../../shared/contexts/nookies.context';
import { toast } from 'react-toastify';
import { useUnitsOrderBy } from '../contexts/units-order-by.context';
import type { OrderByUnitsInputDTO } from '../dtos/inputs/order-by-units.input.dto';

type UnitsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('units');

export const UnitsProvider = ({ children }: UnitsProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const { page, size, changePagination } = usePagination();
  const filters = useUnitsFilters();
  const orderBy = useUnitsOrderBy();
  const [units, setUnits] = useState<FindManyUnitsOutputDTO[]>([]);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findOneUnit = useCallback(async (id: string) => {
    try {
      const { data } = await fetch.get<FindOneUnitsOutputDTO | undefined>({
        id,
      });

      return data;
    } catch (err) {
      fetch.handleError(err);
    }
  }, []);
  const findManyUnits = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<
        FindManyUnitsOutputDTO[],
        FindManyUnitsInputDTO,
        OrderByUnitsInputDTO
      >({
        filters: {
          ...filters,
          page,
          size,
        },
        orderBy,
      });

      setUnits(data ?? []);
      changePagination(pagination);
    } catch (err) {
      fetch.handleError(err);
    }
  }, [filters, orderBy, page, size, changePagination]);
  const createUnit = useCallback(async (createUnitDTO: CreateUnitsInputDTO) => {
    try {
      await fetch.post<CreateUnitsOutputDTO, CreateUnitsInputDTO>(createUnitDTO);

      toast('unidade criada com sucesso', { type: 'success' });

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  const updateUnit = useCallback(async (id: string, updateUnitDTO: UpdateUnitsInputDTO) => {
    try {
      await fetch.put<UpdateUnitsInputDTO>(id, updateUnitDTO);

      toast('unidade atualizada com sucesso', { type: 'success' });

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  const deleteUnit = useCallback(async (id: string) => {
    try {
      await fetch.delete(id);

      toast('unidade deletada com sucesso', { type: 'success' });

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  return (
    <UnitsContext.Provider
      value={{
        units,
        findOneUnit,
        findManyUnits,
        createUnit,
        updateUnit,
        deleteUnit,
      }}>
      {children}
    </UnitsContext.Provider>
  );
};
