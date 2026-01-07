import { createContext, useContext } from 'react';
import type { CreateUsersInputDTO } from '../dtos/inputs/create-users.input.dto';
import type { UpdateUsersInputDTO } from '../dtos/inputs/update-users.input.dto';
import type { FindOneUsersOutputDTO } from '../dtos/outputs/find-one-users.output.dto';
import type { FindManyUsersOutputDTO } from '../dtos/outputs/find-many-users.output.dto';

type UsersContextProps = {
  users: FindManyUsersOutputDTO[];
  findOneUser: (username: string) => Promise<FindOneUsersOutputDTO | undefined>;
  findManyUsers: () => Promise<void>;
  createUser: (createUserDTO: CreateUsersInputDTO) => Promise<boolean>;
  updateUser: (username: string, updateUserDTO: UpdateUsersInputDTO) => Promise<boolean>;
  deleteUser: (username: string) => Promise<boolean>;
};

export const UsersContext = createContext<UsersContextProps | null>(null);

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUsersContext must be used within a UsersProvider');
  }
  return context;
};
