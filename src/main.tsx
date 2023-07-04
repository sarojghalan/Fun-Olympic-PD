import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ActiveUserProvider } from "./context/ActiveUser.tsx";
import UserProvider from "./context/UserContext.tsx";
import "./index.scss";
import AdminProvider from "./context/AdminContext.tsx";
import AdminCategoryProvider from "./context/AdminCategory.tsx";
import FavoriteProvider from "./context/FavoriteContext.tsx";
import AdminLiveProvider from "./context/AdminLive.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <AdminCategoryProvider>
          <UserProvider>
            <AdminLiveProvider>
              <ActiveUserProvider>
                <FavoriteProvider>
                  <SnackbarProvider>
                    <App />
                  </SnackbarProvider>
                </FavoriteProvider>
              </ActiveUserProvider>
            </AdminLiveProvider>
          </UserProvider>
        </AdminCategoryProvider>
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);
