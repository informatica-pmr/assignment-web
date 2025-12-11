import { createContext, useContext, type ReactNode } from "react";

type PagesContextProps = {
  page: ReactNode;
  changePage: (page: ReactNode) => void;
};

export const PagesContext = createContext<PagesContextProps | null>(null);

export const usePages = () => {
  const context = useContext(PagesContext);
  if (!context) {
    throw new Error('provider not found');
  }
  return context;
};