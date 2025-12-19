import { createContext, useContext } from "react";
import type { FindManyUnitsOutputDTO } from "../dtos/outputs/find-many-units.output.dto";

type LoadUnitsContextProps = {
  units: FindManyUnitsOutputDTO[];
  isLoading: boolean;
};

export const LoadUnitsContext = createContext<LoadUnitsContextProps | null>(null);

export const useLoadUnits = () => {
  const context = useContext(LoadUnitsContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};