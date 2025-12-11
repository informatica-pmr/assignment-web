/* eslint-disable react-hooks/use-memo */
import { useCallback, useState, type ReactNode } from "react";
import { PagesContext } from "../contexts/pages.context";

type PagesProviderProps = {
  children: ReactNode;
};

export const PagesProvider = ({ children }: PagesProviderProps) => {
  const [page, setPage] = useState<ReactNode>(<></>);

  const changePage = useCallback(setPage, [setPage]);
  return (
    <PagesContext.Provider value={{
      page,
      changePage,
    }}>{children}</PagesContext.Provider>
  );
};