import type { ReactNode } from "react";
import { Header } from "./header";
import { Container } from "./container";

type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Header/>
      <Container>
        {children}
      </Container>
    </>
  )
};

