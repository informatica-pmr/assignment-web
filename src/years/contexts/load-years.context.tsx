import { createContext, useContext } from "react";
import type { FindManyYearsOutputDTO } from "../dtos/outputs/find-many-years.output.dto";

type LoadYearsContextProps = {
  years: FindManyYearsOutputDTO[];
  isLoading: boolean;
};

export const LoadYearsContext = createContext<LoadYearsContextProps | null>(null);

export const useLoadYears = () => {
  const context = useContext(LoadYearsContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};