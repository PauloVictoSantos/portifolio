"use client";
import React from "react";
import CountUp from "react-countup";
import { HiComputerDesktop } from "react-icons/hi2";
import Image from "next/image";

export default function Adout() {
  return (
    <section
      id="About"
      className="3xl:px-0 padding-container page max-container flex flex-col items-center justify-center  gap-8
     py-8 lg:flex-row lg:py-30 xl:gap-32"
    >
      <div className="w-96 h-96 relative">
        <Image
          src="/adout.png"
          alt="Foguete"
          className="w-full h-full object-cover rounded-full z-auto"
          width="600"
          height="600"
        />
        <div className="relative -top-[350px] bg-tertiary w-80 h-80 -z-10 rounded-full rounded-bl-none mb-4 -rotate-45"></div>
      </div>

      <div className="flex flex-col gap-5">
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
          <p className=" hidden sm:block text-center lg:text-start mt-20">
            Olá, sou Paulo Victor Conceição dos Santos, um apaixonado
            profissional da tecnologia com formação técnica em Desenvolvimento
            de Sistemas pelo Instituto Federal de Educação, Ciência e Tecnologia
            do Amazonas - IFAM.
          </p>
        </div>

        <div className=" flex gap-5">
          <div className="flex gap-5">
            <div className="flex justify-center items-center rounded-full h-10 w-10 bg-secondary">
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
            <div className="flex justify-center items-center rounded-full h-10 w-10 bg-secondary">
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
            <div className="flex justify-center items-center rounded-full h-10 w-10 bg-secondary">
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
      </div>
    </section>
  );
}
