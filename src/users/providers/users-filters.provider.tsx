import { useCallback, useState, type ReactNode } from 'react';
import { UsersFiltersContext } from '../contexts/users-filters.context';

type UsersFiltersProviderProps = {
  children: ReactNode;
};

export const UsersFiltersProvider = ({ children }: UsersFiltersProviderProps) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [active, setActive] = useState('');

  const changeUsername = useCallback((value: string) => setUsername(value), []);
  const changeEmail = useCallback((value: string) => setEmail(value), []);
  const changeName = useCallback((value: string) => setName(value), []);
  const changeActive = useCallback((value: string) => setActive(value), []);

  return (
    <UsersFiltersContext.Provider
      value={{
        username,
        email,
        name,
        active,
        changeUsername,
        changeEmail,
        changeName,
        changeActive,
      }}>
      {children}
    </UsersFiltersContext.Provider>
  );
};
