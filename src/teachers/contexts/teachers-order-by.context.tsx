import { createContext, useContext } from 'react';

export type TeachersOrderByContextProps = {
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
  unit: string;
  civilStatus: string;
  position: string;
  discipline: string;
  situation: string;
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
  changeUnit: (value: string) => void;
  changeCivilStatus: (value: string) => void;
  changePosition: (value: string) => void;
  changeDiscipline: (value: string) => void;
  changeSituation: (value: string) => void;
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

export const TeachersOrderByContext = createContext<TeachersOrderByContextProps | null>(null);

export const useTeachersOrderBy = () => {
  const context = useContext(TeachersOrderByContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};
