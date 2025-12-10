import { Formatter } from "../toolkit/formatter";

const formatter = new Formatter();

type InputDocumentProps = {
  col: number;
  label: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
  value: string;
  setValue: (value: string) => void;
};

export const InputDocument = ({
  col,
  label,
  readonly,
  disabled,
  required,
  value,
  setValue,
}: InputDocumentProps) => {
  const id = label.split(' ').join('-');
  return (
    <div className={`col-sm-${col}`}>
      <label htmlFor={id} className="form-label">
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        className="form-control"
        readOnly={readonly}
        disabled={disabled}
        value={formatter.document(value)}
        onChange={(e) => setValue(formatter.unmaskDocument(e.target.value))}
      />
    </div>
  );
};
