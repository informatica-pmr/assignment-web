import { createContext, useContext } from 'react';

export type ClassificationsFiltersContextProps = {
  name: string;
  yearId: string;
  positionId: string;
  situationId: string;
  unitId: string;
  remove: string;
  adido: string;
  readapted: string;
  readingRoom: string;
  computing: string;
  supplementCharge: string;
  tutoring: string;
  ambientalEducation: string;
  robotics: string;
  music: string;
  changeName: (value: string) => void;
  changeYearId: (value: string) => void;
  changePositionId: (value: string) => void;
  changeSituationId: (value: string) => void;
  changeUnitId: (value: string) => void;
  changeRemove: (value: string) => void;
  changeAdido: (value: string) => void;
  changeReadapted: (value: string) => void;
  changeReadingRoom: (value: string) => void;
  changeComputing: (value: string) => void;
  changeSupplementCharge: (value: string) => void;
  changeTutoring: (value: string) => void;
  changeAmbientalEducation: (value: string) => void;
  changeRobotics: (value: string) => void;
  changeMusic: (value: string) => void;
};

export const ClassificationsFiltersContext =
  createContext<ClassificationsFiltersContextProps | null>(null);

export const useClassificationsFilters = () => {
  const context = useContext(ClassificationsFiltersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
