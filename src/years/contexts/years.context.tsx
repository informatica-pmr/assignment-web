import { createContext, useContext } from "react";
import type { CreateYearsInputDTO } from "../dtos/inputs/create-years.input.dto";
import type { UpdateYearsInputDTO } from "../dtos/inputs/update-years.input.dto";
import type { FindManyYearsOutputDTO } from "../dtos/outputs/find-many-years.output.dto";
import type { FindOneYearsOutputDTO } from "../dtos/outputs/find-one-years.output.dto";

export type YearsContextProps = {
  years: FindManyYearsOutputDTO[];
  findOneYear: (id: string) => Promise<FindOneYearsOutputDTO | undefined>;
  findManyYears: () => Promise<void>;
  createYear: (createYearDTO: CreateYearsInputDTO) => Promise<boolean>;
  updateYear: (id: string, updateYearDTO: UpdateYearsInputDTO) => Promise<boolean>;
  deleteYear: (id: string) => Promise<boolean>;
};

export const YearsContext = createContext<YearsContextProps | null>(null);

export const useYears = () => {
  const context = useContext(YearsContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};