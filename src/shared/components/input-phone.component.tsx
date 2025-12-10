import { Formatter } from "../toolkit/formatter";

const formatter = new Formatter();

type InputPhoneProps = {
  col: number;
  label: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
  value: string;
  setValue: (value: string) => void;
};

export const InputPhone = ({
  col,
  label,
  readonly,
  disabled,
  required,
  value,
  setValue,
}: InputPhoneProps) => {
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
        value={formatter.phoneNumber(value)}
        onChange={(e) => setValue(formatter.unmaskPhoneNumber(e.target.value))}
      />
    </div>
  );
};
