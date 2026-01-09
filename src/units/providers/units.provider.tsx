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

type UnitsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('units');

export const UnitsProvider = ({ children }: UnitsProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const { page, size, changePagination } = usePagination();
  const filters = useUnitsFilters();
  const [units, setUnits] = useState<FindManyUnitsOutputDTO[]>([]);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findOneUnit = useCallback(async (id: string) => {
    try {
      const { data } = await fetch.get<FindOneUnitsOutputDTO | undefined>({
        id,
      });

      return data;
    } catch (err) {
      console.error(err);
    }
  }, []);
  const findManyUnits = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<FindManyUnitsOutputDTO[], FindManyUnitsInputDTO>(
        {
          filters: {
            ...filters,
            page,
            size,
          },
        },
      );

      setUnits(data ?? []);
      changePagination(pagination);
    } catch (err) {
      console.error(err);
    }
  }, [filters, page, size, changePagination]);
  const createUnit = useCallback(async (createUnitDTO: CreateUnitsInputDTO) => {
    try {
      await fetch.post<CreateUnitsOutputDTO, CreateUnitsInputDTO>(createUnitDTO);

      alert('unidade criada com sucesso');

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }, []);
  const updateUnit = useCallback(async (id: string, updateUnitDTO: UpdateUnitsInputDTO) => {
    try {
      await fetch.put<UpdateUnitsInputDTO>(id, updateUnitDTO);

      alert('unidade atualizada com sucesso');

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }, []);
  const deleteUnit = useCallback(async (id: string) => {
    try {
      await fetch.delete(id);

      alert('unidade deletada com sucesso');

      return true;
    } catch (err) {
      console.error(err);
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
