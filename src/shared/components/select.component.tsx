export type SelectDataProps = {
  value: string;
  display: string;
};

type SelectProps = {
  col: number;
  label: string;
  all?: boolean;
  default?: boolean;
  disabled?: boolean;
  required?: boolean;
  value: string;
  data: SelectDataProps[];
  setValue: (value: string) => void;
};

export const Select = ({
  col,
  label,
  setValue,
  value,
  all,
  default: defaultProp,
  disabled,
  required,
  data,
}: SelectProps) => {
  const id = label.split(" ").join("-");

  return (
    <div className={`col-sm-${col}`}>
      <label htmlFor={id} className="form-label">
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <select
        name={id}
        id={id}
        className="form-control"
        disabled={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {all && <option value="all">TODOS</option>}{" "}
        {defaultProp && <option value="">SELECIONE</option>}
        {data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.display}
          </option>
        ))}
      </select>
    </div>
  );
};
