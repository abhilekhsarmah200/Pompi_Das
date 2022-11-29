import Head from "next/head";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { sustainability_experts_aqcare_url } from "../data/urls.data";

export default function ServiceSustainbilityExpertContainer(props) {
  return (
    <div className=" lg:mt-5">
      <div className="flex  items-center content-center justify-center">
        <div className=" flex font-themefont lg:text-5xl text-2xl text-primary text-center mt-5">
        <div
              dangerouslySetInnerHTML={{ __html: props.section3title}}
            ></div>
        </div>
      </div>      
      <div className="flex-center font-themefont lg:text-3xl text-xl text-black text-center items-center ">
      {/* {props.content3} */}
      <div
              dangerouslySetInnerHTML={{ __html: props.section3content}}
            ></div>
      </div>

      <div className="grid grid-rows-1 mx-20 lg:grid-cols-3 grid-cols-1 lg:gap-32 gap-4 mt-5">
        <div>
          <ServiceCard 
         title={props.section3card1title}
         img={props.section3card1image}
         desc={props.section3card1content}
          />
        </div>
        <div>
          <ServiceCard 
          
          title={props.section3card2title} 
            img={props.section3card2image}
            desc={props.section3card2content}
         
          />
        </div>
        <div>
          <ServiceCard 
         title={props.section3card3title} 
         img={props.section3card3image}
         desc={props.section3card3content}
          />
        </div>
        
        
      </div>
      
      <div className="flex mt-10 justify-center mb-10">
      <a href={sustainability_experts_aqcare_url}>
        <div className="w-56 bg-500 rounded-lg hover:bg-600 text-center text-white py-2 text-100 lg:text-3xl text-xl text-bold   font-themefont ">
          Explore
        </div>
        </a>
      </div>
      
     
    </div>
  );
}
