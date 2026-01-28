import { Select } from '../../shared/components/select.component';
import { useLoadDisciplines } from '../contexts/load-disciplines.context';

type SelectDisciplinesProps = {
  all?: boolean;
  col: number;
  label?: string;
  disabled?: boolean;
  disciplineId: string | number;
  setDisciplineId: (value: string | number) => void;
};

export const SelectDisciplines = (props: SelectDisciplinesProps) => {
  const { disciplines } = useLoadDisciplines();

  return (
    <Select
      all={props.all}
      default={!props.all}
      col={props.col}
      label={props.label ?? 'Disciplina'}
      disabled={props.disabled}
      value={props.disciplineId as string}
      setValue={props.setDisciplineId}
      data={disciplines.map((y) => ({
        value: y.disciplineId.toString(),
        display: y.name,
      }))}
    />
  );
};
