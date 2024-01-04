import React, { useState } from "react";

import Image from "next/image";
import { skill } from "@/app/constants/data";

export const Skills = () => {
  const skillInfo = {
    showNextJSInfo: 0,
    showReactInfo: 1,
    showNodeInfo: 2,
    showTailwindInfo: 3,
    showFigmaInfo: 4,
    showMysqleInfo: 5,
    showTypescriptInfo: 6,
    showJestInfo: 7,
    showHTMLInfo: 8,
    showCSSInfo: 9,
    showJavascriptInfo: 10,
    showBootstrapInfo: 11,
  };

  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkillInfo = (skill) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  const toggleNextJSInfo = () => toggleSkillInfo("showNextJSInfo");
  const toggleReactInfo = () => toggleSkillInfo("showReactInfo");
  const toggleNodeInfo = () => toggleSkillInfo("showNodeInfo");
  const toggleTailwindInfo = () => toggleSkillInfo("showTailwindInfo");
  const toggleFigmaInfo = () => toggleSkillInfo("showFigmaInfo");
  const toggleMysqlInfo = () => toggleSkillInfo("showMysqleInfo");
  const toggleTypescriptInfo = () => toggleSkillInfo("showTypescriptInfo");
  const toggleJestInfo = () => toggleSkillInfo("showJestInfo");
  const toggleHTMLInfo = () => toggleSkillInfo("showHTMLInfo");
  const toggleCSSInfo = () => toggleSkillInfo("showCSSInfo");
  const toggleJavascriptInfo = () => toggleSkillInfo("showJavascriptInfo");
  const toggleBootstrapInfo = () => toggleSkillInfo("showBootstrapInfo");

  return (
    <section
      id="Skills"
      className="3xl:px-0 padding-container max-container page flex items-center justify-center"
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
        <p className="text-center max-w-md mx-auto text-gray-20 mt-12">
          Olá, blá blá blá blá blá blá blá blá.
        </p>
      </div>

      <div className="relative h-full w-full flex items-center justify-center">
        <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
          <div className="profileCard_container relative p-10 m-6 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
            <button
              className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
              onClick={toggleNextJSInfo}
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 skill-icon">
                {skill[0].info[0].nextjs}
              </span>
            </button>

            <button
              onClick={toggleReactInfo}
              className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 skill-icon">
                {skill[0].info[1].react}
              </span>
            </button>

            <button
              onClick={toggleNodeInfo}
              className="profile_item -left-4 top-20  absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 skill-icon">
                {skill[0].info[2].node}
              </span>
            </button>

            <button
              onClick={toggleTailwindInfo}
              className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                {skill[0].info[3].tailwind}
              </span>
            </button>

            <button
              onClick={toggleFigmaInfo}
              className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                {skill[0].info[4].figma}
              </span>
            </button>

            <button
              onClick={toggleMysqlInfo}
              className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                {skill[0].info[5].mysql}
              </span>
            </button>

            <button
              onClick={toggleTypescriptInfo}
              className="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                {skill[0].info[6].typescript}
              </span>
            </button>

            <button
              onClick={toggleJestInfo}
              className="profile_item right-[285px] -top-0.5 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 skill-icon">
                {skill[0].info[7].jest}
              </span>
            </button>

            <button
              onClick={toggleHTMLInfo}
              className="profile_item left-[42%] -top-24 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 skill-icon">
                {skill[0].info[8].html}
              </span>
            </button>

            <button
              onClick={toggleCSSInfo}
              className="profile_item top-[55%] -left-[30%] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 skill-icon">
                {skill[0].info[9].css}
              </span>
            </button>

            <button
              onClick={toggleJavascriptInfo}
              className="profile_item -bottom-[23%] left-[25px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 skill-icon">
                {skill[0].info[10].javascript}
              </span>
            </button>

            <button
              onClick={toggleBootstrapInfo}
              className="profile_item right-[24px] -bottom-[22%] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 skill-icon">
                {skill[0].info[11].bootstrap}
              </span>
            </button>

            <button className="profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
              <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                <span className="w-40 h-40 inline-block">
                  <Image
                    src="/cara.png"
                    alt="Foguete"
                    className="w-full h-full object-cover rounded-full"
                    width="400"
                    height="400"
                  />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {activeSkill !== null && (
        <div className="cursor-pointer overflow-hidden relative -top-44 mr-10 transition-all duration-500 hover:translate-y-2 w-[500px] h-40 bg-slate-800 rounded-lg shadow-xl flex flex-col gap-2 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-red-900">
          <span className="font-bold">
            {skill[0].info[skillInfo[activeSkill]].title}
          </span>
          <p className=" text-xs">
            {skill[0].info[skillInfo[activeSkill]].description}
          </p>
        </div>
      )}
    </section>
  );
};
