import React, { useContext } from "react";
import "./Scss/Main.scss";
import Navbar from "./Layouts/Navabr/Navbar";
import Footer from "./Layouts/Footer/Footer";
import Routing from "./Routes/Routing";
import { AdminContext } from "./context/AdminContext";
import Admin from "./Admin/admin";

function App() {
  const { isActive, setIsActive ,admin} = useContext(AdminContext);
  return (
    <>
      {admin ? (
        <Admin />
      ) : (
        <>
          <Navbar />
          <Routing />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
