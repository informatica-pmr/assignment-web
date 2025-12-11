import { Header } from "./header";
import { Container } from "./container";
import { usePages } from "../contexts/pages.context";

export const Layout = () => {
  const {page} = usePages();
  return (
    <>
      <Header/>
      <Container>
        {page}
      </Container>
    </>
  )
};

