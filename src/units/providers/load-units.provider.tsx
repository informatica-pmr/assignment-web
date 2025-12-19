import { useCallback, useEffect, useState, type ReactNode } from "react";
import { LoadUnitsContext } from "../contexts/load-units.context";
import type { FindManyUnitsOutputDTO } from "../dtos/outputs/find-many-units.output.dto";
import { Fetch } from "../../shared/lib/fetch";
import type { FindManyUnitsInputDTO } from "../dtos/inputs/find-many-units.input.dto";

type LoadUnitsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch("units");

export const LoadUnitsProvider = ({ children }: LoadUnitsProviderProps) => {
  const [units, setUnits] = useState<FindManyUnitsOutputDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const findManyUnits = useCallback(async () => {
    try {
      const { data } = await fetch.get<
        FindManyUnitsOutputDTO[],
        FindManyUnitsInputDTO
      >({
        filters: {},
      });

      setUnits(data ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    findManyUnits();
  }, [findManyUnits]);

  return (
    <LoadUnitsContext.Provider value={{ units, isLoading }}>
      {children}
    </LoadUnitsContext.Provider>
  );
};
