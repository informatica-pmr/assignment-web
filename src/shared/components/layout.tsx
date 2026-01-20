import { Header } from './header';
import { Container } from './container';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
