import cardComponents from "../card";
import Subscription from "./Subscription";
import React from "react";

// {
//   id: "1",
//   img: "double.png",
//   user: "Double User",
//   price: "$199",
//   storage: "9000 GB Storage",
//   grantedUser: "2 Granted User",
//   sendUpto: "Send Upto 6 GB",
// },

function createCards(subscribe) {
  return (
    <Subscription
      key={subscribe.id}
      img={subscribe.img}
      user={subscribe.user}
      price={subscribe.price}
      storage={subscribe.storage}
      grantedUser={subscribe.grantedUser}
      sendUpto={subscribe.sendUpto}
      btn={subscribe.btn}
    />
  );
}

function Cards() {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] grid md:grid-cols-3 gap-8">
        {cardComponents.map(createCards)}
      </div>
    </div>
  );
}
export default Cards;
