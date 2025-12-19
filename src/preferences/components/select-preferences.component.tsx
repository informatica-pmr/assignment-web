import { Select } from "../../shared/components/select.component";
import { useLoadPreferences } from "../contexts/load-preferences.context";

type SelectPreferencesProps = {
  all?: boolean;
  col: number;
  label?: string;
  disabled?: boolean;
  preferenceId: string | number;
  setPreferenceId: (value: string | number) => void;
};

export const SelectPreferences = (props: SelectPreferencesProps) => {
  const { preferences } = useLoadPreferences();

  return (
    <Select
      all={props.all}
      default={!props.all}
      col={props.col}
      label={props.label ?? "preferência"}
      disabled={props.disabled}
      value={props.preferenceId as string}
      setValue={props.setPreferenceId}
      data={preferences.map((y) => ({
        value: y.preferenceId.toString(),
        display: y.name,
      }))}
    />
  );
};
