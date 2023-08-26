import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 text-white  mx-auto max-w-[1240px] p-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase ">
        React.
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Company</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={"30"} /> : <AiOutlineMenu size={"30"} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[50%] h-full border-r bg-[#000300] border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]  "
        }
      >
        <h1 className="w-full m-4 pt-4 text-3xl font-bold text-[#00df9a] uppercase">
          React.
        </h1>
        <ul className="p-4 uppercase cursor-pointer">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">Contact</li>
          <li className="p-4 border-b border-b-gray-600">Resources</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4">Company</li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
