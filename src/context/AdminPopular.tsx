import React, { useState, useEffect, createContext, ReactNode } from "react";

interface AdminPopular {
  title: string;
  url: string;
  description: string;
}

interface AdminContextI {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  adminPopular: AdminPopular[] | null | undefined;
  setAdminPopular: React.Dispatch<
    React.SetStateAction<AdminPopular[] | null | undefined>
  >;
}
interface AdminPopularProviderI {
  children: ReactNode;
}

export const AdminPopularContext = createContext<AdminContextI>(
  {} as AdminContextI
);

const AdminPopularProvider = ({ children }: AdminPopularProviderI) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [adminPopular, setAdminPopular] = useState<
    AdminPopular[] | null | undefined
  >(null);

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("live")) {
      setAdminPopular(JSON.parse(localStorage.getItem("live")!));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (adminPopular) {
      localStorage.setItem("live", JSON.stringify(adminPopular));
    }
  }, [adminPopular, isLoading]);

  return (
    <AdminPopularContext.Provider
      value={{
        isLoading,
        setIsLoading,
        adminPopular,
        setAdminPopular,
      }}
    >
      {children}
    </AdminPopularContext.Provider>
  );
};

export default AdminPopularProvider;
