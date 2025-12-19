import { createContext, useContext } from "react";
import type { FindManySituationsOutputDTO } from "../dtos/outputs/find-many-situations.output.dto";

type LoadSituationsContextProps = {
  situations: FindManySituationsOutputDTO[];
  isLoading: boolean;
};

export const LoadSituationsContext = createContext<LoadSituationsContextProps | null>(null);

export const useLoadSituations = () => {
  const context = useContext(LoadSituationsContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};