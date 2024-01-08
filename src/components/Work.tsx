import React, { useState } from "react";
import Image from "next/image";
import { IoLink } from "react-icons/io5";
import {
  projetoBasicoData,
  projetoIntermediariaData,
  projetoAvancadoData,
} from "@/app/constants/data";

export const Work = () => {
  const [selectedMenu, setSelectedMenu] = useState("Basico");

  const handleMenuClick = (menu: React.SetStateAction<string>) => {
    setSelectedMenu(menu);
  };

  const getMenuData = () => {
    switch (selectedMenu) {
      case "Basico":
        return projetoBasicoData;
      case "Intermediario":
        return projetoIntermediariaData;
      case "Avancado":
        return projetoAvancadoData;
      default:
        return [];
    }
  };

  return (
    <section
      id="Work"
      className="flex flex-col gap-20 items-center justify-center p-20 3xl:px-0 padding-container max-container py-12 xl:py-32"
    >
      <div className="pb-12 text-center">
        <h3 className="text-[30px] lg:txet-[36px] font-extrabold relative leading-normal uppercase">
          Projet
          <samp className="text-[30px] text-secondary">O</samp>
          <samp
            className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%]
           left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase"
          >
            Meus Projeto
          </samp>
        </h3>
      </div>

      <div className="flex bg-primary w-fit px-1.25 py-1.25 shadow-box-up rounded-2xl dark:bg-box-dark dark:shadow-box-dark-out">
        <div className="dark:shadow-buttons-box-dark rounded-2xl w-full px-1.5 py-1.5 md:px-3 md:py-3">
          <a
            className={`text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed focus:opacity-100 focus:outline-none font-medium rounded-lg text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0  cursor-pointer ${
              selectedMenu === "Basico" && "bg-gary-50"
            }`}
            onClick={() => handleMenuClick("Basico")} 
          >
            Basico
          </a>
          <a
            className={`text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed focus:opacity-100 focus:outline-none font-medium rounded-lg text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0  cursor-pointer ${
              selectedMenu === "Intermediario" && "bg-gary-50"
            }`}
            onClick={() => handleMenuClick("Intermediario")}
          >
            Intermediario
          </a>
          <a
            className={`text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed focus:opacity-100 focus:outline-none font-medium rounded-lg text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0  cursor-pointer ${
              selectedMenu === "Avancado" && "bg-gary-50"
            }`}
            onClick={() => handleMenuClick("Avancado")}
          >
            Avançado
          </a>
        </div>
      </div>

      <div className="flex flex-wrap w-11/12 gap-8 justify-center">
        {getMenuData().map((projeto, index) => (
          <div key={index}>
            <div className="w-80 p-1 bg-tertiary rounded-lg shadow-md transform hover:scale-105 transition-transform duration-100 ease-in-out">
              <Image
                className="w-full h-56 object-cover rounded-t-lg"
                alt="Card Image"
                src={projeto.info[0].image}
                width="400"
                height="400"
              />
              <div className="p-1">
                <div className="flex gap-2">
                  <h2 className="text-xl font-semibold">{projeto.title}</h2>
                  <div className="flex">
                    {projeto.info.map((info, infoIndex) => (
                      <div
                        key={infoIndex}
                        className="hover:text-secondary cursor-pointer group flex justify-center p-2"
                      >
                        {info.icons}
                        <span className="absolute opacity-0 group-hover:opacity-100 text-xs group-hover:-translate-y-5 duration-500">
                          {info.tooltips}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-textlight/30 text-xs">
                  {projeto.info[0].description}
                </p>

                <div className="flex gap-10 p-2">
                  <button
                    className="cursor-pointer hover:text-secondary flex items-center underline "
                  >
                    <p>Ver mais</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
