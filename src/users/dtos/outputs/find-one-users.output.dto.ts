export type FindOneUsersOutputDTO = {
  username: string;
  email: string;
  name: string;
  active: string;
  roleId: number;
  userRole?: {
    username: string;
    roleId: number;
    roleDescription: string;
  };
  usersUnits?: FindOneUsersUnitsOutputDTO[];
};

export type FindOneUsersUnitsOutputDTO = {
  userLogin: string;
  unitId: number;
  unitName: string;
};
