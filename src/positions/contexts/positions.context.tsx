import { createContext, useContext } from "react";
import type { CreatePositionsInputDTO } from "../dtos/inputs/create-positions.input.dto";
import type { UpdatePositionsInputDTO } from "../dtos/inputs/update-positions.input.dto";
import type { FindManyPositionsOutputDTO } from "../dtos/outputs/find-many-positions.output.dto";
import type { FindOnePositionsOutputDTO } from "../dtos/outputs/find-one-positions.output.dto";

export type PositionsContextProps = {
  positions: FindManyPositionsOutputDTO[];
  findOnePosition: (id: string) => Promise<FindOnePositionsOutputDTO | undefined>;
  findManyPositions: () => Promise<void>;
  createPosition: (createPositionDTO: CreatePositionsInputDTO) => Promise<boolean>;
  updatePosition: (id: string, updatePositionDTO: UpdatePositionsInputDTO) => Promise<boolean>;
  deletePosition: (id: string) => Promise<boolean>;
};

export const PositionsContext = createContext<PositionsContextProps | null>(null);

export const usePositions = () => {
  const context = useContext(PositionsContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};