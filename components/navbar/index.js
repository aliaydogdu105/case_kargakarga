"use client";
import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { SiWindicss } from "react-icons/si";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 border-b-2 border-gray-100">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-3">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl text-[#145389] font-extrabold leading-relaxed inline-block py-2 whitespace-nowrap"
              href="#"
            >
              kargakarga
            </a>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <HiOutlineBars3 />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex justify-center items-center flex-col lg:flex-row list-none lg:ml-auto gap-8 text-xl text-gray-500">
              <li className=" hover:bg-gray-100 p-2 rounded-lg">
                <FiBell />
              </li>
              <li className=" hover:bg-gray-100 p-2 rounded-lg">
                <FiBell />
              </li>
              <li className=" text-4xl text-[#145389]">
                <SiWindicss />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
