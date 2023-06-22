import { useState } from "react";

import "./Scss/Main.scss";
import Navbar from "./Layouts/Navabr/Navbar";
import MasterBanner from "./Layouts/MasterBanner/MasterBanner";
import Footer from "./Layouts/Footer/Footer";
import About from "./Layouts/About/About";
import Popular from "./Layouts/Popular/Popular";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Navbar />
      <MasterBanner />
      <About />
      <Popular />
      <Footer />
    </>
  );
}

export default App;
