import { Select } from '../../shared/components/select.component';
import { useLoadSituations } from '../contexts/load-situations.context';

type SelectSituationsProps = {
  all?: boolean;
  col: number;
  label?: string;
  disabled?: boolean;
  situationId: string | number;
  setSituationId: (value: string) => void;
};

export const SelectSituations = (props: SelectSituationsProps) => {
  const { situations } = useLoadSituations();

  return (
    <Select
      all={props.all}
      default={!props.all}
      col={props.col}
      label={props.label ?? 'Situação'}
      disabled={props.disabled}
      value={props.situationId as string}
      setValue={props.setSituationId}
      data={situations.map((y) => ({
        value: y.situationId.toString(),
        display: y.name,
      }))}
    />
  );
};
