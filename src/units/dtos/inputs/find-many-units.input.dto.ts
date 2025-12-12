import type { Pageable } from "../../../shared/dtos/inputs/pageable";

export type FindManyUnitsInputDTO = Pageable<{
  name?: string;
}>;