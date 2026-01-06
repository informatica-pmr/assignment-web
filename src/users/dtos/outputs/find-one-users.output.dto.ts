export type FindOneUsersOutputDTO = {
  username: string;
  email: string;
  password: string;
  name: string;
  active: string;
  role: {
    value: string;
    displayValue: string;
  };
  units?: FindOneUsersUnitsOutputDTO[];
};

export type FindOneUsersUnitsOutputDTO = {
  userLogin: string;
  unitId: number;
  unitName: string;
};
