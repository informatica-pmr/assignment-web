import { Header } from './header';
import { Container } from './container';
import { Outlet, useNavigate } from 'react-router';
import { useAuth } from '../../auth/contexts/auth.context';
import { useEffect } from 'react';

export const Layout = () => {
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate('/auth/login');
    }
  }, [isLogged, navigate]);

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
