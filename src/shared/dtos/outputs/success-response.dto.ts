export type Pagination = {
  page: number;
  totalPages: number;
  totalRecords: number;
  recordsPerPage: number;
};

export type SuccessResponseDTO<T = object> = {
  data?: T;
  pagination?: Pagination;
};