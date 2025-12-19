export type FindOneSubscriptionsOutputDTO = {
  yearId: number;
  subscriptionId: number;
  teacherId: number;
  preferenceId: number;
  teacher?: FindOneSubscriptionsTeacherOutputDTO;
  preference?: FindOneSubscriptionsPreferenceOutputDTO;
  titles?: FindOneSubscriptionsTitlesOutputDTO[];
  points?: FindOneSubscriptionsPointsOutputDTO[];
};

export type FindOneSubscriptionsTeacherOutputDTO = {
  teacherId: number;
  name: string;
};

export type FindOneSubscriptionsPreferenceOutputDTO = {
  preferenceId: number;
  name: string;
};

export type FindOneSubscriptionsTitlesOutputDTO = {
  subscriptionId: number;
  titleId: number;
  title: string;
  value: number;
};

export type FindOneSubscriptionsPointsOutputDTO = {
  subscriptionId: number;
  description: string;
  order: number;
  points: number;
};