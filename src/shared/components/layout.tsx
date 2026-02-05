import { Header } from './header';
import { Container } from './container';
import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useNookies } from '../contexts/nookies.context';

export const Layout = () => {
  const { getAccessToken, getExpiresIn } = useNookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (!getAccessToken()) {
      navigate('/auth/login');
    }
    if (new Date() > new Date(getExpiresIn() ?? '')) {
      navigate('/auth/login');
    }
  }, [getAccessToken, navigate, getExpiresIn]);

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
