import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Formatter } from '../../shared/toolkit/formatter';
import type {
  CreateSubscriptionsPointsInputDTO,
  CreateSubscriptionsTitlesInputDTO,
} from '../dtos/inputs/create-subscriptions.input.dto';
import { useLoadTitles } from '../../titles/contexts/load-tiltes.context';
import type {
  FindOneSubscriptionsPointsOutputDTO,
  FindOneSubscriptionsTitlesOutputDTO,
} from '../dtos/outputs/find-one-subscriptions.output.dto';
import type { FindManyTitlesOutputDTO } from '../../titles/dtos/outputs/find-many-titles.output.dto';

const formatter = new Formatter();

type SubscriptionTitlesFormProps = {
  className?: string;
  disabled?: boolean;
};
export type SubscriptionTitlesFormElement = {
  setTitles: (titles: FindOneSubscriptionsTitlesOutputDTO[]) => void;
  setPoints: (points: FindOneSubscriptionsPointsOutputDTO[]) => void;
  getTitles: () => CreateSubscriptionsTitlesInputDTO[];
  getPoints: () => CreateSubscriptionsPointsInputDTO[];
};

export const SubscriptionTitlesForm = forwardRef<
  SubscriptionTitlesFormElement,
  SubscriptionTitlesFormProps
>((_props, ref) => {
  const { titles } = useLoadTitles();

  const [subscriptionTitles, setSubscriptionTitles] = useState<CreateSubscriptionsTitlesInputDTO[]>(
    [],
  );
  const [points, setPoints] = useState<CreateSubscriptionsPointsInputDTO[]>([]);

  useEffect(() => {
    if (titles.length === 0) {
      return;
    }
    if (subscriptionTitles.length === titles.length) {
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSubscriptionTitles(
      titles.sort((a, b) => a.order! - b.order!).map((t) => ({ titleId: t.titleId, value: 0 })),
    );
    if (points.length === titles.length) {
      return;
    }
    setPoints(
      titles
        .sort((a, b) => a.order! - b.order!)
        .map((t) => ({
          description: t.description,
          order: t.order!,
          points: 0,
        })),
    );
  }, [points.length, subscriptionTitles.length, titles]);

  useImperativeHandle(
    ref,
    () => ({
      setTitles: (newTitles: FindOneSubscriptionsTitlesOutputDTO[]) => {
        setSubscriptionTitles(newTitles);
      },
      setPoints: (newPoints: FindOneSubscriptionsPointsOutputDTO[]) => {
        setPoints(newPoints);
      },
      getTitles: () => subscriptionTitles,
      getPoints: () => points,
    }),
    [subscriptionTitles, points],
  );

  return (
    <table className='table table-bordered table-sm'>
      <thead>
        <tr>
          <th>descrição</th>
          <th>peso</th>
          <th>máximo</th>
          <th>valor</th>
          <th>pontos</th>
        </tr>
      </thead>

      <tbody>
        {points.map((p) => {
          const title: FindManyTitlesOutputDTO | undefined = titles.find(
            (t) => t.description === p.description,
          );
          if (!title) return null;
          return (
            <tr key={title.titleId}>
              <td>{title.description}</td>
              <td>{formatter.decimal(title.weight ?? 0)}</td>
              <td>{formatter.decimal(title.max ?? 0)}</td>
              <td>
                <input
                  type='text'
                  className='form-control form-control-sm'
                  value={formatter.decimal(
                    subscriptionTitles.find((st) => st.titleId === title.titleId)?.value ?? 0,
                  )}
                  onChange={(e) => {
                    const value = formatter.unmaskDecimal(e.target.value);
                    const subTitle = subscriptionTitles.find((st) => st.titleId === title.titleId);
                    if (!subTitle) return;
                    subTitle.value = value;
                    setSubscriptionTitles([...subscriptionTitles]);
                    const _points = value * (title.weight ?? 0);
                    p.points = _points > title.max! ? title.max! : _points;
                    setPoints([...points]);
                  }}
                />
              </td>
              <td>{formatter.decimal(p.points)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});

SubscriptionTitlesForm.displayName = 'SubscriptionTitlesForm';
