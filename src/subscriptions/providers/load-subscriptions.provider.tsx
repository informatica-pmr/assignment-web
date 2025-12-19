import { useCallback, useEffect, useState, type ReactNode } from "react";
import { LoadSubscriptionsContext } from "../contexts/load-subscriptions.context";
import type { FindManySubscriptionsOutputDTO } from "../dtos/outputs/find-many-subscriptions.output.dto";
import { Fetch } from "../../shared/lib/fetch";
import type { FindManySubscriptionsInputDTO } from "../dtos/inputs/find-many-subscriptions.input.dto";
import { useAuth } from "../../auth/contexts/auth.context";

type LoadSubscriptionsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch("subscriptions");

export const LoadSubscriptionsProvider = ({ children }: LoadSubscriptionsProviderProps) => {
  const { yearId } = useAuth();
  const [subscriptions, setSubscriptions] = useState<FindManySubscriptionsOutputDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const findManySubscriptions = useCallback(async () => {
    try {
      const { data } = await fetch.get<
        FindManySubscriptionsOutputDTO[],
        FindManySubscriptionsInputDTO
      >({
        filters: {
          yearId: yearId.toString(),
        },
      });

      setSubscriptions(data ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [yearId]);

  useEffect(() => {
    findManySubscriptions();
  }, [findManySubscriptions]);

  return (
    <LoadSubscriptionsContext.Provider value={{ subscriptions, isLoading }}>
      {children}
    </LoadSubscriptionsContext.Provider>
  );
};
