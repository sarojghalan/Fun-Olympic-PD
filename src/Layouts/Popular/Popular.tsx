import StreamCard from "../../Components/Card/StreamCard";
import Title from "../../Components/Title/Title";

function Popular() {
  return (
    <div className="container">
      <div className="popular__wrapper">
        <Title title="Popular Stream" />
      </div>
      <div className="row">
        <div className="col-3">
            <StreamCard />
        </div>
        <div className="col-3">
            <StreamCard />
        </div>
        <div className="col-3">
            <StreamCard />
        </div>
        <div className="col-3">
            <StreamCard />
        </div>
      </div>
    </div>
  );
}
export default Popular;
