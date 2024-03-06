import React from "react";
import { RiInformationFill } from "react-icons/ri";

const Fundamentals = () => {
  return (
    <>
      <div id="fundamentals" className="flex items-center gap-2 pt-7 mb-5">
        <h2 className="text-xl text-gray-500 font-semibold">Fundamentals</h2>
        <RiInformationFill className="text-gray-500 cursor-pointer" />
      </div>

      <div className="flex flex-col lg:flex-row md:gap-20 text-sm md:text-md font-medium">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between border-b-2 border-gray-200 py-3">
            <p className="text-gray-500">Bitcoin Price</p>
            <p>$16,815.46</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-3">
            <p className="text-gray-500">24h Low / 24h High</p>
            <p>$16,382.07 / $16,874.12</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-3">
            <p className="text-gray-500">7d Low / 7d High</p>
            <p>$16,382.07 / $16,874.12</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-3">
            <p className="text-gray-500">Trading Volume</p>
            <p>$23,249,202,782</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-3">
            <p className="text-gray-500">Market Cap Rank</p>
            <p>#1</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between border-b-2 border-gray-200 py-3">
            <p className="text-gray-500">Market Cap</p>
            <p>$323,507,290,047</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-3">
            <p className="text-gray-500">Market Cap Dominance</p>
            <p>38.343%</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-3">
            <p className="text-gray-500">Volume / Market Cap</p>
            <p>0.0718</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-1">
            <p className="text-gray-500">All-Time High</p>
            <div className="flex items-end flex-col">
              <p>
                $69,044.77 <span className="text-red-500">-75.6%</span>
              </p>
              <small className="text-xs">Nov 10, 2021 (about 1 year)</small>
            </div>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-1">
            <p className="text-gray-500 h-fit">All-Time Low</p>
            <div className="flex items-end flex-col">
              <p>
                $67.81 <span className="text-green-400">24729.1%</span>
              </p>
              <small className="text-xs">Jul 06, 2023 (over 9 years)</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fundamentals;
