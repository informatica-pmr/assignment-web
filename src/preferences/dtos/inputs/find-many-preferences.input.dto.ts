import type { Pageable } from "../../../shared/dtos/inputs/pageable";

export type FindManyPreferencesInputDTO = Pageable<{
  name?: string;
}>;