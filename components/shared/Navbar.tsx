"use client";
import { NavLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  return (
    <nav className="w-full absolute top-0 left-0">
      <div className="wrapper flex-between py-6 w-full">
        <h2 className="text-2xl text-blue-1 font-semibold">BUILDORA</h2>
        <div className="hidden lg:flex">
          {NavLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={cn("mr-12", { "mr-0": index === NavLinks.length - 1 })}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          className={`block lg:hidden z-50 icon-menu ${isOpenMenu && "open"}`}
          onClick={handleClick}
        >
          <div className="bar bar--1"></div>
          <div className="bar bar--2"></div>
          <div className="bar bar--3"></div>
        </div>
        <div
          className={cn(
            "absolute top-0 right-0  bg-[#18a7b9] rounded-bl-[200px] flex items-center justify-end duration-300 overflow-hidden",
            {
              "w-[250px] h-[400px] lg:w-[350px]": isOpenMenu,  
              "w-0 h-0": !isOpenMenu 
            }
          )}
        >
          <div className="flex flex-col text-white text-lg mr-[20px] md:mr-[40px] lg:mr-[80px]">
            {NavLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className={cn("mb-4", {
                  "mb-0": index === NavLinks.length - 1,
                })}
                onClick={handleClick}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
