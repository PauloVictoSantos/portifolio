import React from "react";
import { ButtonPixel } from "./Button";
import { SocialIcon } from "./SocialIcon";
import { PiArrowRightThin } from "react-icons/pi";

export const Contact = () => {
  return (
    <section
      id="Contact"
      className="3xl:px-0 padding-container max-container py-12 xl:py28"
    >
      <div className="pb-12 text-center">
        <h3 className="text-[30px] lg:txet-[36px] font-extrabold relative leading-normal uppercase">
          Contat
          <samp className="text-[30px] text-secondary">O</samp>
          <samp
            className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%]
           left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase"
          >
            Meu Contato
          </samp>
        </h3>
      </div>

      <div className="flex justify-evenly items-center">
        <div className="w-full md:w-[320px] flex flex-col gap-6 items-center">
          <div className="flex flex-col items-center">
            <p className="text-xl text-gray-700 max-w-md text-center">
              Vamos criar algo novo, diferente e mais significativo, ou tornar
              algo mais visual ou conceitual? Diz apenas olá
              <span className="text-secondary"> Diga apenas olá</span>
            </p>
            <div className="mt-4">
              <PiArrowRightThin size={25} />
            </div>
          </div>
          <SocialIcon />
        </div>

        <div className="bg-slate-800 border border-slate-700 w-5/12 gap-2 rounded-xl p-3 text-sm ml-[00px]">
          <h1 className="text-center text-slate-600 text-xl font-bold col-span-6">
            Send Feedback
          </h1>
          <div className="flex flex-col gap-2">
            <input
              className="bg-slate-700 text-slate-300 h-10 placeholder:text-slate-300 placeholder:opacity-50 border border-slate-600 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-300"
              placeholder="Nome"
            />
            <input
              className="bg-slate-700 text-slate-300 h-10 placeholder:text-slate-300 placeholder:opacity-50 border border-slate-600 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-300"
              placeholder="E-mail"
            />

            <input
              className="bg-slate-700 text-slate-300 h-10 placeholder:text-slate-300 placeholder:opacity-50 border border-slate-600 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-300"
              placeholder="Projeto"
            />

            <textarea
              className="bg-slate-700 text-slate-300 h-28 placeholder:text-slate-300 placeholder:opacity-50 border border-slate-600 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-300"
              placeholder="Mensagem"
            ></textarea>
          </div>
          <div className="p-2">
          <ButtonPixel/>
          </div>
        </div>
      </div>
    </section>
  );
};
