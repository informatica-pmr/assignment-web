import { createContext, useContext } from 'react';
import type { FindManyClassificationsOutputDTO } from '../dtos/outputs/find-many-classifications.output.dto';

export type ClassificationsContextProps = {
  classifications: FindManyClassificationsOutputDTO[];
  findManyClassifications: () => Promise<void>;
};

export const ClassificationsContext = createContext<ClassificationsContextProps | null>(null);

export const useClassifications = () => {
  const context = useContext(ClassificationsContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
