import React from "react";
import { FiBell } from "react-icons/fi";

const SideBar = () => {
  return (
    <div className=" flex justify-between items-center flex-col left-0 w-16 bg-[#363f72] h-screen">
      <div className=" pt-5">
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
  );
};

export default SideBar;
