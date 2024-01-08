import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Avatar = () => {
  return (
    <div className="flex flex-1 relative lg:w-1/2">
      <div className="relative w-60 h-60 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
        <Image
          src="/download7.png"
          alt="Foguete"
          className="w-full h-full object-cover rounded-full"
          width="400"
          height="400"
        />
      </div>
    </div>
  );
};
