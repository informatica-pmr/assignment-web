import type { ReactNode } from "react";

type RowProps = Readonly<{
  children: ReactNode;
}>;

export const Row = ({ children }: RowProps) => {
  return <div className="row">{children}</div>;
};
