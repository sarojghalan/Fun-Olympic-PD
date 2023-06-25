import React, { useState, createContext, useEffect, ReactNode } from "react";

interface UserI {
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  age: string;
}
interface UserContextI {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserI | null;
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>;
}

interface UserProviderI {
  children: ReactNode;
}

export const UserContext = createContext<UserContextI>({} as UserContextI);

const UserProvider = ({ children }: UserProviderI) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserI | null>(null);

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")!));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user, isLoading]);

  return (
    <UserContext.Provider value={{ isLoading, setIsLoading, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
