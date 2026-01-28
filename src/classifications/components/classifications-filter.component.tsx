import { InputText } from '../../shared/components/input-text.component';
import { Row } from '../../shared/components/row';
import { useClassificationsFilters } from '../contexts/classifications-filters.context';
import { useClassifications } from '../contexts/classifications.context';
import { SelectPositions } from '../../positions/components/select-positions.component';
import { SelectSituations } from '../../situations/components/select-situations.component';
import { SelectUnits } from '../../units/components/select-units.component';
import { Select } from '../../shared/components/select.component';
import { Report } from '../../shared/toolkit/report';
import { useLoadPositions } from '../../positions/contexts/load-positions.context';
import { useLoadSituations } from '../../situations/contexts/load-situations.context';
import { useLoadUnits } from '../../units/contexts/load-units.context';
import { useAuth } from '../../auth/contexts/auth.context';

export const ClassificationsFilter = () => {
  const { yearId } = useAuth();
  const { positions } = useLoadPositions();
  const { situations } = useLoadSituations();
  const { units } = useLoadUnits();
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
  const { findManyClassificationsRP } = useClassifications();

  const handleExportClick = async () => {
    const classifications = await findManyClassificationsRP();
    const filters = ``;
    const position =
      positionId !== 'all'
        ? `${positions.find((p) => p.positionId === Number(positionId))!.name.toUpperCase()} - `
        : '';
    const situation =
      situationId !== 'all'
        ? `${situations.find((s) => s.situationId === Number(situationId))!.name.toUpperCase()} - `
        : '';
    const unit =
      unitId !== 'all'
        ? units.find((u) => u.unitId === Number(unitId))!.name.toUpperCase()
        : 'GERAL';
    let flag = '';
    if (adido === 'Sim') {
      flag += 'ADIDO - ';
    }
    if (readapted === 'Sim') {
      flag += 'READAPTADO - ';
    }
    if (remove === 'Sim') {
      flag += 'REMOÇÃO - ';
    }
    if (readingRoom === 'Sim') {
      flag += 'SALA DE LEITURA - ';
    }
    if (computing === 'Sim') {
      flag += 'INFORMÁTICA - ';
    }
    if (tutoring === 'Sim') {
      flag += 'REFORÇO - ';
    }
    if (ambientalEducation === 'Sim') {
      flag += 'EDUCAÇÃO AMBIENTAL - ';
    }
    if (robotics === 'Sim') {
      flag += 'ROBÓTICA - ';
    }
    if (music === 'Sim') {
      flag += 'MÚSICA - ';
    }
    const fileName = `${position}${situation}${flag}${unit}`;
    const fileReference = `${yearId}`;
    const report = new Report(classifications, fileName, fileReference, filters);
    report.create();
    report.export();
  };

  return (
    <>
      <Row>
        <InputText col={12} label='Nome' value={name} setValue={changeName} />
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
          label='Adido:'
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
          label='Readaptado:'
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
          label='Sala de Leitura:'
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
          label='Informática:'
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
          label='Reforço:'
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
          label='Edu. Amb.:'
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
          label='Robótica:'
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
          label='Música:'
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
          label='Carga Suplementar:'
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
          label='Remocão:'
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
