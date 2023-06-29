import React, { useState, useEffect, createContext, ReactNode } from "react";

interface AdminI {
  email: string;
  password: string;
  isActive?: boolean;
}
interface AdminContextI {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  admin: AdminI | null;
  setAdmin: React.Dispatch<React.SetStateAction<AdminI | null>>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
interface AdminProviderI {
  children: ReactNode;
}

export const AdminContext = createContext<AdminContextI>({} as AdminContextI);

const AdminProvider = ({ children }: AdminProviderI) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [admin, setAdmin] = useState<AdminI | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("admin")) {
      setAdmin(JSON.parse(localStorage.getItem("admin")!));
    }
    if (localStorage.getItem("activeAdmin")) {
      setIsActive(JSON.parse(localStorage.getItem("activeAdmin")!));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (admin) {
      localStorage.setItem("admin", JSON.stringify(admin));
    }
    if (isActive) {
      localStorage.setItem("activeAdmin", JSON.stringify(isActive));
    }
  }, [admin, isLoading]);

  return (
    <AdminContext.Provider
      value={{
        isLoading,
        setIsLoading,
        admin,
        setAdmin,
        isActive,
        setIsActive,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
