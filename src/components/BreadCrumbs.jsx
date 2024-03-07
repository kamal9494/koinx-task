import React, { useEffect } from "react";
import makeApiCall from "../api";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { useParams, Link, useLocation } from "react-router-dom";
import { useData } from "../contexts/CoinData";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const coinname = pathname.split("/").filter((x) => x);
  const { cyptoData } = useData();

  // let
  return (
    <div className="bg-[#eff2f5] px-5 h-[40px] pt-1 text-gray-500 flex gap-2 items-center">
      <Link to="/">Cryptocurrencies </Link>

      {coinname &&
        coinname.map((name, index) => {
          const coin = name.charAt(0).toUpperCase() + name.slice(1);
          return (
            <div key={index} className="flex items-center gap-2">
              <HiMiniChevronDoubleRight />
              <div className="text-gray-900 font-medium">{coin}</div>
            </div>
          );
        })}
    </div>
  );
};

export default BreadCrumbs;
