import { Formatter } from "../toolkit/formatter";

const formatter = new Formatter();

type InputNumberProps = {
  col: number;
  label: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
  value: number;
  setValue: (value: number) => void;
};

export const InputNumber = ({
  col,
  label,
  readonly,
  disabled,
  required,
  value,
  setValue,
}: InputNumberProps) => {
  const id = label.split(' ').join('-');
  return (
    <div className={`col-sm-${col}`}>
      <label htmlFor={id} className="form-label">
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        type="number"
        name={id}
        id={id}
        className="form-control"
        readOnly={readonly}
        disabled={disabled}
        value={value}
        onChange={(e) => setValue(Number(formatter.number(e.target.value)))}
      />
    </div>
  );
};
