import React from 'react';

type NavigateContextProps = {
  navigate: (path?: string, delta?: number) => void;
};

export const NavigateContext = React.createContext<NavigateContextProps | null>(null);

export const useNavigate = () => {
  const context = React.useContext(NavigateContext);
  if (!context) {
    throw new Error('useNavigate must be used within a NavigateProvider');
  }
  return context.navigate;
};
