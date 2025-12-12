import type { Pageable } from "../../../shared/dtos/inputs/pageable";

export type FindManyDisciplinesInputDTO = Pageable<{
  name?: string;
}>;