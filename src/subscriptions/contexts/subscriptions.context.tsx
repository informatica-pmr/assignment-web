import { createContext, useContext } from "react";
import type { CreateSubscriptionsInputDTO } from "../dtos/inputs/create-subscriptions.input.dto";
import type { UpdateSubscriptionsInputDTO } from "../dtos/inputs/update-subscriptions.input.dto";
import type { FindManySubscriptionsOutputDTO } from "../dtos/outputs/find-many-subscriptions.output.dto";
import type { FindOneSubscriptionsOutputDTO } from "../dtos/outputs/find-one-subscriptions.output.dto";

export type SubscriptionsContextProps = {
  subscriptions: FindManySubscriptionsOutputDTO[];
  findOneSubscription: (id: string) => Promise<FindOneSubscriptionsOutputDTO | undefined>;
  findManySubscriptions: () => Promise<void>;
  createSubscription: (createSubscriptionDTO: CreateSubscriptionsInputDTO) => Promise<boolean>;
  updateSubscription: (id: string, updateSubscriptionDTO: UpdateSubscriptionsInputDTO) => Promise<boolean>;
  deleteSubscription: (id: string) => Promise<boolean>;
};

export const SubscriptionsContext = createContext<SubscriptionsContextProps | null>(null);

export const useSubscriptions = () => {
  const context = useContext(SubscriptionsContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};