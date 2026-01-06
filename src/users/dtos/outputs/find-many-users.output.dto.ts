export type FindManyUsersOutputDTO = {
  username: string;
  email: string;
  password: string;
  name: string;
  active: string;
  role: {
    value: string;
    displayValue: string;
  };
};
