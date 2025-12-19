export type CreateTitlesInputDTO = {
  yearId: number;
  description: string;
  alias: string | null;
  weight: number | null;
  max: number | null;
  order: number | null;
  type: string | null;
  active: string | null;
};