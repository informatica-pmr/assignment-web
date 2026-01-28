import { useState } from 'react';
import { useTeachers } from '../contexts/teachers.context';
import { Row } from '../../shared/components/row';
import { InputText } from '../../shared/components/input-text.component';
import { InputDocument } from '../../shared/components/input-document.component';
import { InputDate } from '../../shared/components/input-date.component';
import { Select } from '../../shared/components/select.component';
import { Formatter } from '../../shared/toolkit/formatter';
import { InputNumber } from '../../shared/components/input-number.component';
import { InputPhone } from '../../shared/components/input-phone.component';
import { InputEmail } from '../../shared/components/input-email.component';
import { Textarea } from '../../shared/components/textarea.component';
import { useAuth } from '../../auth/contexts/auth.context';
import { SelectUnits } from '../../units/components/select-units.component';
import { SelectCivilStatuses } from '../../civil-statuses/components/select-civil-statuses.component';
import { SelectPositions } from '../../positions/components/select-positions.component';
import { SelectDisciplines } from '../../disciplines/components/select-disciplines.component';
import { SelectSituations } from '../../situations/components/select-situations.component';
import { toast } from 'react-toastify';
import { useNavigate } from '../../shared/contexts/navigate.context';
import { FormFooter } from '../../shared/components/form-footer.component';

const formatter = new Formatter();

export const CreateTeacherForm = () => {
  const { yearId } = useAuth();
  const { createTeacher } = useTeachers();
  const navigate = useNavigate();

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
  const [dependents, setDependents] = useState(0);
  const [unitId, setUnitId] = useState(0);
  const [civilStatusId, setCivilStatusId] = useState(0);
  const [positionId, setPositionId] = useState(0);
  const [disciplineId, setDisciplineId] = useState(0);
  const [situationId, setSituationId] = useState(0);
  const [remove, setRemove] = useState('N');
  const [adido, setAdido] = useState('N');
  const [readapted, setReadapted] = useState('N');
  const [readingRoom, setReadingRoom] = useState('N');
  const [computing, setComputing] = useState('N');
  const [supplementCharge, setSupplementCharge] = useState('N');
  const [tutoring, setTutoring] = useState('N');
  const [ambientalEducation, setAmbientalEducation] = useState('N');
  const [robotics, setRobotics] = useState('N');
  const [music, setMusic] = useState('N');

  const handleSubmit = async () => {
    if (!name || name === '') {
      toast('campo nome inválido', { type: 'error' });
      return;
    }
    if (!identity || identity === '') {
      toast('campo rg inválido', { type: 'error' });
      return;
    }
    if (!document || document === '') {
      toast('campo cpf inválido', { type: 'error' });
      return;
    }
    if (!birthAt || birthAt === '') {
      toast('campo nascimento inválido', { type: 'error' });
      return;
    }
    if (!address || address === '') {
      toast('campo endereço inválido', { type: 'error' });
      return;
    }
    if (!neighborhood || neighborhood === '') {
      toast('campo bairro inválido', { type: 'error' });
      return;
    }
    if (!city || city === '') {
      toast('campo cidade inválido', { type: 'error' });
      return;
    }
    if (!postalCode || postalCode === '') {
      toast('campo cep inválido', { type: 'error' });
      return;
    }
    if (!phone || phone === '') {
      toast('campo telefone inválido', { type: 'error' });
      return;
    }
    if (!cellphone || cellphone === '') {
      toast('campo celular inválido', { type: 'error' });
      return;
    }
    if (!email || email === '') {
      toast('campo e-mail inválido', { type: 'error' });
      return;
    }
    if (!unitId || unitId === 0) {
      toast('campo unidade inválido', { type: 'error' });
      return;
    }
    if (!positionId || positionId === 0) {
      toast('campo cargo inválido', { type: 'error' });
      return;
    }
    if (!situationId || situationId === 0) {
      toast('campo situação inválido', { type: 'error' });
      return;
    }
    if (!civilStatusId || civilStatusId === 0) {
      toast('campo estado civil inválido', { type: 'error' });
      return;
    }

    const created = await createTeacher({
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
      disciplineId: disciplineId === 0 ? null : disciplineId,
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
    });

    if (created) {
      navigate('/teachers');
    }
  };

  return (
    <>
      <Row>
        <SelectUnits
          col={4}
          unitId={unitId.toString()}
          setUnitId={(e) => setUnitId(formatter.number(e as string))}
        />
        <InputText col={8} label='Nome' value={name} setValue={setName} />
      </Row>
      <Row>
        <InputText col={2} label='RG:' value={identity} setValue={setIdentity} />
        <InputDocument col={3} label='CPF:' value={document} setValue={setDocument} />
        <InputDate col={2} label='Data de nascimento' value={birthAt} setValue={setBirthAt} />
        <SelectCivilStatuses
          col={3}
          civilStatusId={civilStatusId.toString()}
          setCivilStatusId={(v) => setCivilStatusId(formatter.number(v as string))}
        />
        <InputNumber col={2} label='Nº Dependentes:' value={dependents} setValue={setDependents} />
      </Row>
      <Row>
        <InputText col={4} label='Endereço:' value={address} setValue={setAddress} />
        <InputText col={3} label='Bairro:' value={neighborhood} setValue={setNeighborhood} />
        <InputText col={3} label='Cidade:' value={city} setValue={setCity} />
        <InputText col={2} label='CEP:' value={postalCode} setValue={setPostalCode} />
      </Row>
      <Row>
        <InputPhone col={2} label='Telefone:' value={phone} setValue={setPhone} />
        <InputPhone col={2} label='Celular:' value={cellphone} setValue={setCellphone} />
        <InputEmail col={8} label='E-mail:' value={email} setValue={setEmail} />
      </Row>
      <Row>
        <Textarea
          col={12}
          rows={3}
          label='Observações:'
          value={observations}
          setValue={setObservations}
        />
      </Row>
      <Row>
        <SelectPositions
          col={3}
          positionId={positionId.toString()}
          setPositionId={(e) => setPositionId(formatter.number(e as string))}
        />
        <SelectDisciplines
          col={5}
          disciplineId={disciplineId.toString()}
          setDisciplineId={(e) => setDisciplineId(formatter.number(e as string))}
        />
        <SelectSituations
          col={2}
          situationId={situationId.toString()}
          setSituationId={(e) => setSituationId(formatter.number(e as string))}
        />
        <Select
          col={2}
          label='Remocão:'
          value={remove}
          setValue={setRemove}
          data={[
            { value: 'S', display: 'sim' },
            { value: 'N', display: 'não' },
          ]}
        />
      </Row>
      <Row>
        <Select
          col={2}
          label='Adido:'
          value={adido}
          setValue={setAdido}
          data={[
            { value: 'S', display: 'sim' },
            { value: 'N', display: 'não' },
          ]}
        />
        <Select
          col={2}
          label='Readaptado:'
          value={readapted}
          setValue={setReadapted}
          data={[
            { value: 'S', display: 'sim' },
            { value: 'N', display: 'não' },
          ]}
        />
        <Select
          col={2}
          label='Sala de leitura:'
          value={readingRoom}
          setValue={setReadingRoom}
          data={[
            { value: 'S', display: 'sim' },
            { value: 'N', display: 'não' },
          ]}
        />
        <Select
          col={2}
          label='Informática:'
          value={computing}
          setValue={setComputing}
          data={[
            { value: 'S', display: 'sim' },
            { value: 'N', display: 'não' },
          ]}
        />
        <Select
          col={2}
          label='Reforço:'
          value={tutoring}
          setValue={setTutoring}
          data={[
            { value: 'S', display: 'sim' },
            { value: 'N', display: 'não' },
          ]}
        />
        <Select
          col={2}
          label='Educação Ambiental:'
          value={ambientalEducation}
          setValue={setAmbientalEducation}
          data={[
            { value: 'S', display: 'sim' },
            { value: 'N', display: 'não' },
          ]}
        />
      </Row>
      <Row>
        <Select
          col={2}
          label='Robótica:'
          value={robotics}
          setValue={setRobotics}
          data={[
            { value: 'S', display: 'sim' },
            { value: 'N', display: 'não' },
          ]}
        />
        <Select
          col={2}
          label='Música:'
          value={music}
          setValue={setMusic}
          data={[
            { value: 'S', display: 'sim' },
            { value: 'N', display: 'não' },
          ]}
        />
        <Select
          col={2}
          label='Carga Suplementar:'
          value={supplementCharge}
          setValue={setSupplementCharge}
          data={[
            { value: 'S', display: 'sim' },
            { value: 'N', display: 'não' },
          ]}
        />
        <InputText col={6} label='Especialidade' value={speciality} setValue={setSpeciality} />
      </Row>
      <hr />
      <FormFooter handleSubmit={handleSubmit} />
    </>
  );
};
