import { createContext, useContext } from "react";
import type { FindManyTeachersOutputDTO } from "../dtos/outputs/find-many-teachers.output.dto";

type LoadTeachersContextProps = {
  teachers: FindManyTeachersOutputDTO[];
  isLoading: boolean;
};

export const LoadTeachersContext = createContext<LoadTeachersContextProps | null>(null);

export const useLoadTeachers = () => {
  const context = useContext(LoadTeachersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};