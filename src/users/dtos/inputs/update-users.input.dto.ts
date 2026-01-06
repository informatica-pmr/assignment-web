export type UpdateUsersInputDTO = {
  username?: string;
  email?: string;
  password?: string;
  name?: string;
  active?: string;
  role?: string;
  units: UpdateUsersUnitsInputDTO[];
};

export type UpdateUsersUnitsInputDTO = {
  unitId: number;
};
