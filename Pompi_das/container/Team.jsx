import React from "react";
import CarouselTeam from "../components/CaouselTeam";

export default function Team(props) {
  return (
    <div className="mt-2 md:mt-8">
      <div id="Who-we-are" className=" lg:text-6xl text-2xl font-themefont text-center text-primary  pb-2 lg:pb-3 HD:pb-6">
        {/* {props.section6title} */}
        <div
              dangerouslySetInnerHTML={{ __html: props.section6title }}
            ></div>
      </div>
      <div className={`pb-4 w-full flex flex-col justify-center content-center items-center`}>
        <div className="justify-center font-secondary font-medium leading-3 lg:leading-8 lg:text-xl text-xs mx-2 text-black text-center z-5 pb-2 lg:pb-4 pb-6">
              <div
                dangerouslySetInnerHTML={{ __html: props.section6content }}
              ></div>
            </div>
        
      </div>
      <div className=" py-12 ">
        <CarouselTeam />
      </div>
    </div>
  );
}
