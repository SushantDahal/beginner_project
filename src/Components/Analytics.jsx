import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="bg-white w-ful py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop img" />
        <div className="flex flex-col justify-center p-2">
          <p className="text-[#00df9a] text-xl mt-5">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="text-black md:text-4xl sm:text-3xl text-2xl pt-3 pb-1  ">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-black font-sans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
            quasi officiis. Voluptates fugiat, exercitationem distinctio, eos,
            aliquam eaque error repellendus doloribus earum aut vitae ipsum
            porro beatae incidunt sint amet!.
          </p>
          <button className="bg-black w-[200px] text-[#00df9a] my-6 font-medium rounded-md py-3  mx-auto md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
export default Analytics;
