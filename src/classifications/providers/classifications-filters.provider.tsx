import { useCallback, useState, type ReactNode } from 'react';
import { ClassificationsFiltersContext } from '../contexts/classifications-filters.context';

type ClassificationsFiltersProviderProps = {
  children: ReactNode;
};

export const ClassificationsFiltersProvider = ({
  children,
}: ClassificationsFiltersProviderProps) => {
  const [name, setName] = useState('');
  const [yearId, setYearId] = useState('2025');
  const [unitId, setUnitId] = useState('all');
  const [positionId, setPositionId] = useState('all');
  const [situationId, setSituationId] = useState('all');
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
  const changeYearId = useCallback((value: string) => setYearId(value), []);
  const changeUnitId = useCallback((value: string) => setUnitId(value), []);
  const changePositionId = useCallback((value: string) => setPositionId(value), []);
  const changeSituationId = useCallback((value: string) => setSituationId(value), []);
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
    <ClassificationsFiltersContext.Provider
      value={{
        name,
        yearId,
        positionId,
        situationId,
        unitId,
        adido,
        remove,
        readapted,
        readingRoom,
        computing,
        supplementCharge,
        tutoring,
        ambientalEducation,
        robotics,
        music,
        changeName,
        changeYearId,
        changeUnitId,
        changePositionId,
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
      }}>
      {children}
    </ClassificationsFiltersContext.Provider>
  );
};
