import { Select } from '../../shared/components/select.component';
import { useLoadPositions } from '../contexts/load-positions.context';

type SelectPositionsProps = {
  all?: boolean;
  col: number;
  label?: string;
  disabled?: boolean;
  positionId: string | number;
  setPositionId: (value: string) => void;
};

export const SelectPositions = (props: SelectPositionsProps) => {
  const { positions } = useLoadPositions();

  return (
    <Select
      all={props.all}
      default={!props.all}
      col={props.col}
      label={props.label ?? 'Cargo'}
      disabled={props.disabled}
      value={props.positionId as string}
      setValue={props.setPositionId}
      data={positions.map((y) => ({
        value: y.positionId.toString(),
        display: y.name,
      }))}
    />
  );
};
