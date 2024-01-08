import { skill } from "@/app/constants/data";
import React, { useState } from "react";

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillClick = (index: number) => {
    const clickedSkill = skill[index];

    if (selectedSkill === clickedSkill) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(clickedSkill);
    }
  };

  return (
    <section
      id="Skills"
      className="3xl:px-0 padding-container max-container page flex flex-col items-center justify-center gap-10"
    >
      <div className="pl-8 text-center">
        <h3 className="text-[30px] lg:txet-[36px] font-extrabold relative leading-normal uppercase">
          Skill
          <samp className=" text-secondary">S</samp>
          <samp
            className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%]
           left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase"
          >
            Minhas Skills
          </samp>
        </h3>
        <p className="text-center max-w-[31rem] mx-auto text-base text-gray-20 mt-12">
          Desenvolvedor frontend com conhecimentos básicos em backend e banco de
          dados. Orientado para detalhes, comprometido com usabilidade e em
          constante aprimoramento, explorando novas tecnologias.{" "}
        </p>
      </div>

      <div className="flex">
        <div className="w-7/12 flex gap-8 flex-wrap">
          {skill.map((info, index) => (
            <div key={index} className="flex flex-col">
              <button
                onClick={() => handleSkillClick(index)}
                className={`border border-gray-300 bg-tertiary py-3 flex gap-1 shadow-xl rounded-md ${
                  selectedSkill === index && "selected-card"
                }`}
              >
                <div className="group relative px-4 cursor-pointer">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
                    {info.icons}
                  </div>
                  <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 text-textlight px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                    {info.title}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
        <div>
          <aside className="bg-tertiary text-white p-6 rounded-lg w-full max-w-md font-mono">
            {selectedSkill === null ? (
              <div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-sm cursor-pointer">Paulo</p>
                </div>
                <div className="mt-4">
                  <p className="text-green-400 typing-text">
                    $ Desevolvedor web
                  </p>
                  <p className="text-white">
                    Comecei a apreder programação.
                  </p>
                  <p className="text-green-400">$ Desde 2021</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-sm cursor-pointer">
                    {selectedSkill.title}
                  </p>
                </div>
                <div className="mt-4">
                  <p
                    className={`text-green-400 ${
                      selectedSkill ? "typing-text" : ""
                    }`}
                  >
                    {selectedSkill ? selectedSkill.install : ""}
                  </p>{" "}
                  <p className="text-white text-sm">
                    {selectedSkill.description}
                  </p>
                  <p className="text-green-400">{selectedSkill.tempo}</p>
                  <p className="text-green-400">$</p>
                </div>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};
