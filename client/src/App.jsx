import React from "react";
import "./App.css";
import ScrollToTop from "./components/Static/ScrollToTop";
import Navbar from "./components/Static/Navbar";
import Footer from "./components/Static/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import allRoutes from "./utils/routes";

const App = () => {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          {allRoutes.map((route) => {
            return (
              <Route
                key={route.id}
                exact
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
        <Footer />
      </div>
      
    </Router>
  );
};

export default App;
