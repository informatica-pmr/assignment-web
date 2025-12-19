import { useEffect, useState } from "react";
import { useTeachers } from "../contexts/teachers.context";
import { usePages } from "../../shared/contexts/pages.context";
import { Row } from "../../shared/components/row";
import { InputText } from "../../shared/components/input-text.component";
import { TeachersIndexPage } from "../pages/teachers-index.page";
import { SelectCivilStatuses } from "../../civil-statuses/components/select-civil-statuses.component";
import { SelectDisciplines } from "../../disciplines/components/select-disciplines.component";
import { SelectPositions } from "../../positions/components/select-positions.component";
import { InputDate } from "../../shared/components/input-date.component";
import { InputDocument } from "../../shared/components/input-document.component";
import { InputEmail } from "../../shared/components/input-email.component";
import { InputNumber } from "../../shared/components/input-number.component";
import  { InputPhone } from "../../shared/components/input-phone.component";
import { Select } from "../../shared/components/select.component";
import { Textarea } from "../../shared/components/textarea.component";
import { SelectSituations } from "../../situations/components/select-situations.component";
import { SelectUnits } from "../../units/components/select-units.component";
import { Formatter } from "../../shared/toolkit/formatter";

type UpdateTeacherFormProps = {
  id: string;
};

const formatter = new Formatter();

export const UpdateTeacherForm = ({ id }: UpdateTeacherFormProps) => {
  const { findOneTeacher, updateTeacher } = useTeachers();
  const { changePage } = usePages();

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
  const [dependents, setDependents] = useState(0);
  const [yearId, setYearId] = useState(0);
  const [unitId, setUnitId] = useState(0);
  const [civilStatusId, setCivilStatusId] = useState(0);
  const [positionId, setPositionId] = useState(0);
  const [disciplineId, setDisciplineId] = useState(0);
  const [situationId, setSituationId] = useState(0);
  const [remove, setRemove] = useState("N");
  const [adido, setAdido] = useState("N");
  const [readapted, setReadapted] = useState("N");
  const [readingRoom, setReadingRoom] = useState("N");
  const [computing, setComputing] = useState("N");
  const [supplementCharge, setSupplementCharge] = useState("N");
  const [tutoring, setTutoring] = useState("N");
  const [ambientalEducation, setAmbientalEducation] = useState("N");
  const [robotics, setRobotics] = useState("N");
  const [music, setMusic] = useState("N");

  useEffect(() => {
    const load = async () => {
      const teacher = await findOneTeacher(id);
      if (!teacher) {
        return;
      }
      setYearId(teacher.yearId);
      setName(teacher.name ?? '');
      setIdentity(teacher.identity ?? '');
      setDocument(teacher.document ?? '');
      setAddress(teacher.address ?? '');
      setNeighborhood(teacher.neighborhood ?? '');
      setCity(teacher.city ?? '');
      setPostalCode(teacher.postalCode ?? '');
      setPhone(teacher.phone ?? '');
      setCellphone(teacher.cellphone ?? '');
      setEmail(teacher.email ?? '');
      setObservations(teacher.observations ?? '');
      setSpeciality(teacher.speciality ?? '');
      setBirthAt(teacher.birthAt ?? '');
      setDependents(teacher.dependents ?? 0);
      setUnitId(teacher.unitId);
      setPositionId(teacher.positionId);
      setSituationId(teacher.situationId);
      setDisciplineId(teacher.disciplineId ?? 0);
      setCivilStatusId(teacher.civilStatusId);
      setAdido(teacher.adido ?? 'N');
      setRemove(teacher.remove ?? 'N');
      setAmbientalEducation(teacher.AmbientalEducation ?? 'N');
      setComputing(teacher.computing ?? 'N');
      setMusic(teacher.music ?? 'N');
      setReadapted(teacher.readapted ?? 'N');
      setReadingRoom(teacher.readingRoom ?? 'N');
      setRobotics(teacher.robotics ?? 'N');
      setSupplementCharge(teacher.supplementCharge ?? 'N');
      setTutoring(teacher.tutoring ?? 'N');
    };

    if (id !== "") {
      load();
    }
  }, [findOneTeacher, id]);

  const handleSubmit = async () => {
    if (!name || name === "") {
      alert("campo nome inválido");
      return;
    }

    const updated = await updateTeacher(id, {
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
    });

    if (updated) {
      changePage(<TeachersIndexPage />);
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
        <InputText col={8} label="nome" value={name} setValue={setName} />
      </Row>
      <Row>
        <InputText
          col={2}
          label="rg:"
          value={identity}
          setValue={setIdentity}
        />
        <InputDocument
          col={3}
          label="cpf:"
          value={document}
          setValue={setDocument}
        />
        <InputDate
          col={2}
          label="data de nascimento"
          value={birthAt}
          setValue={setBirthAt}
        />
        <SelectCivilStatuses
          col={3}
          civilStatusId={civilStatusId.toString()}
          setCivilStatusId={(v) =>
            setCivilStatusId(formatter.number(v as string))
          }
        />
        <InputNumber
          col={2}
          label="nº dependentes:"
          value={dependents}
          setValue={setDependents}
        />
      </Row>
      <Row>
        <InputText
          col={4}
          label="endereço:"
          value={address}
          setValue={setAddress}
        />
        <InputText
          col={3}
          label="bairro:"
          value={neighborhood}
          setValue={setNeighborhood}
        />
        <InputText col={3} label="cidade:" value={city} setValue={setCity} />
        <InputText
          col={2}
          label="cep:"
          value={postalCode}
          setValue={setPostalCode}
        />
      </Row>
      <Row>
        <InputPhone
          col={2}
          label="telefone:"
          value={phone}
          setValue={setPhone}
        />
        <InputPhone
          col={2}
          label="celular:"
          value={cellphone}
          setValue={setCellphone}
        />
        <InputEmail col={8} label="e-mail:" value={email} setValue={setEmail} />
      </Row>
      <Row>
        <Textarea
          col={12}
          rows={3}
          label="observações:"
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
          setDisciplineId={(e) =>
            setDisciplineId(formatter.number(e as string))
          }
        />
        <SelectSituations
          col={2}
          situationId={situationId.toString()}
          setSituationId={(e) => setSituationId(formatter.number(e as string))}
        />
        <Select
          col={2}
          label="remocão:"
          value={remove}
          setValue={setRemove}
          data={[
            { value: "S", display: "sim" },
            { value: "N", display: "não" },
          ]}
        />
      </Row>
      <Row>
        <Select
          col={2}
          label="adido:"
          value={adido}
          setValue={setAdido}
          data={[
            { value: "S", display: "sim" },
            { value: "N", display: "não" },
          ]}
        />
        <Select
          col={2}
          label="readaptado:"
          value={readapted}
          setValue={setReadapted}
          data={[
            { value: "S", display: "sim" },
            { value: "N", display: "não" },
          ]}
        />
        <Select
          col={2}
          label="sala de leitura:"
          value={readingRoom}
          setValue={setReadingRoom}
          data={[
            { value: "S", display: "sim" },
            { value: "N", display: "não" },
          ]}
        />
        <Select
          col={2}
          label="informática:"
          value={computing}
          setValue={setComputing}
          data={[
            { value: "S", display: "sim" },
            { value: "N", display: "não" },
          ]}
        />
        <Select
          col={2}
          label="reforço:"
          value={tutoring}
          setValue={setTutoring}
          data={[
            { value: "S", display: "sim" },
            { value: "N", display: "não" },
          ]}
        />
        <Select
          col={2}
          label="educação ambiental:"
          value={ambientalEducation}
          setValue={setAmbientalEducation}
          data={[
            { value: "S", display: "sim" },
            { value: "N", display: "não" },
          ]}
        />
      </Row>
      <Row>
        <Select
          col={2}
          label="robotica:"
          value={robotics}
          setValue={setRobotics}
          data={[
            { value: "S", display: "sim" },
            { value: "N", display: "não" },
          ]}
        />
        <Select
          col={2}
          label="música:"
          value={music}
          setValue={setMusic}
          data={[
            { value: "S", display: "sim" },
            { value: "N", display: "não" },
          ]}
        />
        <Select
          col={2}
          label="carga suplementar:"
          value={supplementCharge}
          setValue={setSupplementCharge}
          data={[
            { value: "S", display: "sim" },
            { value: "N", display: "não" },
          ]}
        />
        <InputText
          col={6}
          label="especialidade"
          value={speciality}
          setValue={setSpeciality}
        />
      </Row>
      <hr />
      <Row>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => changePage(<TeachersIndexPage />)}
          >
            voltar
          </button>
        </div>
        <div className="col-sm-2 ms-auto">
          <button
            type="submit"
            className="btn btn-success w-100"
            onClick={() => handleSubmit()}
          >
            salvar
          </button>
        </div>
      </Row>
    </>
  );
};
