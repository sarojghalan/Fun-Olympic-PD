import React, { useState, createContext, useEffect, ReactNode } from "react";

interface FavoriteI {
  url: string;
  title: string;
  id?: number | string;
}
interface UserContextI {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  favorite: FavoriteI[] | null | undefined;
  setFavorite: React.Dispatch<
    React.SetStateAction<FavoriteI[] | null | undefined>
  >;
}

interface FavoriteProviderI {
  children: ReactNode;
}

export const FavoriteContext = createContext<UserContextI>({} as UserContextI);

const FavoriteProvider = ({ children }: FavoriteProviderI) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<FavoriteI[] | null | undefined>(
    null
  );

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("favorite")) {
      setFavorite(JSON.parse(localStorage.getItem("favorite")!));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (favorite) {
      localStorage.setItem("favorite", JSON.stringify(favorite));
    }
  }, [favorite, isLoading]);

  return (
    <FavoriteContext.Provider
      value={{ isLoading, setIsLoading, favorite, setFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
