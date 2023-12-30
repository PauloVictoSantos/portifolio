import React, { useState} from "react";

import Image from "next/image";
import { skill } from "@/app/constants/data";

export const Skills = () => {
  const [showNextJSInfo, setShowNextJSInfo] = useState(false);
  const [showReactInfo, setShowReactInfo] = useState(false);
  const [showNodeInfo, setshowNodeInfo] = useState(false);
  const [showTailwindInfo, setShowTailwindInfo] = useState(false);
  const [showFigmaInfo, setShowFigmaInfo] = useState(false);
  const [showMysqleInfo, setShowMysqlInfo] = useState(false);
  const [showTypescriptInfo, setShowTypescriptInfo] = useState(false);
  const [showJestInfo, setShowJestInfo] = useState(false);
  const [showHTMLInfo, setShowHTMLInfo] = useState(false);
  const [showCSSInfo, setShowCSSInfo] = useState(false);
  const [showJavascriptInfo, setShowJavascriptInfo] = useState(false);
  const [showBootstrapInfo, setShowBootstrapInfo] = useState(false);

  const toggleNextJSInfo = () => {
    setShowNextJSInfo(!showNextJSInfo);
    setShowReactInfo(false);
    setshowNodeInfo(false);
    setShowTailwindInfo(false);
    setShowTypescriptInfo(false);
    setShowJestInfo(false);
    setShowFigmaInfo(false);
    setShowMysqlInfo(false);
    setShowHTMLInfo(false);
    setShowCSSInfo(false);
    setShowJavascriptInfo(false);
    setShowBootstrapInfo(false);
  };

  const toggleReactInfo = () => {
    setShowReactInfo(!showReactInfo);
    setShowNextJSInfo(false);
    setshowNodeInfo(false);
    setShowTailwindInfo(false);
    setShowTypescriptInfo(false);
    setShowJestInfo(false);
    setShowFigmaInfo(false);
    setShowMysqlInfo(false);
    setShowHTMLInfo(false);
    setShowCSSInfo(false);
    setShowJavascriptInfo(false);
    setShowBootstrapInfo(false);
  };

  const toggleNodeInfo = () => {
    setshowNodeInfo(!showNodeInfo);
    setShowNextJSInfo(false);
    setShowReactInfo(false);
    setShowTailwindInfo(false);
    setShowTypescriptInfo(false);
    setShowJestInfo(false);
    setShowFigmaInfo(false);
    setShowMysqlInfo(false);
    setShowHTMLInfo(false);
    setShowCSSInfo(false);
    setShowJavascriptInfo(false);
    setShowBootstrapInfo(false);
  };

  const toggleTailwindInfo = () => {
    setShowTailwindInfo(!showTailwindInfo);
    setShowNextJSInfo(false);
    setShowReactInfo(false);
    setshowNodeInfo(false);
    setShowTypescriptInfo(false);
    setShowJestInfo(false);
    setShowFigmaInfo(false);
    setShowMysqlInfo(false);
    setShowHTMLInfo(false);
    setShowCSSInfo(false);
    setShowJavascriptInfo(false);
    setShowBootstrapInfo(false);
  };

  const toggleFigmaInfo = () => {
    setShowFigmaInfo(!showFigmaInfo);
    setShowReactInfo(false);
    setshowNodeInfo(false);
    setShowTailwindInfo(false);
    setShowTypescriptInfo(false);
    setShowJestInfo(false);
    setShowMysqlInfo(false);
    setShowHTMLInfo(false);
    setShowCSSInfo(false);
    setShowJavascriptInfo(false);
    setShowBootstrapInfo(false);
  };

  const toggleMysqlInfo = () => {
    setShowMysqlInfo(!showMysqleInfo);
    setShowReactInfo(false);
    setshowNodeInfo(false);
    setShowTailwindInfo(false);
    setShowTypescriptInfo(false);
    setShowJestInfo(false);
    setShowFigmaInfo(false);
    setShowHTMLInfo(false);
    setShowCSSInfo(false);
    setShowJavascriptInfo(false);
    setShowBootstrapInfo(false);
  };

  const toggleTypescriptInfo = () => {
    setShowTypescriptInfo(!showJestInfo);
    setShowReactInfo(false);
    setshowNodeInfo(false);
    setShowTailwindInfo(false);
    setShowJestInfo(false);
    setShowFigmaInfo(false);
    setShowMysqlInfo(false);
    setShowHTMLInfo(false);
    setShowCSSInfo(false);
    setShowJavascriptInfo(false);
    setShowBootstrapInfo(false);
  };

  const toggleJestInfo = () => {
    setShowJestInfo(!showTypescriptInfo);
    setShowReactInfo(false);
    setshowNodeInfo(false);
    setShowTailwindInfo(false);
    setShowTypescriptInfo(false);
    setShowFigmaInfo(false);
    setShowMysqlInfo(false);
    setShowHTMLInfo(false);
    setShowCSSInfo(false);
    setShowJavascriptInfo(false);
    setShowBootstrapInfo(false);
  };

  const toggleHTMLInfo = () => {
    setShowHTMLInfo(!showHTMLInfo);
    setShowReactInfo(false);
    setshowNodeInfo(false);
    setShowTailwindInfo(false);
    setShowTypescriptInfo(false);
    setShowJestInfo(false);
    setShowFigmaInfo(false);
    setShowMysqlInfo(false);
    setShowCSSInfo(false);
    setShowJavascriptInfo(false);
    setShowBootstrapInfo(false);
  };

  const toggleCSSInfo = () => {
    setShowCSSInfo(!showCSSInfo);
    setShowReactInfo(false);
    setshowNodeInfo(false);
    setShowTailwindInfo(false);
    setShowTypescriptInfo(false);
    setShowJestInfo(false);
    setShowFigmaInfo(false);
    setShowMysqlInfo(false);
    setShowHTMLInfo(false);
    setShowJavascriptInfo(false);
    setShowBootstrapInfo(false);
  };

  const toggleJavascriptInfo = () => {
    setShowJavascriptInfo(!showJavascriptInfo);
    setShowReactInfo(false);
    setshowNodeInfo(false);
    setShowTailwindInfo(false);
    setShowTypescriptInfo(false);
    setShowJestInfo(false);
    setShowFigmaInfo(false);
    setShowMysqlInfo(false);
    setShowHTMLInfo(false);
    setShowCSSInfo(false);
    setShowBootstrapInfo(false);
  };

  const toggleBootstrapInfo = () => {
    setShowBootstrapInfo(!showBootstrapInfo);
    setShowReactInfo(false);
    setshowNodeInfo(false);
    setShowTailwindInfo(false);
    setShowTypescriptInfo(false);
    setShowJestInfo(false);
    setShowFigmaInfo(false);
    setShowMysqlInfo(false);
    setShowHTMLInfo(false);
    setShowCSSInfo(false);
    setShowJavascriptInfo(false);
  };

  return (
    <div className="3xl:px-0 padding-container max-container page flex items-center justify-center ">
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
              className="profile_item -left-[40%] -top-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 skill-icon">
                {skill[0].info[7].jest}
              </span>
            </button>

            <button
              onClick={toggleHTMLInfo}
              className="profile_item -left-[25%] -top-24 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 skill-icon">
                {skill[0].info[8].html}
              </span>
            </button>

            <button
              onClick={toggleCSSInfo}
              className="profile_item -bottom-[10%] -left-[20%] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 skill-icon">
                {skill[0].info[9].css}
              </span>
            </button>

            <button
              onClick={toggleJavascriptInfo}
              className="profile_item -bottom-[10%] -right-[20%] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
            >
              <span className="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1 skill-icon">
                {skill[0].info[10].javascript}
              </span>
            </button>

            <button
              onClick={toggleBootstrapInfo}
              className="profile_item -right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
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

      {showNextJSInfo && (
        <div className="w-1/2 relative -top-56 animate-fadeInDisappear">
          <h4>{skill[0].info[0].title}</h4>
          <p className="text-xs">{skill[0].info[0].description}</p>
        </div>
      )}

      {showReactInfo && (
        <div className="w-1/2 relative -top-56">
          <h4>{skill[0].info[1].title}</h4>
          <p className="text-xs">{skill[0].info[1].description}</p>
        </div>
      )}
      {showNodeInfo && (
        <div className="w-1/2 relative -top-56">
          <h4>{skill[0].info[2].title}</h4>
          <p className="text-xs">{skill[0].info[2].description}</p>
        </div>
      )}
      {showTailwindInfo && (
        <div className="w-1/2 relative -top-56">
          <h4>{skill[0].info[3].title}</h4>
          <p className="text-xs">{skill[0].info[3].description}</p>
        </div>
      )}
      {showFigmaInfo && (
        <div className="w-1/2 relative -top-56">
          <h4>{skill[0].info[4].title}</h4>
          <p className="text-xs">{skill[0].info[4].description}</p>
        </div>
      )}
      {showMysqleInfo && (
        <div className="w-1/2 relative -top-56">
          <h4>{skill[0].info[5].title}</h4>
          <p className="text-xs">{skill[0].info[5].description}</p>
        </div>
      )}
      {showTypescriptInfo && (
        <div className="w-1/2 relative -top-56">
          <h4>{skill[0].info[6].title}</h4>
          <p className="text-xs">{skill[0].info[6].description}</p>
        </div>
      )}
      {showJestInfo && (
        <div className="w-1/2 relative -top-56">
          <h4>{skill[0].info[7].title}</h4>
          <p className="text-xs">{skill[0].info[7].description}</p>
        </div>
      )}
      {showHTMLInfo && (
        <div className="w-1/2 relative -top-56">
          <h4>{skill[0].info[8].title}</h4>
          <p className="text-xs">{skill[0].info[8].description}</p>
        </div>
      )}
      {showCSSInfo && (
        <div className="w-1/2 relative -top-56">
          <h4>{skill[0].info[9].title}</h4>
          <p className="text-xs">{skill[0].info[9].description}</p>
        </div>
      )}
      {showJavascriptInfo && (
        <div className="w-1/2 relative -top-56">
          <h4>{skill[0].info[10].title}</h4>
          <p className="text-xs">{skill[0].info[10].description}</p>
        </div>
      )}
      {showBootstrapInfo && (
        <div className="w-1/2 relative -top-56">
          <h4>{skill[0].info[11].title}</h4>
          <p className="text-xs">{skill[0].info[11].description}</p>
        </div>
      )}
    </div>
  );
};
