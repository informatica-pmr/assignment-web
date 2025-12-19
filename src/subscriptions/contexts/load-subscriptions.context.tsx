import { createContext, useContext } from "react";
import type { FindManySubscriptionsOutputDTO } from "../dtos/outputs/find-many-subscriptions.output.dto";

type LoadSubscriptionsContextProps = {
  subscriptions: FindManySubscriptionsOutputDTO[];
  isLoading: boolean;
};

export const LoadSubscriptionsContext = createContext<LoadSubscriptionsContextProps | null>(null);

export const useLoadSubscriptions = () => {
  const context = useContext(LoadSubscriptionsContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};