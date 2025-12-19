/* eslint-disable react-hooks/use-memo */
import { useCallback, useState, type ReactNode } from "react";
import { TeachersFiltersContext } from "../contexts/teachers-filters.context";

type TeachersFiltersProviderProps = {
  children: ReactNode;
};

export const TeachersFiltersProvider = ({
  children,
}: TeachersFiltersProviderProps) => {
  const [name, setName] = useState("");
  const [identity, setIdentity] = useState("");
  const [document, setDocument] = useState("");
  const [birthAt, setBirthAt] = useState("");
  const [address, setAddress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [email, setEmail] = useState("");
  const [observations, setObservations] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [dependents, setDependents] = useState("");
  const [yearId, setYearId] = useState("all");
  const [unitId, setUnitId] = useState("all");
  const [civilStatusId, setCivilStatusId] = useState("all");
  const [positionId, setPositionId] = useState("all");
  const [disciplineId, setDisciplineId] = useState("all");
  const [situationId, setSituationId] = useState("all");
  const [remove, setRemove] = useState("all");
  const [adido, setAdido] = useState("all");
  const [readapted, setReadapted] = useState("all");
  const [readingRoom, setReadingRoom] = useState("all");
  const [computing, setComputing] = useState("all");
  const [supplementCharge, setSupplementCharge] = useState("all");
  const [tutoring, setTutoring] = useState("all");
  const [ambientalEducation, setAmbientalEducation] = useState("all");
  const [robotics, setRobotics] = useState("all");
  const [music, setMusic] = useState("all");

  const changeName = useCallback(setName, [setName]);
  const changeIdentity = useCallback(setIdentity, [setIdentity]);
  const changeDocument = useCallback(setDocument, [setDocument]);
  const changeBirthAt = useCallback(setBirthAt, [setBirthAt]);
  const changeAddress = useCallback(setAddress, [setAddress]);
  const changeNeighborhood = useCallback(setNeighborhood, [setNeighborhood]);
  const changeCity = useCallback(setCity, [setCity]);
  const changePostalCode = useCallback(setPostalCode, [setPostalCode]);
  const changePhone = useCallback(setPhone, [setPhone]);
  const changeCellphone = useCallback(setCellphone, [setCellphone]);
  const changeEmail = useCallback(setEmail, [setEmail]);
  const changeObservations = useCallback(setObservations, [setObservations]);
  const changeSpeciality = useCallback(setSpeciality, [setSpeciality]);
  const changeDependents = useCallback(setDependents, [setDependents]);
  const changeYearId = useCallback(setYearId, [setYearId]);
  const changeUnitId = useCallback(setUnitId, [setUnitId]);
  const changeCivilStatusId = useCallback(setCivilStatusId, [setCivilStatusId]);
  const changePositionId = useCallback(setPositionId, [setPositionId]);
  const changeDisciplineId = useCallback(setDisciplineId, [setDisciplineId]);
  const changeSituationId = useCallback(setSituationId, [setSituationId]);
  const changeRemove = useCallback(setRemove, [setRemove]);
  const changeAdido = useCallback(setAdido, [setAdido]);
  const changeReadapted = useCallback(setReadapted, [setReadapted]);
  const changeReadingRoom = useCallback(setReadingRoom, [setReadingRoom]);
  const changeComputing = useCallback(setComputing, [setComputing]);
  const changeSupplementCharge = useCallback(setSupplementCharge, [
    setSupplementCharge,
  ]);
  const changeTutoring = useCallback(setTutoring, [setTutoring]);
  const changeAmbientalEducation = useCallback(setAmbientalEducation, [
    setAmbientalEducation,
  ]);
  const changeRobotics = useCallback(setRobotics, [setRobotics]);
  const changeMusic = useCallback(setMusic, [setMusic]);

  return (
    <TeachersFiltersContext.Provider
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
        yearId,
        unitId,
        civilStatusId,
        positionId,
        disciplineId,
        situationId,
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
        changeYearId,
        changeUnitId,
        changeCivilStatusId,
        changePositionId,
        changeDisciplineId,
        changeSituationId,
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
      }}
    >
      {children}
    </TeachersFiltersContext.Provider>
  );
};
