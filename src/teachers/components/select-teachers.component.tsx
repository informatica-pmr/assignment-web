import { Select } from "../../shared/components/select.component";
import { useLoadTeachers } from "../contexts/load-teachers.context";

type SelectTeachersProps = {
  all?: boolean;
  col: number;
  label?: string;
  disabled?: boolean;
  teacherId: string | number;
  setTeacherId: (value: string) => void;
};

export const SelectTeachers = (props: SelectTeachersProps) => {
  const { teachers } = useLoadTeachers();

  return (
    <Select
      all={props.all}
      default={!props.all}
      col={props.col}
      label={props.label ?? "professor(a)"}
      disabled={props.disabled}
      value={props.teacherId as string}
      setValue={props.setTeacherId}
      data={teachers.map((y) => ({
        value: y.teacherId.toString(),
        display: y.name ?? '',
      }))}
    />
  );
};
