import { createContext, useContext } from "react";
import type { FindManyPositionsOutputDTO } from "../dtos/outputs/find-many-positions.output.dto";

type LoadPositionsContextProps = {
  positions: FindManyPositionsOutputDTO[];
  isLoading: boolean;
};

export const LoadPositionsContext = createContext<LoadPositionsContextProps | null>(null);

export const useLoadPositions = () => {
  const context = useContext(LoadPositionsContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};