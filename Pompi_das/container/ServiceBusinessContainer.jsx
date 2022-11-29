import Head from "next/head";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { corporates_aqcare_url } from "../data/urls.data";

export default function ServiceBusinesContainer(props) {
  console.log(props.section1card1title)
  return (
    <div className="mt-5">
      <div className="flex  items-center content-center justify-center">
        <div className=" flex font-themefont lg:text-5xl text-2xl text-primary text-center mt-5">
          {/* {props.section1title} */}
          <div
              dangerouslySetInnerHTML={{ __html: props.section1title}}
            ></div>
        </div>
      </div>      
      <div className="lg:flex-center font-themefont lg:text-3xl text-xl text-black text-center lg:items-center  ">
        {/* {props.content1} */}
        <div
              dangerouslySetInnerHTML={{ __html: props.section1content }}
            ></div>
      </div>

      <div className="grid grid-rows-1 mx-20 lg:grid-cols-4 grid-cols-1 gap-4 mt-5">
        <div>
          
          <ServiceCard
          title={props.section1card1title}
          img={props.section1card1image}
          desc={props.section1card1content}
          />
        </div>
        <div>
          <ServiceCard 
          title={props.section1card2title} 
          img={props.section1card2image}
          desc={props.section1card2content}
          />
        </div>
        <div>
          <ServiceCard 
          
          title={props.section1card3title} 
          img={props.section1card3image}
          desc={props.section1card3content}
          />
        </div>
        <div>
          <ServiceCard 
          title={props.section1card4title} 
          img={props.section1card4image}
          desc={props.section1card4content}
          />
        </div>
        
        
      </div>
      
      <div className="flex mt-10 justify-center">
        <div className=" py-2    mb-10">
        <a href={corporates_aqcare_url} >
          <div className="text-100 py-2 lg:text-3xl text-xl text-bold  w-56 bg-500 rounded-lg hover:bg-600 bg-500 text-center text-white font-themefont ">
          Explore
          </div>
          </a>
        </div>
      </div>
      
     
    </div>
  );
}
