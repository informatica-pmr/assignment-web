export type Pageable<T = object> = T & {
  page?: string;
  size?: string;
};