import { useCallback, useState, type ReactNode } from 'react';
import { UsersOrderByContext } from '../contexts/users-order-by.context';

type UsersOrderByProviderProps = {
  children: ReactNode;
};

export const UsersOrderByProvider = ({ children }: UsersOrderByProviderProps) => {
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
    <UsersOrderByContext.Provider
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
    </UsersOrderByContext.Provider>
  );
};
