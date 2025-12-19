type InputTextProps = {
  col: number;
  label: string;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
  value: string | number;
  setValue?: (value: string) => void;
};

export const InputText = ({
  col,
  label,
  readonly,
  disabled,
  required,
  value,
  setValue,
}: InputTextProps) => {
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
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
      />
    </div>
  );
};
