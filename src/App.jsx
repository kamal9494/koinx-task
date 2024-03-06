import { useState, useEffect } from "react";
import "./App.css";
import CoinDeatils from "./CoinDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BreadCrumbs from "./components/BreadCrumbs";
import {Routes, Route} from "react-router-dom";
import { useData } from "./contexts/CoinData";

function App() {
  const { isDataLoaded } = useData();

  return (
    <div className="bg-[#eff2f5]">
      <Navbar />
      <BreadCrumbs />
      <Routes>
        <Route path="/:token" element={<CoinDeatils />}></Route>
      </Routes>
      <div className={`hidden lg:block w-full`}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
