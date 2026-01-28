import { Select } from '../../shared/components/select.component';
import { useLoadUnits } from '../contexts/load-units.context';

type SelectUnitsProps = {
  all?: boolean;
  col: number;
  label?: string;
  disabled?: boolean;
  unitId: string | number;
  setUnitId: (value: string) => void;
};

export const SelectUnits = (props: SelectUnitsProps) => {
  const { units } = useLoadUnits();

  return (
    <Select
      all={props.all}
      default={!props.all}
      col={props.col}
      label={props.label ?? 'Unidade'}
      disabled={props.disabled}
      value={props.unitId as string}
      setValue={props.setUnitId}
      data={units.map((y) => ({
        value: y.unitId.toString(),
        display: y.name,
      }))}
    />
  );
};
