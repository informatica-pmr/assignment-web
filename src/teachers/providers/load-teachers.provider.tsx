import { useCallback, useEffect, useState, type ReactNode } from "react";
import { LoadTeachersContext } from "../contexts/load-teachers.context";
import type { FindManyTeachersOutputDTO } from "../dtos/outputs/find-many-teachers.output.dto";
import { Fetch } from "../../shared/lib/fetch";
import type { FindManyTeachersInputDTO } from "../dtos/inputs/find-many-teachers.input.dto";
import { useAuth } from "../../auth/contexts/auth.context";

type LoadTeachersProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch("teachers");

export const LoadTeachersProvider = ({ children }: LoadTeachersProviderProps) => {
  const {yearId} = useAuth();
  const [teachers, setTeachers] = useState<FindManyTeachersOutputDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const findManyTeachers = useCallback(async () => {
    try {
      const { data } = await fetch.get<
        FindManyTeachersOutputDTO[],
        FindManyTeachersInputDTO
      >({
        filters: { yearId: yearId.toString() },
      });

      setTeachers(data ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [yearId]);

  useEffect(() => {
    findManyTeachers();
  }, [findManyTeachers]);

  return (
    <LoadTeachersContext.Provider value={{ teachers, isLoading }}>
      {children}
    </LoadTeachersContext.Provider>
  );
};
