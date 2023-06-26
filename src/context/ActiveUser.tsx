import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Children,
} from "react";

interface UserProps {
  age: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ActiveUserProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  activeUser: UserProps | null;
  setActiveUser: React.Dispatch<React.SetStateAction<UserProps | null>>;
}

interface ActiveUserProviderProps {
  children: ReactNode;
}

export const ActiveUserContext = createContext<ActiveUserProps>(
  {} as ActiveUserProps
);

export const ActiveUserProvider = ({ children }: ActiveUserProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<UserProps | null>(null);

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("activeUser")) {
      setActiveUser(JSON.parse(localStorage.getItem("activeUser")!));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (activeUser) {
      localStorage.setItem("activeUser", JSON.stringify(activeUser));
    }
  }, [activeUser, isLoading]);
  return (
    <ActiveUserContext.Provider
      value={{ isLoading, setIsLoading, activeUser, setActiveUser }}
    >
      {children}
    </ActiveUserContext.Provider>
  );
};
