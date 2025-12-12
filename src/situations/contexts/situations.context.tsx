import { createContext, useContext } from "react";
import type { CreateSituationsInputDTO } from "../dtos/inputs/create-situations.input.dto";
import type { UpdateSituationsInputDTO } from "../dtos/inputs/update-situations.input.dto";
import type { FindManySituationsOutputDTO } from "../dtos/outputs/find-many-situations.output.dto";
import type { FindOneSituationsOutputDTO } from "../dtos/outputs/find-one-situations.output.dto";

export type SituationsContextProps = {
  situations: FindManySituationsOutputDTO[];
  findOneSituation: (id: string) => Promise<FindOneSituationsOutputDTO | undefined>;
  findManySituations: () => Promise<void>;
  createSituation: (createSituationDTO: CreateSituationsInputDTO) => Promise<boolean>;
  updateSituation: (id: string, updateSituationDTO: UpdateSituationsInputDTO) => Promise<boolean>;
  deleteSituation: (id: string) => Promise<boolean>;
};

export const SituationsContext = createContext<SituationsContextProps | null>(null);

export const useSituations = () => {
  const context = useContext(SituationsContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};