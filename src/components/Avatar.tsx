import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Avatar = () => {
  return (
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
  );
};
