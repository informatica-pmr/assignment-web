import { Select } from "../../shared/components/select.component";
import { useLoadCivilStatuses } from "../contexts/load-civil-statuses.context";

type SelectCivilStatusesProps = {
  all?: boolean;
  col: number;
  label?: string;
  disabled?: boolean;
  civilStatusId: string | number;
  setCivilStatusId: (value: string | number) => void;
};

export const SelectCivilStatuses = (props: SelectCivilStatusesProps) => {
  const { civilStatuses } = useLoadCivilStatuses();

  return (
    <Select
      all={props.all}
      default={!props.all}
      col={props.col}
      label={props.label ?? "estado civil"}
      disabled={props.disabled}
      value={props.civilStatusId as string}
      setValue={props.setCivilStatusId}
      data={civilStatuses.map((y) => ({
        value: y.civilStatusId.toString(),
        display: y.name,
      }))}
    />
  );
};
