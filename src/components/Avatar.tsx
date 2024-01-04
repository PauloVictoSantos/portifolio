import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Avatar = () => {
  return (
    <div className="flex flex-1 relative -top-20">
      <div className="relative w-60 h-60 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">

        <div className="flex items-center space-x-2 w-40 moveRightLeft relative left-[px] top-[80px]">
          <div className="animate-pulse bg-quartary h-6 w-6 rounded-full"></div>
          <div className="space-y-2">
            <div className="animate-pulse rounded-md bg-gray-500 h-2 w-[100px]"></div>
            <div className="animate-pulse rounded-md bg-gray-500 h-2 w-[70px]"></div>
          </div>
        </div>

        <div className="relative w-40 top-[150px] left-[400px] moveTopButton">
          <Image
            src="/download5.png" 
            alt="Foguete"
            className="object-cover rounded-full"
            width="80"
            height="80"
          />
        </div>

        <Image
          src="/download1.png"
          alt="Foguete"
          className="w-full h-full object-cover rounded-full"
          width="400"
          height="400"
        />

        <div className="relative -top-[300px] left-5 moveTopButton">
          <Image
            src="/download4.png"
            alt="Foguete"
            className="object-cover rounded-full"
            width="80"
            height="80"
          />
        </div>

        <div className="flex items-center space-x-2 w-40 moveRightLeft relative left-[200px] -top-[150px]">
          <div className="animate-puls bg-quintary h-6 w-6 rounded-full"></div>
          <div className="space-y-2">
            <div className="animate-pulse rounded-md bg-gray-500 h-2 w-[100px]"></div>
            <div className="animate-pulse rounded-md bg-gray-500 h-2 w-[70px]"></div>
          </div>
        </div>
      </div>

      <motion.span
        className="bg-gradient-to-b from-opacity-0 to-opacity-10 bg-pink-500 filter blur-3xl lg:h-[300px] lg:w-[300px] xl:h-[150px] xl:w-[150px] absolute rounded-full -z-10 lg:top-[250px] lg:right-[200px]"
        animate={{
          backgroundColor: [
            "#4D8FE0",
            "#6F36F9",
            "#8A2BE2",
            "#4B0082",
            "#003366",
          ],
          transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
      ></motion.span>
    </div>
  );
};
