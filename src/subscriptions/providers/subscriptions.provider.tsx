import { useCallback, useState, type ReactNode } from 'react';
import { SubscriptionsContext } from '../contexts/subscriptions.context';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManySubscriptionsOutputDTO } from '../dtos/outputs/find-many-subscriptions.output.dto';
import type { FindOneSubscriptionsOutputDTO } from '../dtos/outputs/find-one-subscriptions.output.dto';
import { useSubscriptionsFilters } from '../contexts/subscriptions-filters.context';
import type { CreateSubscriptionsInputDTO } from '../dtos/inputs/create-subscriptions.input.dto';
import type { CreateSubscriptionsOutputDTO } from '../dtos/outputs/create-subscriptions.output.dto';
import type { UpdateSubscriptionsInputDTO } from '../dtos/inputs/update-subscriptions.input.dto';
import { usePagination } from '../../shared/contexts/pagination.context';
import type { FindManySubscriptionsInputDTO } from '../dtos/inputs/find-many-subscriptions.input.dto';
import { useAuth } from '../../auth/contexts/auth.context';
import { useNookies } from '../../shared/contexts/nookies.context';

type SubscriptionsProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('subscriptions');

export const SubscriptionsProvider = ({ children }: SubscriptionsProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const { yearId } = useAuth();
  const { page, size, changePagination } = usePagination();
  const filters = useSubscriptionsFilters();
  const [subscriptions, setSubscriptions] = useState<FindManySubscriptionsOutputDTO[]>([]);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findOneSubscription = useCallback(async (id: string) => {
    try {
      const { data } = await fetch.get<FindOneSubscriptionsOutputDTO | undefined>({
        id,
      });

      return data;
    } catch (err) {
      console.error(err);
    }
  }, []);
  const findManySubscriptions = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<
        FindManySubscriptionsOutputDTO[],
        FindManySubscriptionsInputDTO
      >({
        filters: {
          ...filters,
          yearId: yearId.toString(),
          page,
          size,
        },
      });

      setSubscriptions(data ?? []);
      changePagination(pagination);
    } catch (err) {
      console.error(err);
    }
  }, [filters, page, size, changePagination, yearId]);
  const createSubscription = useCallback(
    async (createSubscriptionDTO: CreateSubscriptionsInputDTO) => {
      try {
        await fetch.post<CreateSubscriptionsOutputDTO, CreateSubscriptionsInputDTO>(
          createSubscriptionDTO,
        );

        alert('inscrição criada com sucesso');

        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    },
    [],
  );
  const updateSubscription = useCallback(
    async (id: string, updateSubscriptionDTO: UpdateSubscriptionsInputDTO) => {
      try {
        await fetch.put<UpdateSubscriptionsInputDTO>(id, updateSubscriptionDTO);

        alert('inscrição atualizada com sucesso');

        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    },
    [],
  );
  const deleteSubscription = useCallback(async (id: string) => {
    try {
      await fetch.delete(id);

      alert('inscrição deletada com sucesso');

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }, []);
  return (
    <SubscriptionsContext.Provider
      value={{
        subscriptions,
        findOneSubscription,
        findManySubscriptions,
        createSubscription,
        updateSubscription,
        deleteSubscription,
      }}>
      {children}
    </SubscriptionsContext.Provider>
  );
};
