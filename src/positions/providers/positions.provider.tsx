import { useCallback, useState, type ReactNode } from "react";
import { PositionsContext } from "../contexts/positions.context";
import { Fetch } from "../../shared/lib/fetch";
import type { FindManyPositionsOutputDTO } from "../dtos/outputs/find-many-positions.output.dto";
import type { FindOnePositionsOutputDTO } from "../dtos/outputs/find-one-positions.output.dto";
import {
  usePositionsFilters,
} from "../contexts/positions-filters.context";
import type { CreatePositionsInputDTO } from "../dtos/inputs/create-positions.input.dto";
import type { CreatePositionsOutputDTO } from "../dtos/outputs/create-positions.output.dto";
import type { UpdatePositionsInputDTO } from "../dtos/inputs/update-positions.input.dto";
import { usePagination } from "../../shared/contexts/pagination.context";
import type { FindManyPositionsInputDTO } from "../dtos/inputs/find-many-positions.input.dto";

type PositionsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch("positions");

export const PositionsProvider = ({ children }: PositionsProviderProps) => {
  const {page, size, changePagination } = usePagination();
  const filters = usePositionsFilters();
  const [positions, setPositions] = useState<FindManyPositionsOutputDTO[]>([]);

  const findOnePosition = useCallback(async (id: string) => {
    try {
      const { data } = await fetch.get<FindOnePositionsOutputDTO | undefined>({
        id,
      });

      return data;
    } catch (err) {
      console.error(err);
    }
  }, []);
  const findManyPositions = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<
        FindManyPositionsOutputDTO[],
        FindManyPositionsInputDTO
      >({
        filters: {
          ...filters,
          page, size
        },
      });

      setPositions(data ?? []);
      changePagination(pagination);
    } catch (err) {
      console.error(err);
    }
  }, [filters, page, size, changePagination]);
  const createPosition = useCallback(async (createPositionDTO: CreatePositionsInputDTO) => {
    try {
      await fetch.post<CreatePositionsOutputDTO, CreatePositionsInputDTO>(
        createPositionDTO
      );

      alert('cargo criado com sucesso');

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }, []);
  const updatePosition = useCallback(async (id: string, updatePositionDTO: UpdatePositionsInputDTO) => {
    try {
      await fetch.put<UpdatePositionsInputDTO>(
        id,
        updatePositionDTO
      );

      alert('cargo atualizado com sucesso');

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }, []);
  const deletePosition = useCallback(async (id: string) => {
    try {
      await fetch.delete(
        id,
      );

      alert('cargo deletado com sucesso');

      return true;
    } catch (err) {
      console.error(err);
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
      }}
    >
      {children}
    </PositionsContext.Provider>
  );
};
