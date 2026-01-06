import { useCallback, useState, type ReactNode } from 'react';
import { UsersFiltersContext } from '../contexts/users-filters.context';

type UsersFiltersProviderProps = {
  children: ReactNode;
};

export const UsersFiltersProvider = ({ children }: UsersFiltersProviderProps) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [active, setActive] = useState('');
  const [role, setRole] = useState('');

  const changeUsername = useCallback((value: string) => setUsername(value), []);
  const changeEmail = useCallback((value: string) => setEmail(value), []);
  const changePassword = useCallback((value: string) => setPassword(value), []);
  const changeName = useCallback((value: string) => setName(value), []);
  const changeActive = useCallback((value: string) => setActive(value), []);
  const changeRole = useCallback((value: string) => setRole(value), []);

  return (
    <UsersFiltersContext.Provider
      value={{
        username,
        email,
        password,
        name,
        active,
        role,
        changeUsername,
        changeEmail,
        changePassword,
        changeName,
        changeActive,
        changeRole,
      }}>
      {children}
    </UsersFiltersContext.Provider>
  );
};
