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
import { ButtonCV } from "@/components/Button";

export default function Home() {
  return (
    <main id="home" className="relative">
      <section className="padding-container max-container page flex flex-col lg:flex-row lg:gap-40 relative">
        <div className="flex-1 relative -top-16 flexcenter flex-col lg:items-start text-center lg:text-left ">
          <h2 className="bold-44">
            Olá eu sou
            <span className="text-secondary bold-40"> Paulo Victor </span>
          </h2>
          <h4 className="bold-28">
            Sou
            <span className="pl-2 block lg:inline">
              <Typewriter
                words={["Programador Front-End"]}
                loop={true}
                cursor
                cursorStyle={"_"}
                typeSpeed={90}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </h4>
          <p className="py-4 bold-14 text-center lg:text-left">
          Transformando ideias em experiências digitais incríveis.
          </p>
          <div className="m-2 pb-2 text-center lg:text-left">
            <ButtonCV />
          </div>
          <SocialIcon />
        </div>
        <Avatar />
      </section>

      <Adout />
      <Skills />
      <Expericence />
      <Work />
      <Contact />
    </main>
  );
}
