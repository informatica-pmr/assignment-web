import { LoadYearsProvider } from '../years/providers/load-years.provider';

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <LoadYearsProvider>{children}</LoadYearsProvider>;
};
