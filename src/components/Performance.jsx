import React from "react";
import { RiInformationFill } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import Fundamentals from "./constants/Fundamentals";

const Performance = () => {
  return (
    <div className="m-5 bg-white p-5 rounded-md min-w-[300px]">
      <h2 className="text-2xl font-semibold py-5">Performance</h2>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 justify-between items-center">
          <div className="flex flex-col items-start w-fit gap-1">
            <p className="text-xs w-[80px] md:text-md">Today's Low</p>
            <span className="text-sm md:text-md font-medium">46,930.22</span>
          </div>
          <div className="w-[70%] flex gap-2 items-center relative rounded-full h-1.5">
            <div className="bg-gradient-to-r from-red-500 from-10% via-orange-500 via-30% to-green-300 to-90% h-1.5 rounded-full w-[100%]"></div>
            <div className="flex items-center flex-col absolute left-[70%] top-0.5">
              <IoMdArrowDropup size={23} />
              <span className="text-xs">$48,637.83</span>
            </div>
          </div>
          <div className="w-fit flex flex-col items-start gap-1">
            <p className="text-xs w-[80px] md:text-md">Today's High</p>
            <span className="text-sm md:text-md font-medium">49,343.83</span>
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center">
          <div className="w-fit flex flex-col gap-1">
            <p className="text-xs md:text-md w-[80px]">52W Low</p>
            <span className="text-sm md:text-md font-medium">16,930.22</span>
          </div>
          <div className="w-[70%] flex gap-2 items-center rounded-full h-1.5">
            <div className="bg-gradient-to-r from-red-500 from-10% via-orange-500 via-30% to-green-300 to-90% h-1.5 rounded-full w-[100%]"></div>
          </div>
          <div className="w-fit flex flex-col gap-1">
            <p className="text-xs md:text-md w-[80px]">52W High</p>
            <span className="text-sm md:text-md font-medium">49,743.83</span>
          </div>
        </div>
      </div>

      <Fundamentals />
    </div>
  );
};

export default Performance;
