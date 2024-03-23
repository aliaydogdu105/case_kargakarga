"use client";
import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";

const SideBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const [liOpen1, setLiOpen1] = useState(false);
  const [liOpen2, setLiOpen2] = useState(false);
  const [liOpen3, setLiOpen3] = useState(false);
  const [liOpen4, setLiOpen4] = useState(true);

  return (
    <div className=" flex">
      <div className=" flex justify-between items-center flex-col left-0 w-16 bg-[#363f72] h-screen">
        <div className=" pt-5">
          <ul className="flex justify-center items-center flex-col list-none lg:ml-auto gap-3 text-2xl text-[#667085] ">
            <li
              className=" hover:bg-[#5e668f] p-3 rounded-lg"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiBell />
            </li>
            <li
              className=" hover:bg-[#5e668f] p-3 rounded-lg"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiBell />
            </li>
            <li
              className=" hover:bg-[#5e668f] p-3 rounded-lg"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiBell />
            </li>
            <li
              className=" hover:bg-[#5e668f] p-3 rounded-lg"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiBell />
            </li>
          </ul>
        </div>
        <div className=" flex justify-center items-center flex-col">
          <div>
            <ul className="flex justify-center items-center flex-col  list-none lg:ml-auto gap-3 text-2xl text-[#667085] ">
              <li className=" hover:bg-[#5e668f] p-3 rounded-lg">
                <FiBell />
              </li>
              <li className=" hover:bg-[#5e668f] p-3 rounded-lg">
                <FiBell />
              </li>
              <li className=" hover:bg-[#5e668f] p-3 rounded-lg">
                <FiBell />
              </li>
              <li className=" hover:bg-[#5e668f] p-3 rounded-lg">
                <FiBell />
              </li>
            </ul>
          </div>
          <div className=" w-10 h-10 my-5 rounded-full bg bg-yellow-500"></div>
        </div>
      </div>
      <div
        className={
          "w-64 flex-col justify-between h-screen border-l-2 border-gray-100" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <div>
          <h3 className=" font-bold mt-6 ml-2">Projeler</h3>
          <ul className=" flex flex-col justify-center ml-2">
            <li className=" w-11/12" onClick={() => setLiOpen1(!liOpen1)}>
              <div className="flex items-center justify-between hover:bg-[#f3f6fd] p-2 rounded-md">
                <div className=" flex items-center gap-2">
                  <GoDotFill className=" text-red-500" />
                  <h3>Proje İsim 1</h3>
                </div>
                <IoIosArrowDown className=" text-[#667085]" />
              </div>
              <div
                className={
                  " flex-row-reverse " + (liOpen1 ? " flex" : " hidden")
                }
              >
                <ul className="flex flex-col gap-4 w-4/5">
                  <li className=" flex justify-between items-center ">
                    <header>Overview</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb] ">
                      10
                    </div>
                  </li>
                  <li className=" flex justify-between items-center ">
                    <header>Notifications</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb]">
                      10
                    </div>
                  </li>
                  <li className=" flex justify-between items-center ">
                    <header>Analytics</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb]">
                      10
                    </div>
                  </li>
                  <li className=" flex justify-between items-center ">
                    <header>Reports</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb]">
                      10
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className=" w-11/12" onClick={() => setLiOpen2(!liOpen2)}>
              <div className="flex items-center justify-between hover:bg-[#f3f6fd] p-2 rounded-md">
                <div className=" flex items-center gap-2">
                  <GoDotFill className=" text-blue-500" />
                  <h3>Proje İsim 2</h3>
                </div>
                <IoIosArrowDown className=" text-[#667085]" />
              </div>
              <div
                className={
                  " flex-row-reverse " + (liOpen2 ? " flex" : " hidden")
                }
              >
                <ul className="flex flex-col gap-4 w-4/5">
                  <li className=" flex justify-between items-center ">
                    <header>Overview</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb] ">
                      10
                    </div>
                  </li>
                  <li className=" flex justify-between items-center ">
                    <header>Notifications</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb]">
                      10
                    </div>
                  </li>
                  <li className=" flex justify-between items-center ">
                    <header>Analytics</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb]">
                      10
                    </div>
                  </li>
                  <li className=" flex justify-between items-center ">
                    <header>Reports</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb]">
                      10
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className=" w-11/12" onClick={() => setLiOpen3(!liOpen3)}>
              <div className="flex items-center justify-between hover:bg-[#f3f6fd] p-2 rounded-md">
                <div className=" flex items-center gap-2">
                  <GoDotFill className=" text-orange-500" />
                  <h3>Proje İsim 3</h3>
                </div>
                <IoIosArrowDown className=" text-[#667085]" />
              </div>
              <div
                className={
                  " flex-row-reverse " + (liOpen3 ? " flex" : " hidden")
                }
              >
                <ul className="flex flex-col gap-4 w-4/5">
                  <li className=" flex justify-between items-center ">
                    <header>Overview</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb] ">
                      10
                    </div>
                  </li>
                  <li className=" flex justify-between items-center ">
                    <header>Notifications</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb]">
                      10
                    </div>
                  </li>
                  <li className=" flex justify-between items-center ">
                    <header>Analytics</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb]">
                      10
                    </div>
                  </li>
                  <li className=" flex justify-between items-center ">
                    <header>Reports</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb]">
                      10
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className=" w-11/12" onClick={() => setLiOpen4(!liOpen4)}>
              <div className="flex items-center justify-between hover:bg-[#f3f6fd] p-2 rounded-md">
                <div className=" flex items-center gap-2">
                  <GoDotFill className=" text-blue-700" />
                  <h3>Proje İsim 4</h3>
                </div>
                <IoIosArrowDown className=" text-[#667085]" />
              </div>
              <div
                className={
                  " flex-row-reverse " + (liOpen4 ? " flex" : " hidden")
                }
              >
                <ul className="flex flex-col gap-4 w-4/5">
                  <li className=" flex justify-between items-center ">
                    <header>Overview</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb] ">
                      10
                    </div>
                  </li>
                  <li className=" flex justify-between items-center ">
                    <header>Notifications</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb]">
                      10
                    </div>
                  </li>
                  <li className=" flex justify-between items-center ">
                    <header>Analytics</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb]">
                      10
                    </div>
                  </li>
                  <li className=" flex justify-between items-center ">
                    <header>Reports</header>
                    <div className=" flex justify-center items-center w-8 h-6 border border-[#eaecf0] rounded-2xl bg-[#f9fafb]">
                      10
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className=" flex items-center ml-2 mt-6 gap-2">
            <FiBarChart2 className=" text-[#667085] text-2xl" />
            <h5 className=" text-[#98a2b3] text-md ">Proje Oluştur</h5>
          </div>
        </div>

        <div className="mb-4 ml-3 w-5/6">
          <div className=" flex items-center justify-between">
            <h3 className=" font-extrabold">Olivia Rhye</h3>
            <FaRegCircle />
          </div>
          <div className=" text-sm font-light">olivia@untitledui.com</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
