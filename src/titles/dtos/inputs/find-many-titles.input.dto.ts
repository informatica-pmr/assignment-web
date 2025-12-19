import type { Pageable } from "../../../shared/dtos/inputs/pageable";

export type FindManyTitlesInputDTO = Pageable<{
  yearId?: string;
  description?: string;
  alias?: string;
  weight?: string;
  max?: string;
  order?: string;
  type?: string;
  active?: string;
}>;