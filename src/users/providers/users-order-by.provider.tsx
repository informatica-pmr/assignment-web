import { useCallback, useState, type ReactNode } from 'react';
import { UsersOrderByContext } from '../contexts/users-order-by.context';

type UsersOrderByProviderProps = {
  children: ReactNode;
};

export const UsersOrderByProvider = ({ children }: UsersOrderByProviderProps) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [active, setActive] = useState('');

  const changeUsername = useCallback((value: string) => setUsername(value), []);
  const changeEmail = useCallback((value: string) => setEmail(value), []);
  const changeName = useCallback((value: string) => setName(value), []);
  const changeActive = useCallback((value: string) => setActive(value), []);

  return (
    <UsersOrderByContext.Provider
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
    </UsersOrderByContext.Provider>
  );
};
