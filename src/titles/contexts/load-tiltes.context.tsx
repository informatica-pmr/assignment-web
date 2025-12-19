import { createContext, useContext } from "react";
import type { FindManyTitlesOutputDTO } from "../dtos/outputs/find-many-titles.output.dto";

type LoadTitlesContextProps = {
  titles: FindManyTitlesOutputDTO[];
  isLoading: boolean;
};

export const LoadTitlesContext = createContext<LoadTitlesContextProps | null>(null);

export const useLoadTitles = () => {
  const context = useContext(LoadTitlesContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};