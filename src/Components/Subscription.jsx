import React from "react";

function Subscription(props) {
  return (
    <div className="w-full shadow-xl flex flex-col py-4 my-4  rounded-lg">
      <img className="w-20 mx-auto mt-[-3rem]" src={props.img} alt="/" />
      <h2 className="text-center text-2xl py-8 font-bold">{props.user}</h2>
      <p className="text-center text-4xl font-bold">{props.price}</p>
      <div className="text-center font-medium">
        <p className="border-b py-2 mx-8 mt-8">{props.storage}</p>
        <p className="border-b py-2 mx-8">{props.grantedUser}</p>
        <p className="border-b py-2 mx-8">{props.sendUpto}</p>
      </div>
      <button className="bg-black w-[140px] mx-auto text-white rounded my-4 py-2">
        {props.btn}
      </button>
    </div>
  );
}
export default Subscription;
