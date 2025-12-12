import { useEffect, useState } from "react";
import { useUnits } from "../contexts/units.context";
import { usePages } from "../../shared/contexts/pages.context";
import { Row } from "../../shared/components/row";
import { InputText } from "../../shared/components/input-text.component";
import { UnitsIndexPage } from "../pages/units-index.page";

type UpdateUnitFormProps = {
  id: string;
};

export const UpdateUnitForm = ({ id }: UpdateUnitFormProps) => {
  const { findOneUnit, updateUnit } = useUnits();
  const { changePage } = usePages();

  const [name, setName] = useState("");

  useEffect(() => {
    const load = async () => {
      const unit = await findOneUnit(id);
      if (!unit) {
        return;
      }
      setName(unit.name);
    };

    if (id !== "") {
      load();
    }
  }, [findOneUnit, id]);

  const handleSubmit = async () => {
    if (!name || name === "") {
      alert("campo ficha inválido");
      return;
    }

    const updated = await updateUnit(id, {
      name,
    });

    if (updated) {
      changePage(<UnitsIndexPage />);
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
            onClick={() => changePage(<UnitsIndexPage />)}
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
