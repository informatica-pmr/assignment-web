import { useEffect, useState } from "react";
import { usePositions } from "../contexts/positions.context";
import { usePages } from "../../shared/contexts/pages.context";
import { Row } from "../../shared/components/row";
import { InputText } from "../../shared/components/input-text.component";
import { PositionsIndexPage } from "../pages/positions-index.page";
import { Select } from "../../shared/components/select.component";

type UpdatePositionFormProps = {
  id: string;
};

export const UpdatePositionForm = ({ id }: UpdatePositionFormProps) => {
  const { findOnePosition, updatePosition } = usePositions();
  const { changePage } = usePages();

  const [name, setName] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    const load = async () => {
      const position = await findOnePosition(id);
      if (!position) {
        return;
      }
      setName(position.name);
      setActive(position.active)
    };

    if (id !== "") {
      load();
    }
  }, [findOnePosition, id]);

  const handleSubmit = async () => {
    if (!name || name === "") {
      alert("campo nome inválido");
      return;
    }

    const updated = await updatePosition(id, {
      name,
      active,
    });

    if (updated) {
      changePage(<PositionsIndexPage />);
    }
  };

  return (
    <>
      <Row>
        <InputText col={10} label="nome" value={name} setValue={setName} />
        <Select
          col={2}
          label="ativo"
          value={active}
          setValue={setActive}
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
            onClick={() => changePage(<PositionsIndexPage />)}
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
