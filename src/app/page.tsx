"use client";
import { SocialIcon } from "../components/SocialIcon";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Adout from "../components/adout";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Skills } from "@/components/Skills";
import { Avatar } from "@/components/Avatar";
import { Expericence } from "@/components/Expericence";

export default function Home() {
  return (
    <main>
      <section
        className="3xl:px-0 padding-container max-container page flex flex-col gap-4 flexcenter
            pb-18 lg:flex-row lg:gap-40"
      >
        <div className="flex-1 flexcenter flex-col lg:items-start ">
          <h2 className="bold-18">
            Olá eu sou{" "}
            <span className=" text-secondary bold-20"> Paulo Victor </span>
          </h2>
          <h4 className="bold-28">
            Sou
            <span className="pl-2">
              <Typewriter
                words={["Frontend Developer, UI Design"]}
                loop={true}
                cursor
                cursorStyle={"_"}
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </h4>
          <p className="py-4 bold-14">How to create scroll-linked Motion.</p>
          <SocialIcon />
        </div>
        <Avatar />
      </section>

      <Adout /> 
      <Expericence /> 
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}
