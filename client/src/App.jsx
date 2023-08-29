import React from "react";
import "./App.css";
import ScrollToTop from "./components/Static/ScrollToTop";
import Navbar from "./components/Static/Navbar";

const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
    </div>
  );
};

export default App;
