import React, { useContext } from "react";
import StreamCard from "../../Components/Card/StreamCard";
import Title from "../../Components/Title/Title";
import { dummyStream } from "../../data/dummyStream";
import { AdminPopularContext } from "../../context/AdminPopular";

function Popular() {
  const { adminPopular } = useContext(AdminPopularContext);
  console.log("admin popular : ", adminPopular);
  return (
    <div className="container">
      <div className="popular__wrapper">
        <Title title="Popular Stream" />
      </div>
      <div className="row">
        {adminPopular?.map((item, keys) => (
          <div className="col-3 col-md-6 col-sm-6 col-lg-3">
            <StreamCard
              image={dummyStream[keys].image}
              cardTitle={item.title}
              cardDescription={item.description}
              url={item?.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Popular;
