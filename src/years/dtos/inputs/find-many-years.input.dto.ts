import type { Pageable } from "../../../shared/dtos/inputs/pageable";

export type FindManyYearsInputDTO = Pageable<{
  yearId?: string;
  record?: string;
  resolution?: string;
  isBlocked?: string;
}>;