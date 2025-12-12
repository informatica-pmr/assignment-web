import { createContext, useContext } from "react";
import type { CreateDisciplinesInputDTO } from "../dtos/inputs/create-disciplines.input.dto";
import type { UpdateDisciplinesInputDTO } from "../dtos/inputs/update-disciplines.input.dto";
import type { FindManyDisciplinesOutputDTO } from "../dtos/outputs/find-many-disciplines.output.dto";
import type { FindOneDisciplinesOutputDTO } from "../dtos/outputs/find-one-disciplines.output.dto";

export type DisciplinesContextProps = {
  disciplines: FindManyDisciplinesOutputDTO[];
  findOneDiscipline: (id: string) => Promise<FindOneDisciplinesOutputDTO | undefined>;
  findManyDisciplines: () => Promise<void>;
  createDiscipline: (createDisciplineDTO: CreateDisciplinesInputDTO) => Promise<boolean>;
  updateDiscipline: (id: string, updateDisciplineDTO: UpdateDisciplinesInputDTO) => Promise<boolean>;
  deleteDiscipline: (id: string) => Promise<boolean>;
};

export const DisciplinesContext = createContext<DisciplinesContextProps | null>(null);

export const useDisciplines = () => {
  const context = useContext(DisciplinesContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};