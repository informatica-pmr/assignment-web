import { createContext, useContext } from "react";

export type TeachersFiltersContextProps = {
  name: string;
  identity: string;
  document: string;
  dependents: string;
  birthAt: string;
  address: string;
  neighborhood: string;
  city: string;
  postalCode: string;
  phone: string;
  cellphone: string;
  email: string;
  observations: string;
  yearId: string;
  unitId: string;
  civilStatusId: string;
  positionId: string;
  disciplineId: string;
  situationId: string;
  speciality: string;
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
  changeIdentity: (value: string) => void;
  changeDocument: (value: string) => void;
  changeDependents: (value: string) => void;
  changeBirthAt: (value: string) => void;
  changeAddress: (value: string) => void;
  changeNeighborhood: (value: string) => void;
  changeCity: (value: string) => void;
  changePostalCode: (value: string) => void;
  changePhone: (value: string) => void;
  changeCellphone: (value: string) => void;
  changeEmail: (value: string) => void;
  changeObservations: (value: string) => void;
  changeYearId: (value: string) => void;
  changeUnitId: (value: string) => void;
  changeCivilStatusId: (value: string) => void;
  changePositionId: (value: string) => void;
  changeDisciplineId: (value: string) => void;
  changeSituationId: (value: string) => void;
  changeSpeciality: (value: string) => void;
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

export const TeachersFiltersContext = createContext<TeachersFiltersContextProps | null>(null);

export const useTeachersFilters = () => {
  const context = useContext(TeachersFiltersContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};