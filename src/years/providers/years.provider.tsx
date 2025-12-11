import { useCallback, useState, type ReactNode } from "react";
import { YearsContext } from "../contexts/years.context";
import { Fetch } from "../../shared/lib/fetch";
import type { FindManyYearsOutputDTO } from "../dtos/outputs/find-many-years.output.dto";
import type { FindOneYearsOutputDTO } from "../dtos/outputs/find-one-years.output.dto";
import {
  useYearsFilters,
} from "../contexts/years-filters.context";
import type { CreateYearsInputDTO } from "../dtos/inputs/create-years.input.dto";
import type { CreateYearsOutputDTO } from "../dtos/outputs/create-years.output.dto";
import type { UpdateYearsInputDTO } from "../dtos/inputs/update-years.input.dto";
import { usePagination } from "../../shared/contexts/pagination.context";
import type { FindManyYearsInputDTO } from "../dtos/inputs/find-many-years.input.dto";

type YearsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch("years");

export const YearsProvider = ({ children }: YearsProviderProps) => {
  const {page, size, changePagination } = usePagination();
  const filters = useYearsFilters();
  const [years, setYears] = useState<FindManyYearsOutputDTO[]>([]);

  const findOneYear = useCallback(async (id: string) => {
    try {
      const { data } = await fetch.get<FindOneYearsOutputDTO | undefined>({
        id,
      });

      return data;
    } catch (err) {
      console.error(err);
    }
  }, []);
  const findManyYears = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<
        FindManyYearsOutputDTO[],
        FindManyYearsInputDTO
      >({
        filters: {
          ...filters,
          page, size
        },
      });

      setYears(data ?? []);
      changePagination(pagination);
    } catch (err) {
      console.error(err);
    }
  }, [filters, page, size, changePagination]);
  const createYear = useCallback(async (createYearDTO: CreateYearsInputDTO) => {
    try {
      await fetch.post<CreateYearsOutputDTO, CreateYearsInputDTO>(
        createYearDTO
      );

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }, []);
  const updateYear = useCallback(async (id: string, updateYearDTO: UpdateYearsInputDTO) => {
    try {
      await fetch.put<UpdateYearsInputDTO>(
        id,
        updateYearDTO
      );

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }, []);
  const deleteYear = useCallback(async (id: string) => {
    try {
      await fetch.delete(
        id,
      );

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }, []);
  return (
    <YearsContext.Provider
      value={{
        years,
        findOneYear,
        findManyYears,
        createYear,
        updateYear,
        deleteYear,
      }}
    >
      {children}
    </YearsContext.Provider>
  );
};
