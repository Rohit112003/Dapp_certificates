import React from "react";
import Card from "./Card";

const PanServices = () => {
  return (
    <div className="">
      <div className="w-full h-10  bg-[#00df9a] flex align-middle justify-center">
        <div className="text-white font-bold text-2xl"></div>
      </div>
      <div className="w-full h-10  bg-white flex pt-10 font-bold align-middle justify-center">
        <h1 className="text-4xl">Portal Services</h1>
      </div>

      <Card />
    </div>
  );
};

export default PanServices;
