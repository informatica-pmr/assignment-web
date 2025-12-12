import { useState } from "react";
import { useYears } from "../contexts/years.context";
import { usePages } from "../../shared/contexts/pages.context";
import { YearsIndexPage } from "../pages/years-index.page";
import { Row } from "../../shared/components/row";
import { InputNumber } from "../../shared/components/input-number.component";
import { InputText } from "../../shared/components/input-text.component";
import { Select } from "../../shared/components/select.component";

export const CreateYearForm = () => {
  const { createYear } = useYears();
  const { changePage } = usePages();

  const [year, setYear] = useState(new Date().getFullYear());
  const [record, setRecord] = useState("");
  const [resolution, setResolution] = useState("");
  const [isBlocked, setIsBlocked] = useState("N");

  const handleSubmit = async () => {
    if (year < new Date().getFullYear() || year > new Date().getFullYear()+1) {
      alert("campo ano inválido");
      return;
    }

    if (!record || record === "") {
      alert("campo ficha inválido");
      return;
    }

    if (!resolution || resolution === "") {
      alert("campo resolução inválido");
      return;
    }

    if (!isBlocked || isBlocked === "") {
      alert("campo bloqueado inválido");
      return;
    }

    const created = await createYear({
      yearId: year,
      record,
      resolution,
      isBlocked,
    });

    if (created) {
      changePage(<YearsIndexPage />);
    }
  };

  return (
    <>
      <Row>
        <InputNumber col={1} label="ano" value={year} setValue={setYear} />
        <InputText col={4} label="ficha" value={record} setValue={setRecord} />
        <InputText
          col={6}
          label="resolução"
          value={resolution}
          setValue={setResolution}
        />
        <Select
          col={1}
          label="bloqueado"
          value={isBlocked}
          setValue={setIsBlocked}
          data={[
            { value: "S", display: "sim" },
            { value: "N", display: "não" },
          ]}
        />
      </Row>
      <hr />
      <Row>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => changePage(<YearsIndexPage />)}
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
