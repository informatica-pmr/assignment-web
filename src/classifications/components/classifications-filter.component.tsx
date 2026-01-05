import { useEffect } from 'react';
import { InputText } from '../../shared/components/input-text.component';
import { Row } from '../../shared/components/row';
import { useClassificationsFilters } from '../contexts/classifications-filters.context';
import { useClassifications } from '../contexts/classifications.context';
import { SelectPositions } from '../../positions/components/select-positions.component';
import { SelectSituations } from '../../situations/components/select-situations.component';
import { SelectUnits } from '../../units/components/select-units.component';
import { Select } from '../../shared/components/select.component';
import { Report } from '../../shared/toolkit/report';

export const ClassificationsFilter = () => {
  const {
    name,
    positionId,
    situationId,
    unitId,
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
    changePositionId,
    changeSituationId,
    changeUnitId,
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
  } = useClassificationsFilters();
  const { findManyClassifications, classifications } = useClassifications();

  const handleExportClick = () => {
    const filters = ``;
    const fileName = '';
    const fileReference = '2026';
    const report = new Report(classifications, fileName, fileReference, filters);
    report.create();
    report.export();
  };

  useEffect(() => {
    findManyClassifications();
  }, [findManyClassifications]);

  return (
    <>
      <Row>
        <InputText col={12} label='nome' value={name} setValue={changeName} />
      </Row>
      <Row>
        <SelectPositions all col={4} positionId={positionId} setPositionId={changePositionId} />
        <SelectSituations
          all
          col={4}
          situationId={situationId}
          setSituationId={changeSituationId}
        />
        <SelectUnits all col={4} unitId={unitId} setUnitId={changeUnitId} />
      </Row>
      <Row>
        <Select
          all
          col={1}
          label='adido:'
          value={adido}
          setValue={changeAdido}
          data={[
            { value: 'Sim', display: 'sim' },
            { value: 'Não', display: 'não' },
          ]}
        />
        <Select
          all
          col={1}
          label='readaptado:'
          value={readapted}
          setValue={changeReadapted}
          data={[
            { value: 'Sim', display: 'sim' },
            { value: 'Não', display: 'não' },
          ]}
        />
        <Select
          all
          col={2}
          label='sala de leitura:'
          value={readingRoom}
          setValue={changeReadingRoom}
          data={[
            { value: 'Sim', display: 'sim' },
            { value: 'Não', display: 'não' },
          ]}
        />
        <Select
          all
          col={1}
          label='informática:'
          value={computing}
          setValue={changeComputing}
          data={[
            { value: 'Sim', display: 'sim' },
            { value: 'Não', display: 'não' },
          ]}
        />
        <Select
          all
          col={1}
          label='reforço:'
          value={tutoring}
          setValue={changeTutoring}
          data={[
            { value: 'Sim', display: 'sim' },
            { value: 'Não', display: 'não' },
          ]}
        />
        <Select
          all
          col={1}
          label='edu. amb.:'
          value={ambientalEducation}
          setValue={changeAmbientalEducation}
          data={[
            { value: 'Sim', display: 'sim' },
            { value: 'Não', display: 'não' },
          ]}
        />
        <Select
          all
          col={1}
          label='robotica:'
          value={robotics}
          setValue={changeRobotics}
          data={[
            { value: 'Sim', display: 'sim' },
            { value: 'Não', display: 'não' },
          ]}
        />
        <Select
          all
          col={1}
          label='música:'
          value={music}
          setValue={changeMusic}
          data={[
            { value: 'Sim', display: 'sim' },
            { value: 'Não', display: 'não' },
          ]}
        />
        <Select
          all
          col={2}
          label='carga suplementar:'
          value={supplementCharge}
          setValue={changeSupplementCharge}
          data={[
            { value: 'Sim', display: 'sim' },
            { value: 'Não', display: 'não' },
          ]}
        />
        <Select
          all
          col={1}
          label='remocão:'
          value={remove}
          setValue={changeRemove}
          data={[
            { value: 'Sim', display: 'sim' },
            { value: 'Não', display: 'não' },
          ]}
        />
      </Row>
      <hr />
      <div className='d-flex col-sm-12 gap-2 justify-content-center'>
        <button type='button' className='btn btn-primary' onClick={handleExportClick}>
          Gerar Relatório
        </button>
      </div>
    </>
  );
};
