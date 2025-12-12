import type { Pageable } from "../../../shared/dtos/inputs/pageable";

export type FindManyPositionsInputDTO = Pageable<{
  name?: string;
  active?: string;
}>;