import React, { useContext } from "react";
import StreamCard from "../../Components/Card/StreamCard";
import Title from "../../Components/Title/Title";
import { dummyStream } from "../../data/dummyStream";
import { AdminCategoryContext } from "../../context/AdminCategory";

function Popular() {
  const { adminCategory } = useContext(AdminCategoryContext);
  return (
    <div className="container">
      <div className="popular__wrapper">
        <Title title="Popular Stream" />
      </div>
      <div className="row">
        {dummyStream.map((item) => (
          <div className="col-3 col-md-6 col-sm-6 col-lg-3">
            <StreamCard
              image={item.image}
              cardTitle={item.cardTitle}
              cardDescription={item.cardDescription}
              id={item.id}
            />
          </div>
        ))}
        {/* <div className="col-3">
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
        </div> */}
      </div>
    </div>
  );
}
export default Popular;
