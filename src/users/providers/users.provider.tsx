import { useCallback, useState, type ReactNode } from 'react';
import { UsersContext } from '../contexts/users.context';
import { Fetch } from '../../shared/lib/fetch';
import type { FindOneUsersOutputDTO } from '../dtos/outputs/find-one-users.output.dto';
import type { CreateUsersInputDTO } from '../dtos/inputs/create-users.input.dto';
import type { UpdateUsersInputDTO } from '../dtos/inputs/update-users.input.dto';
import { usePagination } from '../../shared/contexts/pagination.context';
import { useUsersFilters } from '../contexts/users-filters.context';
import { useUsersOrderBy, type UsersOrderByContextProps } from '../contexts/users-order-by.context';
import type { FindManyUsersOutputDTO } from '../dtos/outputs/find-many-users.output.dto';
import type { FindManyUsersInputDTO } from '../dtos/inputs/find-many-users.input.dto';

type UsersProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('users');

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const filters = useUsersFilters();
  const orderBy = useUsersOrderBy();
  const { page, size, changePagination } = usePagination();
  const [users, setUsers] = useState<FindOneUsersOutputDTO[]>([]);

  const findOneUser = useCallback(async (username: string) => {
    try {
      const { data } = await fetch.get<FindOneUsersOutputDTO[]>({ id: username });
      if (!data || data.length === 0) {
        return undefined;
      }
      return data.at(0);
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }, []);

  const findManyUsers = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<
        FindManyUsersOutputDTO[],
        FindManyUsersInputDTO,
        UsersOrderByContextProps
      >({
        filters: {
          ...filters,
          page,
          size,
        },
        orderBy,
      });
      setUsers(data ?? []);
      changePagination(pagination);
    } catch (err) {
      console.error(err);
    }
  }, [changePagination, filters, orderBy, page, size]);

  const createUser = useCallback(async (createUserDTO: CreateUsersInputDTO) => {
    try {
      await fetch.post<CreateUsersInputDTO>(createUserDTO);
      alert('Usuário criado com sucesso!');
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }, []);

  const updateUser = useCallback(async (username: string, updateUserDTO: UpdateUsersInputDTO) => {
    try {
      await fetch.put<UpdateUsersInputDTO>(username, updateUserDTO);
      alert('Usuário atualizado com sucesso!');
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }, []);

  const deleteUser = useCallback(async (username: string) => {
    try {
      await fetch.delete<UpdateUsersInputDTO>(username);
      alert('Usuário deletado com sucesso!');
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }, []);

  return (
    <UsersContext.Provider
      value={{ users, findOneUser, findManyUsers, createUser, updateUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};
