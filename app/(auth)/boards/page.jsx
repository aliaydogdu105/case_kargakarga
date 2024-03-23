import React from "react";
import { GoPlus } from "react-icons/go";
import { PiDotsThreeCircleLight } from "react-icons/pi";
import { BiCalendar } from "react-icons/bi";
import { GoDiamond } from "react-icons/go";
import { TiFlag } from "react-icons/ti";
import { FaImages } from "react-icons/fa";

const Boards = () => {
  return (
    <div className=" flex flex-col bg-[#f2f5fc] w-full h-screen">
      <div className=" flex flex-col p-9 gap-4 w-fit">
        <h2 className=" text-xl font-bold text-[#145389] mb-2">
          Frontend Case
        </h2>
        <nav>
          <ul className=" flex justify-around items-center border p-2 bg-white rounded-lg w-96 h-10 text-sm">
            <li className=" h-10 border-r-2 pr-2 grid content-center">
              Boards
            </li>
            <li className=" h-10 border-r-2 pr-2 grid content-center">List</li>
            <li className=" h-10 border-r-2 pr-2 grid content-center">Other</li>
            <li className=" h-10 border-r-2 pr-2 grid content-center">Other</li>
            <li className=" h-10 border-r-2 pr-2 grid content-center">Other</li>
            <li className=" h-10 border-r-2 pr-2 grid content-center">Other</li>
            <li className=" h-10 grid content-center">Other</li>
          </ul>
        </nav>
      </div>
      <div className=" ml-20 flex gap-5">
        {/* Boards */}
        <div className=" bg-white w-80 rounded-lg">
          <div className=" flex justify-between p-5 border-b-2">
            <div className=" flex justify-center items-center gap-3">
              <h2>OPEN</h2>
              <div className=" w-7 h-7 rounded-full text-center text-[#175cd2] bg-[#f3f6fd] border-[#9cc2e0]">
                3
              </div>
            </div>
            <div className=" flex justify-center items-center gap-4">
              <GoPlus />
              <PiDotsThreeCircleLight />
            </div>
          </div>
          <div className=" flex flex-col gap-2 p-3 border border-gray-100 rounded-lg m-1">
            <div className=" text-orange-500">Operasyon Birimi</div>
            <div className=" flex justify-between">
              <div>
                Bu örnek görevdir. Örnek görevin içeriğine dair açıklama
                detail'da bulunmaktadır.
              </div>
              <div>
                <FaImages />
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <BiCalendar />{" "}
              <div className="text-sm">05.02.2024 - 10.02.2024</div>
            </div>
            <div className=" flex items-center gap-4">
              <GoDiamond />
              <div> Milestone Name</div>
              <TiFlag />
            </div>
          </div>
          <div className=" flex flex-col gap-2 p-3 border border-gray-100 rounded-lg m-1">
            <div className=" text-blue-500">Teknik Birimi</div>
            <div className=" flex justify-between">
              <div>ikinci bir görev.</div>
              <div>
                <FaImages />
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <BiCalendar />{" "}
              <div className="text-sm">05.02.2024 - 10.02.2024</div>
            </div>
            <div className=" flex items-center gap-4">
              <GoDiamond />
              <div> Milestone Name</div>
              <TiFlag />
            </div>
          </div>
        </div>
        <div className=" bg-white w-80 rounded-lg">
          <div className=" flex justify-between p-5 border-b-2">
            <div className=" flex justify-center items-center gap-3">
              <h2>OPEN</h2>
              <div className=" w-7 h-7 rounded-full text-center text-[#175cd2] bg-[#f3f6fd] border-[#9cc2e0]">
                3
              </div>
            </div>
            <div className=" flex justify-center items-center gap-4">
              <GoPlus />
              <PiDotsThreeCircleLight />
            </div>
          </div>
          <div className=" flex flex-col gap-2 p-3 border border-gray-100 rounded-lg m-1">
            <div className=" text-green-500">Test Onay Birimi</div>
            <div className=" flex justify-between">
              <div>
                Bu örnek görevdir. Örnek görevin içeriğine dair açıklama
                detail'da bulunmaktadır.
              </div>
              <div>
                <FaImages />
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <BiCalendar />{" "}
              <div className="text-sm">05.02.2024 - 10.02.2024</div>
            </div>
            <div className=" flex items-center gap-4">
              <GoDiamond />
              <div> Milestone Name</div>
              <TiFlag />
            </div>
          </div>
          <div className=" flex flex-col gap-2 p-3 border border-gray-100 rounded-lg m-1">
            <div className=" text-blue-500">Teknik Birimi</div>
            <div className=" flex justify-between">
              <div>ikinci bir görev.</div>
              <div>
                <FaImages />
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <BiCalendar />{" "}
              <div className="text-sm">05.02.2024 - 10.02.2024</div>
            </div>
            <div className=" flex items-center gap-4">
              <GoDiamond />
              <div> Milestone Name</div>
              <TiFlag />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boards;
