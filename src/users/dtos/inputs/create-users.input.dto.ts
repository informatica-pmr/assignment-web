export type CreateUsersInputDTO = {
  username: string;
  email: string;
  password: string;
  name: string;
  active: string;
  roleId: string;
  units: CreateUsersUnitsInputDTO[];
};

export type CreateUsersUnitsInputDTO = {
  unitId: number;
};
