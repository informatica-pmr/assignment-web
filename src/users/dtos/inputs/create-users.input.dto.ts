export type CreateUsersInputDTO = {
  username: string;
  email: string;
  password: string;
  name: string;
  active: string;
  role: string;
  units: CreateUsersUnitsInputDTO[];
};

export type CreateUsersUnitsInputDTO = {
  unitId: number;
};
