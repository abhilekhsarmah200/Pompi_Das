import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import Card from "../components/Card";
import {production} from '../production'
import { corporates_aqcare_url, schools_aqcare_url, sustainability_experts_aqcare_url } from "../data/urls.data";

export default function LandingCardContainer() {
  return (
    <div className=" lg:mx-10 mx-4 lg:mb-48 mb-4 mt-4">
      <Head>
       
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="lg:h-64 grid grid-rows-1 lg:grid-cols-4  lg:gap-4  row-gap-64 content-center" >
        <div className=""> 
          <Card img="https://atquest2.b-cdn.net/atquest-b2b/LandingPage/Citizens.jpg" 
          title="Citizens"
          desc1="As decision makers in your personal lives, you lead the story of 'Lots of Little' green actions and inspire people around."
          desc2="Let's green a little more today"
          url={production.b2cUrl}
          logo="https://atquest2.b-cdn.net/atquest-b2b/LandingPage/At%20Quest%20Life%20Logo.png"
          />
        </div>

        <div className="lg:mt-48  mt-4 ">
          <Card img="https://atquest2.b-cdn.net/atquest-b2b/LandingPage/Businesses.jpg" 
          title="Businesses"
          desc1="At the frontline of economic growth, you lead the story of 'Profit, People and Planet' together."
          desc2="Let's build your climate-resilient growth story"
          logo="https://atquest2.b-cdn.net/atquest-b2b/HomePage/At%20Quest%20Care%20logo.png"
          url={corporates_aqcare_url}
          />
        </div>
        <div className="lg:mt-auto mt-4">
          <Card img="https://atquest2.b-cdn.net/atquest-b2b/LandingPage/Schools.jpg" 
          title="Schools"
          desc1="With a unique opportunity to educate young minds, you lead the story of 'Shaping Tomorrow’s Changemakers'."
          desc2="Let's make them present-aware and future-ready"
          logo="https://atquest2.b-cdn.net/atquest-b2b/HomePage/At%20Quest%20Care%20logo.png"
          url={schools_aqcare_url}

          />
        </div>

        <div className="lg:mt-48  " > 
          <Card img="https://atquest2.b-cdn.net/atquest-b2b/LandingPage/Sustainability.jpg" 
          title="Sustainability Experts"
          desc1="Your championship on the green journey is proven. You selflessly lead the story of 'Setting an Example'."
          desc2="Let's join hands and flourish together"
          logo="https://atquest2.b-cdn.net/atquest-b2b/HomePage/At%20Quest%20Care%20logo.png"
          url={sustainability_experts_aqcare_url}
          />
        </div>
      </div>
    </div>
  );
}