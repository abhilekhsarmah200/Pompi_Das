import React from "react";
import CarouselTeam from "../components/CaouselTeam_old";

export default function Team(props) {
  return (
    <div className="mt-12">
      <div id="Who-we-are" className=" lg:text-6xl text-2xl font-themefont text-center text-primary  lg:pb-6 pb-12">
        {/* {props.section6title} */}
        <div
              dangerouslySetInnerHTML={{ __html: props.section6title }}
            ></div>
      </div>
      
      <div className=" py-6 ">
        <CarouselTeam />
      </div>
    </div>
  );
}
