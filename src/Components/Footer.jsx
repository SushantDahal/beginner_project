import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGitSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="max-w-[1240px] py-16 mx-auto px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div className=" col-span-1">
          <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase ">
            React.
          </h1>
          <p className="py-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            omnis nobis repellendus obcaecati dolorem aperiam inventore mollitia
            esse laborum laudantium.
          </p>
          <div className="flex justify-between my-6 md:w-[75%]">
            <FaFacebookSquare size={35} />
            <FaGitSquare size={35} />
            <FaTwitterSquare size={35} />
            <FaInstagram size={35} />
            <FaDribbbleSquare size={35} />
          </div>
        </div>
        <div className="flex justify-between lg:col-span-2 mt-6">
          <div>
            <h5 className="font-medium text-[#00df9a] text-xl  ">Solution</h5>
            <ul>
              <li className="pb-2 pt-5 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Inslight</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-xl text-[#00df9a] ">Support</h5>
            <ul>
              <li className="pb-2 pt-5 text-sm">Price</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API status</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-xl text-[#00df9a] ">Company</h5>
            <ul>
              <li className="pb-2 pt-5 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-xl text-[#00df9a] ">Legal</h5>
            <ul>
              <li className="pb-2 pt-5 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Term</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
