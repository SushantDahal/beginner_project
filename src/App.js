import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Analytics from "./Components/Analytics.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import Cards from "./Components/Cards.jsx";

// key: "1",
// img: "single.png",
// user: "Single User",
// price: "$150",
// storage: "500 GB Storage",
// grantedUser: "1 Granted User",
// sendUpto: "Send Upto 2 GB",

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
