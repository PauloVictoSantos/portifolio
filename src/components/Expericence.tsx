import { qualificacaoData } from "@/app/constants/data";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import {  MdOutlineWeb } from "react-icons/md";
import { PiCodeBlockDuotone } from "react-icons/pi";
import { RxDesktop } from "react-icons/rx";


export const Expericence = () => {
  return (
    <section className="3xl:px-0 padding-container max-container py-12 xl:py-32">
      <div className="pb-12 text-center">
        <h3 className="text-[30px] lg:txet-[36px] font-extrabold relative leading-normal uppercase">
          Experiênci
          <samp className=" text-secondary">a</samp>
          <samp
            className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%]
           left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase"
          >
            Minhas Experiências
          </samp>
        </h3>
        <p className="text-center max-w-md mx-auto text-gray-20 mt-12">
          Olá, blá blá blá blá blá blá blá blá.
        </p>
      </div>

      {/* Experience */}
      <div className="flex gap-10 items-center justify-center">
        <div className="hover:-translate-y-2 group bg-transparent duration-500 w-96 h-96 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute  z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
          >
            <path
              transform="translate(100 100)"
              d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
            ></path>
          </svg>

          <div className="z-20 flex flex-col justify-center items-center">
            <MdOutlineWeb size={70} />
            <span className="font-bold text-6xl ml-2">Design</span>
            <p className="font-bold text-center text-xs mt-2">ola oamakmq kmqk z skmwks <br /> xdkmdkendkime cemkewf</p>
          </div>
        </div>
        <div className="hover:-translate-y-2 group bg-transparent duration-500 w-96 h-96 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute  z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
          >
            <path
              transform="translate(100 100)"
              d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
            ></path>
          </svg>

          <div className="z-20 flex flex-col justify-center items-center">
            <PiCodeBlockDuotone size={70} />
            <span className="font-bold text-6xl ml-2">Front</span>
            <p className="font-bold text-center text-xs mt-1">ola oamakmq kmqk z skmwks <br /> xdkmdkendkime cemkewf</p>          </div>
        </div>
        <div className="hover:-translate-y-2 group bg-transparent duration-500 w-96 h-96 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
          >
            <path
              transform="translate(100 100)"
              d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
            ></path>
          </svg>

          <div className="z-20 flex flex-col justify-center items-center">
          <RxDesktop size={70} />
            <span className="font-bold text-6xl ml-2">Back</span>
            <p className="font-bold text-center text-xs">ola oamakmq kmqk z skmwks <br /> xdkmdkendkime cemkewf</p>
          </div>
        </div>
      </div>
    </section>
  );
};
