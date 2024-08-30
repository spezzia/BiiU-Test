'use client';

import { GetCurrentUser } from '@/api/project/auth';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface User {
  isAuthenticated: boolean | null;
  setIsAuthenticated: Dispatch<SetStateAction<boolean | null>>;
}

const UserContext = createContext<User>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const getUser = async () => {
    try {
      let currentUser = await GetCurrentUser();
      if (currentUser) {
        setIsAuthenticated(true);
        return;
      }
      setIsAuthenticated(false);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
