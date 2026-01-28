import { Select } from '../../shared/components/select.component';
import { useLoadYears } from '../contexts/load-years.context';

type SelectYearsProps = {
  all?: boolean;
  col: number;
  label?: string;
  disabled?: boolean;
  yearId: string | number;
  setYearId: (value: string) => void;
};

export const SelectYears = (props: SelectYearsProps) => {
  const { years } = useLoadYears();

  return (
    <Select
      all={props.all}
      default={!props.all}
      col={props.col}
      label={props.label ?? 'Ano'}
      disabled={props.disabled}
      value={props.yearId as string}
      setValue={props.setYearId}
      data={years.map((y) => ({
        value: y.yearId.toString(),
        display: y.yearId.toString(),
      }))}
    />
  );
};
