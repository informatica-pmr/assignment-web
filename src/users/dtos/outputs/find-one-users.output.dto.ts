export type FindOneUsersOutputDTO = {
  username: string;
  email: string;
  name: string;
  active: string;
  roleId: number;
  unitId: number;
  userRole?: {
    username: string;
    roleId: number;
    roleDescription: string;
  };
  userUnit?: FindOneUsersUnitsOutputDTO;
};

export type FindOneUsersUnitsOutputDTO = {
  userLogin: string;
  unitId: number;
  unitName: string;
};
