import { createContext, useContext } from "react";
import type { FindManyCivilStatusesOutputDTO } from "../dtos/outputs/find-many-civil-statuses.output.dto";

type LoadCivilStatusesContextProps = {
  civilStatuses: FindManyCivilStatusesOutputDTO[];
  isLoading: boolean;
};

export const LoadCivilStatusesContext = createContext<LoadCivilStatusesContextProps | null>(null);

export const useLoadCivilStatuses = () => {
  const context = useContext(LoadCivilStatusesContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};