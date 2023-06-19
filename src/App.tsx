import { useState } from "react";

import "./Scss/Main.scss";
import Navbar from "./Layouts/Navabr/Navbar";
import MasterBanner from "./Layouts/MasterBanner/MasterBanner";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Navbar />
      <MasterBanner />
    </>
  );
}

export default App;
