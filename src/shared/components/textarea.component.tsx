type TextareaProps = {
  col: number;
  label: string;
  rows: number;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
  value: string;
  setValue: (value: string) => void;
};

export const Textarea = ({
  col,
  label,
  rows,
  setValue,
  value,
  disabled,
  readonly,
  required,
}: TextareaProps) => {
  const id = label.split(" ").join("-");

  return (
    <div className={`col-sm-${col}`}>
      <label htmlFor={id} className="form-label">
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <textarea
        id={id}
        className="form-control"
        disabled={disabled}
        readOnly={readonly}
        rows={rows}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  );
};
