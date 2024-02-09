import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-80px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 uppercase">
          Blockchain-backed Birth Certificates: Unparalleled Security
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          A New Era of Trust
        </h1>
        <div className="flex justify-center items-center">
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 py-2"
            strings={["INTEGRITY", "INNOVATION", "TRANSPARENCY"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Empowering trust through blockchain: Securing identities with
          transparent, immutable certificates
        </p>
        <Link to="/checkWork">
          <button className="relative inline-flex items-center justify-center p-0.5 m-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-xl bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              How this Work?
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
