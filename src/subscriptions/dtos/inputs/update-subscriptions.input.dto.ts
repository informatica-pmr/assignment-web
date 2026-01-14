export type UpdateSubscriptionsInputDTO = {
  yearId?: number;
  teacherId?: number;
  preferenceId?: number;
  titles?: UpdateSubscriptionsTitlesInputDTO[];
};

export type UpdateSubscriptionsTitlesInputDTO = {
  titleId: number;
  value: number;
};
