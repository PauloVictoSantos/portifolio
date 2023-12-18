import React from "react";
import { HiArrowDown } from "react-icons/hi2";

export const Button = () => {
  return (
    <button className=" bg-secondary px-8 py-2 rounded-full flexcenter gap-4 animate-pulse">
      <span>Contrate-me</span>
      <span className=" h-5 w-5 border border-white rounded-full flexcenter animate-bounce">
        <HiArrowDown />
      </span>
    </button>
  );
};
