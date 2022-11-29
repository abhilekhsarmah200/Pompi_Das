import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import OurPrincipleCard from "../components/OurPrincipleCard";
import OurPrincipleCardInspire from "../components/OurPrincipleCardInspire";

export default function OurPrinciple(props) {
  return (
    <div className="my-6 mx-4 mt-2">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="flex items-center content-center justify-center">
        <div className=" flex font-themefont lg:text-5xl text-2xl text-primary text-center ">
          <div dangerouslySetInnerHTML={{ __html: props.section4title }}></div>
        </div>
      </div>
      <div className="flex-center font-themefont lg:text-xl text-sm text-black text-center lg:mb-10">
        <div dangerouslySetInnerHTML={{ __html: props.section4content }}></div>
      </div>
      <div class="grid grid-rows-1 lg:mx-20 mx-4 lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-2">
        <div>
          <OurPrincipleCard
            img={props.section4card1image}
            title={props.section4card1title}
            desc={props.section4card1content}
          />
        </div>
        <div>
          <OurPrincipleCardInspire
            img={props.section4card2image}
            title={props.section4card2title}
            desc={props.section4card2content}
          />
        </div>
        <div>
          <OurPrincipleCard
            img={props.section4card3image}
            title={props.section4card3title}
            desc={props.section4card3content}
          />
        </div>
      </div>
    </div>
  );
}
