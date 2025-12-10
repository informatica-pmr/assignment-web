import type { Pageable } from "../../../shared/dtos/inputs/pageable";

export type FindManyYearsInputDTO = Pageable<{
  yearId?: number;
  record?: string;
  resolution?: string;
  isBloqued?: boolean;
}>;