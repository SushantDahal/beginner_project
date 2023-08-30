import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Analytics from "./Components/Analytics.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import Cards from "./Components/Cards.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
