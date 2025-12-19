export type UpdateSubscriptionsInputDTO = {
  yearId?: number;
  teacherId?: number;
  preferenceId?: number;
  titles?: UpdateSubscriptionsTitlesInputDTO[];
  points?: UpdateSubscriptionsPointsInputDTO[];
};

export type UpdateSubscriptionsTitlesInputDTO = {
  titleId: number;
  value: number;
};

export type UpdateSubscriptionsPointsInputDTO = {
  description: string;
  order: number;
  points: number;
};