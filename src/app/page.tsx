"use client";
import { SocialIcon } from "../components/SocialIcon";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
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

      {/* Direita */}

      <div className="flex flex-1 relative">
        <div className="relative w-60 h-60 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
          <Image
            src={"/l.png"}
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <motion.span
          className="bg-secondary h-60 w-60 lg:h-[400px] lg:w-[400px] xl:h-[460px] xl:w-[460px] absolute rounded-full -z-10 lg:top-10 lg:right-10"
          animate={{
            backgroundColor: [
              "#ff0000",
              "#00ff00",
              "#0000ff",
              "#ffff00",
              "#ff00ff",
            ],
            transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        ></motion.span>
      </div>
    </section>
  );
}
