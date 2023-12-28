"use client";
import React from "react";
import CountUp from "react-countup";
import { HiComputerDesktop } from "react-icons/hi2";

export default function Adout() {
  return (
    <section
      className="3xl:px-0 padding-container page max-container flex flex-col items-center justify-center  gap-8
     py-8 lg:flex-row lg:py-30 xl:gap-32"
    >
      <div className=" flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="flex justify-center items-center rounded-full h-10 w-10 bg-green-950">
            <HiComputerDesktop />
          </div>
          <div>
            <span>Web Site Design</span>{" "}
            <p>
              <CountUp start={0} end={2} duration={10} delay={1} /> Projeto
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex justify-center items-center rounded-full h-10 w-10 bg-green-950">
            <HiComputerDesktop />
          </div>
          <div>
            <span>Web Site Design</span>{" "}
            <p>
              <CountUp start={0} end={2} duration={10} delay={1} /> Projeto
            </p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex justify-center items-center rounded-full h-10 w-10 bg-green-950">
            <HiComputerDesktop />
          </div>
          <div>
            <span>Web Site Design</span>{" "}
            <p>
              <CountUp start={0} end={2} duration={10} delay={1} /> Projeto
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-1 flex-col flexcenter lg:justify-start">
        <h3 className="h3 flex items-start">
          UI/UX <span className=" text-secondary"> Design</span> & Web
          developer.{" "}
        </h3>
        <p className=" hidden sm:block text-center lg:text-start">
          Olá, sou Paulo Victor Conceição dos Santos, um apaixonado profissional
          da tecnologia com formação técnica em Desenvolvimento de Sistemas pelo
          Instituto Federal de Educação, Ciência e Tecnologia do Amazonas -
          IFAM.
        </p>
      </div>
    </section>
  );
}
