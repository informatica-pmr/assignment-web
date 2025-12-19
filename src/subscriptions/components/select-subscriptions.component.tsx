import { Select } from "../../shared/components/select.component";
import { useLoadSubscriptions } from "../contexts/load-subscriptions.context";

type SelectSubscriptionsProps = {
  all?: boolean;
  col: number;
  label?: string;
  disabled?: boolean;
  subscriptionId: string | number;
  setSubscriptionId: (value: string) => void;
};

export const SelectSubscriptions = (props: SelectSubscriptionsProps) => {
  const { subscriptions } = useLoadSubscriptions();

  return (
    <Select
      all={props.all}
      default={!props.all}
      col={props.col}
      label={props.label ?? "unidade"}
      disabled={props.disabled}
      value={props.subscriptionId as string}
      setValue={props.setSubscriptionId}
      data={subscriptions.map((y) => ({
        value: y.subscriptionId.toString(),
        display: `${y.preferenceName} - ${y.teacherName} (${y.teacherUnit} - ${y.yearId})`,
      }))}
    />
  );
};
