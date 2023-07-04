import React, { useState, useEffect, createContext, ReactNode } from "react";

interface AdminLiveI {
  title: string;
  url: string;
}
interface AdminContextI {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  adminLive: AdminLiveI[] | null | undefined;
  setAdminLive: React.Dispatch<
    React.SetStateAction<AdminLiveI[] | null | undefined>
  >;
}
interface AdminLiveProviderI {
  children: ReactNode;
}

export const AdminLiveContext = createContext<AdminContextI>(
  {} as AdminContextI
);

const AdminLiveProvider = ({ children }: AdminLiveProviderI) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [adminLive, setAdminLive] = useState<
    AdminLiveI[] | null | undefined
  >(null);

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("live")) {
      setAdminLive(JSON.parse(localStorage.getItem("live")!));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (adminLive) {
      localStorage.setItem("live", JSON.stringify(adminLive));
    }
  }, [adminLive, isLoading]);

  return (
    <AdminLiveContext.Provider
      value={{
        isLoading,
        setIsLoading,
        adminLive,
        setAdminLive,
      }}
    >
      {children}
    </AdminLiveContext.Provider>
  );
};

export default AdminLiveProvider;
