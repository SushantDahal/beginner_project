import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] h-screen w-full mt-[-90px] mx-auto text-center flex justify-center flex-col">
        <p className="text-[#00df9a] font-bold p-2 uppercase md:text-3xl sm:text-2xl text-xl">
          Grow with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:pt-6 sm:pt-6">
          Grow With Data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold sm:py-4 capitalize">
            fast,flexible financing for{" "}
            <span className="text-[#00df9a] ">
              <Typewriter
                words={["BTB", "BTC", "SAAS"]}
                loop={""}
                cursor
                cursorStyle="|"
                cursorColor="#00df9a"
                typeSpeed={90}
                backSpped={90}
              />
            </span>
          </p>
        </div>
        <p className="text-gray-600 md:text-2xl sm:xl pt-4 capitalize">
          monitor your data analytics to increase revenue <br />
          for BTC, SAAS and BTB Paltforms
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
