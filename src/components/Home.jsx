import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const samples = ["bitcoin", "ethereum", "ripple"];
  return (
    <div className="h-screen flex justify-center mt-[100px]">
      <div>
        <h2 className="text-3xl font-medium text-center py-10">Samples</h2>
        <div className="flex text-center flex-col gap-5">
          {samples.map((sample, index) => (
            <NavLink key={index} className="font-bold p-3 rounded-lg bg-white" to={`/${sample}`}>/{sample}</NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
