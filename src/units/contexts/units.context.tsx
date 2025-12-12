import { createContext, useContext } from "react";
import type { CreateUnitsInputDTO } from "../dtos/inputs/create-units.input.dto";
import type { UpdateUnitsInputDTO } from "../dtos/inputs/update-units.input.dto";
import type { FindManyUnitsOutputDTO } from "../dtos/outputs/find-many-units.output.dto";
import type { FindOneUnitsOutputDTO } from "../dtos/outputs/find-one-units.output.dto";

export type UnitsContextProps = {
  units: FindManyUnitsOutputDTO[];
  findOneUnit: (id: string) => Promise<FindOneUnitsOutputDTO | undefined>;
  findManyUnits: () => Promise<void>;
  createUnit: (createUnitDTO: CreateUnitsInputDTO) => Promise<boolean>;
  updateUnit: (id: string, updateUnitDTO: UpdateUnitsInputDTO) => Promise<boolean>;
  deleteUnit: (id: string) => Promise<boolean>;
};

export const UnitsContext = createContext<UnitsContextProps | null>(null);

export const useUnits = () => {
  const context = useContext(UnitsContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};