import Head from "next/head";
import React from "react";
import LandingCard from "../components/LandingCard";
import { corporates_aqcare_url, schools_aqcare_url, sustainability_experts_aqcare_url } from "../data/urls.data";
import { production } from "../production";

export default function LandingContainerCard(props) {
  // console.log("test",props.section2card4image)
  return (
    <div class="flex flex-wrap font-themefont">
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2  ">
        <LandingCard
          img={props.section2card1image}
          title={props.section2card1title}
          desc1={props.section2card1content1}
          desc2={props.section2card1content2}          
          logo={props.section2card1logo}
          url={production.b2cUrl}
        />
      </div>
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2   ">
        <LandingCard
          img={props.section2card2image}
          title={props.section2card2title}
          desc1={props.section2card2content1}
          desc2={props.section2card2content2}          
          logo={props.section2card2logo}
          url={corporates_aqcare_url}
        />
      </div>
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2  ">
        <LandingCard
          img={props.section2card3image}
          title={props.section2card3title}
          desc1={props.section2card3content1}
          desc2={props.section2card3content2}          
          logo={props.section2card3logo}
          url={schools_aqcare_url}
        />
      </div>
      <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2 ">
        <LandingCard
          // img="https://atquest2.b-cdn.net/atquest-b2b/LandingPage/Sustainability.jpg"
          img={props.section2card4image}
          title={props.section2card4title}
          desc1={props.section2card4content1}
          desc2={props.section2card4content2}          
          logo={props.section2card4logo}
          url={sustainability_experts_aqcare_url}
        />
      </div>
    </div>
  );
}
