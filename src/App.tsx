import { useState } from "react";
import "./App.css";
import { InputText } from "./shared/components/input-text.component";
import { Layout } from "./shared/components/layout";
import { Row } from "./shared/components/row";
import { InputNumber } from "./shared/components/input-number.component";
import { InputDate } from "./shared/components/input-date.component";
import { InputDocument } from "./shared/components/input-document.component";
import { InputPhone } from "./shared/components/input-phone.component";
import { Select } from "./shared/components/select.component";
import { Textarea } from "./shared/components/textarea.component";

function App() {
  const [value, setValue] = useState("");
  const [valueDate, setValueDate] = useState("");
  const [valueDocument, setValueDocument] = useState("");
  const [valueSelect, setValueSelect] = useState("all");
  const [valueTextarea, setValueTextarea] = useState("teste");
  const [valuePhone, setValuePhone] = useState("");
  const [valueNumber, setValueNumber] = useState(0);
  return (
    <>
      <Layout>
        <Row>
          <InputText
            col={2}
            label="texto"
            required
            value={value}
            setValue={setValue}
          />
          <InputNumber
            col={2}
            label="numero"
            value={valueNumber}
            setValue={setValueNumber}
          />
          <InputDate
            col={2}
            label="data"
            value={valueDate}
            setValue={setValueDate}
          />
          <InputDocument
            col={2}
            label="documento"
            value={valueDocument}
            setValue={setValueDocument}
          />
          <InputPhone
            col={2}
            label="telefone"
            value={valuePhone}
            setValue={setValuePhone}
          />
          <Select
            col={2}
            all
            label="seleção"
            value={valueSelect}
            setValue={setValueSelect}
            data={[{ value: "1", display: "teste" }]}
          />
        </Row>

        <Row>
          <Textarea
            col={12}
            label="texto amplo"
            rows={5}
            value={valueTextarea}
            setValue={setValueTextarea}
          />
        </Row>
      </Layout>
    </>
  );
}

export default App;
