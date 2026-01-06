import type { Pageable } from '../../../shared/dtos/inputs/pageable';

export type FindManyUsersInputDTO = Pageable<{
  username?: string;
  email?: string;
  password?: string;
  name?: string;
  active?: string;
  role?: string;
}>;
