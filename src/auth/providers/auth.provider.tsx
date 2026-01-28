/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Fetch } from '../../shared/lib/fetch';
import { useNookies } from '../../shared/contexts/nookies.context';
import type { LoginAuthInputDTO } from '../dtos/inputs/login-auth.input.dto';
import type { LoginAuthOutputDTO } from '../dtos/output/login-auth.output.dto';
import type { ResetPasswordAuthDTO } from '../dtos/inputs/reset-password-auth.input.dto';
import { toast } from 'react-toastify';
import type { SuccessResponseDTO } from '../../shared/dtos/outputs/success-response.dto';

type AuthProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('auth');

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { setAccessToken, deleteAccessToken, getAccessToken } = useNookies();
  const [isLogged, setIsLogged] = useState(false);
  const [yearId, setYearId] = useState(0);
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      const payload = token.split('.').at(1) ?? '';

      const { sub, user, role, year } = JSON.parse(atob(payload) || '{}');
      setIsLogged(true);
      setUserId(sub);
      setUsername(user);
      setRole(role);
      setYearId(Number(year));
    }
  }, [getAccessToken]);

  const login = useCallback(
    async ({ yearId, username, password }: LoginAuthInputDTO) => {
      try {
        const { data } = (await fetch.post<LoginAuthOutputDTO, LoginAuthInputDTO>({
          yearId,
          username,
          password,
        })) as SuccessResponseDTO<LoginAuthOutputDTO>;

        if (!data) {
          return false;
        }

        const payload = data.accessToken.split('.').at(1) ?? '';

        const { sub, user, role, year } = JSON.parse(atob(payload) || '{}');
        setIsLogged(true);
        setUserId(sub);
        setUsername(user);
        setRole(role);
        setYearId(Number(year));

        setAccessToken(data.accessToken);

        return true;
      } catch (err) {
        fetch.handleError(err);
        return false;
      }
    },
    [setAccessToken],
  );

  const logout = useCallback(() => {
    deleteAccessToken();
    setIsLogged(false);
    setUserId('');
    setUsername('');
    setRole('');
    setYearId(0);
  }, [deleteAccessToken]);

  const reset = useCallback(async (username: string, resetPasswordDTO: ResetPasswordAuthDTO) => {
    try {
      await fetch.patch<ResetPasswordAuthDTO>(username, resetPasswordDTO);

      toast('Senha alterada com sucesso', { type: 'success' });

      return true;
    } catch (err) {
      fetch.handleError(err);

      return false;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        yearId,
        userId,
        username,
        role,
        login,
        logout,
        reset,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
