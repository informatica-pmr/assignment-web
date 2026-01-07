export type UpdateUsersInputDTO = {
  username?: string;
  email?: string;
  password?: string;
  name?: string;
  active?: string;
  roleId?: string;
  units: UpdateUsersUnitsInputDTO[];
};

export type UpdateUsersUnitsInputDTO = {
  unitId: number;
};
