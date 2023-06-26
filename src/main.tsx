import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ActiveUserProvider } from "./context/ActiveUser.tsx";
import UserProvider from "./context/UserContext.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ActiveUserProvider>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </ActiveUserProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
