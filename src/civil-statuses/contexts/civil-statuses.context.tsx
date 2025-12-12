import { createContext, useContext } from "react";
import type { CreateCivilStatusesInputDTO } from "../dtos/inputs/create-civil-statuses.input.dto";
import type { UpdateCivilStatusesInputDTO } from "../dtos/inputs/update-civil-statuses.input.dto";
import type { FindManyCivilStatusesOutputDTO } from "../dtos/outputs/find-many-civil-statuses.output.dto";
import type { FindOneCivilStatusesOutputDTO } from "../dtos/outputs/find-one-civil-statuses.output.dto";

export type CivilStatusesContextProps = {
  civilStatuses: FindManyCivilStatusesOutputDTO[];
  findOneCivilStatus: (id: string) => Promise<FindOneCivilStatusesOutputDTO | undefined>;
  findManyCivilStatuses: () => Promise<void>;
  createCivilStatus: (createCivilStatusDTO: CreateCivilStatusesInputDTO) => Promise<boolean>;
  updateCivilStatus: (id: string, updateCivilStatusDTO: UpdateCivilStatusesInputDTO) => Promise<boolean>;
  deleteCivilStatus: (id: string) => Promise<boolean>;
};

export const CivilStatusesContext = createContext<CivilStatusesContextProps | null>(null);

export const useCivilStatuses = () => {
  const context = useContext(CivilStatusesContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};