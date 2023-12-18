import Link from "next/link";
import React from "react";
import { RiGithubFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";

export const SocialIcon = () => {
  return (
    <div className="flex gap-4 lg:gap-6 pr-4">
      <Link
        href={""}
        className="bg-[#FFBF00] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-instagra hover:-translate-y-1 transition-all duration-500"
      >
        <RiInstagramFill />
      </Link>
      <Link
        href={""}
        className="bg-[#ffffff] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-blue hover:-translate-y-1 transition-all duration-500"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href={""}
        className="bg-[#0099FF] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-500"
      >
        <RiGithubFill    />
      </Link>
    </div>
  );
};
