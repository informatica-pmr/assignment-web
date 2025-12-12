import type { Pageable } from "../../../shared/dtos/inputs/pageable";

export type FindManySituationsInputDTO = Pageable<{
  name?: string;
}>;