import { useState } from "react";
import { useDisciplines } from "../contexts/disciplines.context";
import { usePages } from "../../shared/contexts/pages.context";
import { Row } from "../../shared/components/row";
import { InputText } from "../../shared/components/input-text.component";
import { DisciplinesIndexPage } from "../pages/disciplines-index.page";

export const CreateDisciplineForm = () => {
  const { createDiscipline } = useDisciplines();
  const { changePage } = usePages();

  const [name, setName] = useState("");

  const handleSubmit = async () => {
    if (!name || name === "") {
      alert("campo nome inválido");
      return;
    }

    const created = await createDiscipline({
      name,
    });

    if (created) {
      changePage(<DisciplinesIndexPage />);
    }
  };

  return (
    <>
      <Row>
        <InputText col={12} label="nome" value={name} setValue={setName} />
      </Row>
      <hr />
      <Row>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => changePage(<DisciplinesIndexPage />)}
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
