export type CreateSubscriptionsInputDTO = {
  yearId: number;
  teacherId: number;
  preferenceId: number;
  titles: CreateSubscriptionsTitlesInputDTO[];
  points: CreateSubscriptionsPointsInputDTO[];
};

export type CreateSubscriptionsTitlesInputDTO = {
  titleId: number;
  value: number;
};

export type CreateSubscriptionsPointsInputDTO = {
  description: string;
  order: number;
  points: number;
};