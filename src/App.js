import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Analytics from "./Components/Analytics.jsx";
import Newsletter from "./Components/Newsletter.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Analytics />
      <Newsletter />
    </div>
  );
}

export default App;
