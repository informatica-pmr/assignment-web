import type { Pageable } from "../../../shared/dtos/inputs/pageable";

export type FindManyCivilStatusesInputDTO = Pageable<{
  name?: string;
}>;