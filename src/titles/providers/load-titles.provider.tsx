import { useCallback, useEffect, useState, type ReactNode } from "react";
import { LoadTitlesContext } from "../contexts/load-tiltes.context";
import type { FindManyTitlesOutputDTO } from "../dtos/outputs/find-many-titles.output.dto";
import { Fetch } from "../../shared/lib/fetch";
import type { FindManyTitlesInputDTO } from "../dtos/inputs/find-many-titles.input.dto";
import { useAuth } from "../../auth/contexts/auth.context";

type LoadTitlesProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch("titles");

export const LoadTitlesProvider = ({ children }: LoadTitlesProviderProps) => {
  const { yearId } = useAuth();
  const [titles, setTitles] = useState<FindManyTitlesOutputDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const findManyTitles = useCallback(async () => {
    try {
      const { data } = await fetch.get<
        FindManyTitlesOutputDTO[],
        FindManyTitlesInputDTO
      >({
        filters: {
          yearId: yearId.toString(),
        },
      });

      setTitles(data ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [yearId]);

  useEffect(() => {
    findManyTitles();
  }, [findManyTitles]);

  return (
    <LoadTitlesContext.Provider value={{ titles, isLoading }}>
      {children}
    </LoadTitlesContext.Provider>
  );
};
