import { createContext, useContext } from "react";
import type { CreateTitlesInputDTO } from "../dtos/inputs/create-titles.input.dto";
import type { UpdateTitlesInputDTO } from "../dtos/inputs/update-titles.input.dto";
import type { FindManyTitlesOutputDTO } from "../dtos/outputs/find-many-titles.output.dto";
import type { FindOneTitlesOutputDTO } from "../dtos/outputs/find-one-titles.output.dto";

export type TitlesContextProps = {
  titles: FindManyTitlesOutputDTO[];
  findOneTitle: (id: string) => Promise<FindOneTitlesOutputDTO | undefined>;
  findManyTitles: () => Promise<void>;
  createTitle: (createTitleDTO: CreateTitlesInputDTO) => Promise<boolean>;
  updateTitle: (id: string, updateTitleDTO: UpdateTitlesInputDTO) => Promise<boolean>;
  deleteTitle: (id: string) => Promise<boolean>;
};

export const TitlesContext = createContext<TitlesContextProps | null>(null);

export const useTitles = () => {
  const context = useContext(TitlesContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};