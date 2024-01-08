import { qualificacaoData } from "@/app/constants/data";
import React from "react";

export const Expericence = () => {
  return (
    <section
      id="Expericence"
      className="3xl:px-0 padding-container max-container py-12 xl:py-32"
    >
      <div className="pb-12 text-center">
        <h3 className="text-[30px] lg:text-[36px] font-extrabold relative leading-normal uppercase">
          Experiências
          <samp className=" text-secondary">a</samp>
          <samp
            className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%]
      left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase"
          >
            Minhas Experiências
          </samp>
        </h3>

        <p className="text-center max-w-[31rem] mx-auto text-base text-gray-20 mt-12 mb-8">
          Embora eu não tenha muita experiência, estou apaixonado pelo
          desenvolvimento frontend e pronto para resolver problemas. Busco
          oportunidades para aprender e contribuir de forma significativa para
          projetos.
        </p>
      </div>

      {qualificacaoData.map((data, index) => (
        <div
          key={index}
          className="flex gap-10 items-center justify-center flex-wrap"
        >
          {data.info.map((info, innerIndex) => (
            <div
              key={innerIndex}
              className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative"
            >
              <div className="px-8 py-10">
                <div className="bg-secondary flex justify-center items-center w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all">
                  {info.icons}
                </div>
                <div className="uppercase font-bold text-xl">{info.title}</div>
                <div className="text-gray-300 mt-2 text-xs">
                  {info.description}
                </div>
              </div>

              <div className="h-2 w-full bg-gradient-to-l via-[#FF00E6] group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
              <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-secondary group-hover:via-secondary/80 w-[70%] m-auto rounded transition-all"></div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
