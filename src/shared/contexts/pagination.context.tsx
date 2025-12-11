'use client';
import { useContext, createContext } from 'react';
import type { Pagination } from '../dtos/outputs/success-response.dto';

type PaginationContextProps = {
  page: string;
  size: string;
  pagination?: Pagination;
  to: number;
  from: number;
  siblingPages: number[];
  changePagination: (pagination?: Pagination) => void;
};

export const PaginationContext = createContext({} as PaginationContextProps);

export const usePagination = () => useContext(PaginationContext);
