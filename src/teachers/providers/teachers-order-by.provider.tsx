import { useCallback, useState, type ReactNode } from 'react';
import { TeachersOrderByContext } from '../contexts/teachers-order-by.context';

type TeachersOrderByProviderProps = {
  children: ReactNode;
};

export const TeachersOrderByProvider = ({ children }: TeachersOrderByProviderProps) => {
  const [name, setName] = useState('');
  const [identity, setIdentity] = useState('');
  const [document, setDocument] = useState('');
  const [birthAt, setBirthAt] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [email, setEmail] = useState('');
  const [observations, setObservations] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [dependents, setDependents] = useState('');
  const [unit, setUnit] = useState('all');
  const [civilStatus, setCivilStatus] = useState('all');
  const [position, setPosition] = useState('all');
  const [discipline, setDiscipline] = useState('all');
  const [situation, setSituation] = useState('all');
  const [remove, setRemove] = useState('all');
  const [adido, setAdido] = useState('all');
  const [readapted, setReadapted] = useState('all');
  const [readingRoom, setReadingRoom] = useState('all');
  const [computing, setComputing] = useState('all');
  const [supplementCharge, setSupplementCharge] = useState('all');
  const [tutoring, setTutoring] = useState('all');
  const [ambientalEducation, setAmbientalEducation] = useState('all');
  const [robotics, setRobotics] = useState('all');
  const [music, setMusic] = useState('all');

  const changeName = useCallback((value: string) => setName(value), []);
  const changeIdentity = useCallback((value: string) => setIdentity(value), []);
  const changeDocument = useCallback((value: string) => setDocument(value), []);
  const changeBirthAt = useCallback((value: string) => setBirthAt(value), []);
  const changeAddress = useCallback((value: string) => setAddress(value), []);
  const changeNeighborhood = useCallback((value: string) => setNeighborhood(value), []);
  const changeCity = useCallback((value: string) => setCity(value), []);
  const changePostalCode = useCallback((value: string) => setPostalCode(value), []);
  const changePhone = useCallback((value: string) => setPhone(value), []);
  const changeCellphone = useCallback((value: string) => setCellphone(value), []);
  const changeEmail = useCallback((value: string) => setEmail(value), []);
  const changeObservations = useCallback((value: string) => setObservations(value), []);
  const changeSpeciality = useCallback((value: string) => setSpeciality(value), []);
  const changeDependents = useCallback((value: string) => setDependents(value), []);
  const changeUnit = useCallback((value: string) => setUnit(value), []);
  const changeCivilStatus = useCallback((value: string) => setCivilStatus(value), []);
  const changePosition = useCallback((value: string) => setPosition(value), []);
  const changeDiscipline = useCallback((value: string) => setDiscipline(value), []);
  const changeSituation = useCallback((value: string) => setSituation(value), []);
  const changeRemove = useCallback((value: string) => setRemove(value), []);
  const changeAdido = useCallback((value: string) => setAdido(value), []);
  const changeReadapted = useCallback((value: string) => setReadapted(value), []);
  const changeReadingRoom = useCallback((value: string) => setReadingRoom(value), []);
  const changeComputing = useCallback((value: string) => setComputing(value), []);
  const changeSupplementCharge = useCallback((value: string) => setSupplementCharge(value), []);
  const changeTutoring = useCallback((value: string) => setTutoring(value), []);
  const changeAmbientalEducation = useCallback((value: string) => setAmbientalEducation(value), []);
  const changeRobotics = useCallback((value: string) => setRobotics(value), []);
  const changeMusic = useCallback((value: string) => setMusic(value), []);

  return (
    <TeachersOrderByContext.Provider
      value={{
        name,
        identity,
        document,
        dependents,
        birthAt,
        address,
        neighborhood,
        city,
        postalCode,
        phone,
        cellphone,
        email,
        observations,
        unit,
        civilStatus,
        position,
        discipline,
        situation,
        speciality,
        remove,
        adido,
        readapted,
        readingRoom,
        computing,
        supplementCharge,
        tutoring,
        ambientalEducation,
        robotics,
        music,
        changeName,
        changeIdentity,
        changeDocument,
        changeBirthAt,
        changeAddress,
        changeNeighborhood,
        changeCity,
        changePostalCode,
        changePhone,
        changeCellphone,
        changeEmail,
        changeObservations,
        changeSpeciality,
        changeDependents,
        changeUnit,
        changeCivilStatus,
        changePosition,
        changeDiscipline,
        changeSituation,
        changeRemove,
        changeAdido,
        changeReadapted,
        changeReadingRoom,
        changeComputing,
        changeSupplementCharge,
        changeTutoring,
        changeAmbientalEducation,
        changeRobotics,
        changeMusic,
      }}>
      {children}
    </TeachersOrderByContext.Provider>
  );
};
