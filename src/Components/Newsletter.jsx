import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 py-4">
          <h1 className="capitalize md:text-4xl sm:text-3xl text-xl font py-2">
            want tips and tricks to optimize your flow?
          </h1>
          <p className="capitalize font-sans py-2">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col items-center sm:flex-row">
            <input
              className="p-3 flex w-full rounded-md  text-black lg"
              type="text"
              placeholder="Enter your Email"
            />
            <button className="w-[200px] text-black bg-[#00df9a] ml-2 rounded-md my-6  px-6 py-3">
              Notify Me.
            </button>
          </div>
          <p className="font-sans text-[15px]">
            We care about the protection about your data.Read our <br />{" "}
            <span className="text-[#00df9a] underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
