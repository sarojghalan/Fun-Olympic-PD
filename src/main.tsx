import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserContext.tsx";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
