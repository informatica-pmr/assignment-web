import type { Pageable } from "../../../shared/dtos/inputs/pageable";

export type FindManySubscriptionsInputDTO = Pageable<{
  yearId?: string;
  teacherId?: string;
  preferenceId?: string;
}>;