import type { Pageable } from '../../../shared/dtos/inputs/pageable';

export type FindManyClassificationsInputDTO = Pageable<{
  name?: string;
  yearId?: string;
  positionId?: string;
  situationId?: string;
  unitId?: string;
  remove?: string;
  adido?: string;
  readapted?: string;
  readingRoom?: string;
  computing?: string;
  supplementCharge?: string;
  tutoring?: string;
  ambientalEducation?: string;
  robotics?: string;
  music?: string;
}>;
