import { createContext, useContext } from "react";
import type { FindManyDisciplinesOutputDTO } from "../dtos/outputs/find-many-disciplines.output.dto";

type LoadDisciplinesContextProps = {
  disciplines: FindManyDisciplinesOutputDTO[];
  isLoading: boolean;
};

export const LoadDisciplinesContext = createContext<LoadDisciplinesContextProps | null>(null);

export const useLoadDisciplines = () => {
  const context = useContext(LoadDisciplinesContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};