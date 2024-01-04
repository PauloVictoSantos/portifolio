"use client";
import { navData } from "../app/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav
      className="flex flex-col fixed items-center h-max w-full top-0 bottom-0 mt-auto gap-y-4  
                 xl:justify-center xl:right-[2%] xl:w-16 xl:h-screen z-50"
    >
      <ul
        className="flexBetween gap-4 w-full bg-white/10 backdrop-blur-3xl px-4 py-3 
                   xl:flex-col xl:flexcenter xl:rounded-full xl:gap-y-8 xl:p-8"
      >
        {navData.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={` ${pathname.includes(link.path) && "text-secondary"} 
                       flexcenter hover:text-secondary p-2 group relative`}
          >
            <div className="bg-white text-black absolute right-16 border rounded p-1 items-center hidden xl:group-hover:flex">
              <div className="text-[12px] font-semibold text-black capitalize leading-none">
                {link.name}
              </div>
              <div className="borber-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2 top-1"></div>
            </div>
            <div>{link.icon}</div>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
