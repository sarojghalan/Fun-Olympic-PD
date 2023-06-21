import { useState } from "react";

import "./Scss/Main.scss";
import Navbar from "./Layouts/Navabr/Navbar";
import MasterBanner from "./Layouts/MasterBanner/MasterBanner";
import Footer from "./Layouts/Footer/Footer";
import About from "./Layouts/About/About";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Navbar />
      <MasterBanner />
      <About />
      {/* <Footer /> */}
    </>
  );
}

export default App;
