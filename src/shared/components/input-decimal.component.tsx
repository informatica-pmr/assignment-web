import { Formatter } from "../toolkit/formatter";

const formatter = new Formatter();

type InputDecimalProps = {
  col: number;
  label: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
  value: number;
  setValue: (value: number) => void;
};

export const InputDecimal = ({
  col,
  label,
  readonly,
  disabled,
  required,
  value,
  setValue,
}: InputDecimalProps) => {
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
        value={formatter.decimal(value)}
        onChange={(e) => setValue(Number(formatter.unmaskDecimal(e.target.value)))}
      />
    </div>
  );
};
