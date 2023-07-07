import About from "../About/About";
import MasterBanner from "../MasterBanner/MasterBanner";
import News from "../News/News";
import Popular from "../Popular/Popular";
import Ranker from "../Ranker/Ranker";


function Home() {
  return (
    <>
      <MasterBanner />
      <About />
      <Ranker />
      <Popular />
      <News />
    </>
  );
}

export default Home;
