import { Select } from '../../shared/components/select.component';
import { useLoadTitles } from '../contexts/load-tiltes.context';

type SelectTitlesProps = {
  all?: boolean;
  col: number;
  label?: string;
  disabled?: boolean;
  titleId: string | number;
  setTitleId: (value: string) => void;
};

export const SelectTitles = (props: SelectTitlesProps) => {
  const { titles } = useLoadTitles();

  return (
    <Select
      all={props.all}
      default={!props.all}
      col={props.col}
      label={props.label ?? 'Título'}
      disabled={props.disabled}
      value={props.titleId as string}
      setValue={props.setTitleId}
      data={titles.map((y) => ({
        value: y.titleId.toString(),
        display: y.description,
      }))}
    />
  );
};
