import React, { useState, useEffect, createContext, ReactNode } from "react";

interface AdminCategoryI {
  title: string;
  url: string;
  iconClass: string;
}
interface AdminContextI {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  adminCategory: AdminCategoryI[] | null | undefined;
  setAdminCategory: React.Dispatch<
    React.SetStateAction<AdminCategoryI[] | null | undefined>
  >;
}
interface AdminCategoryProviderI {
  children: ReactNode;
}

export const AdminCategoryContext = createContext<AdminContextI>(
  {} as AdminContextI
);

const AdminCategoryProvider = ({ children }: AdminCategoryProviderI) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [adminCategory, setAdminCategory] = useState<
    AdminCategoryI[] | null | undefined
  >(null);

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("category")) {
      setAdminCategory(JSON.parse(localStorage.getItem("category")!));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (adminCategory) {
      localStorage.setItem("category", JSON.stringify(adminCategory));
    }
  }, [adminCategory, isLoading]);

  return (
    <AdminCategoryContext.Provider
      value={{
        isLoading,
        setIsLoading,
        adminCategory,
        setAdminCategory,
      }}
    >
      {children}
    </AdminCategoryContext.Provider>
  );
};

export default AdminCategoryProvider;
