import React from "react";
import "./App.css";
import ScrollToTop from "./components/Static/ScrollToTop";
import Navbar from "./components/Static/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import allRoutes from "./utils/routes";
import Footer from "./components/Footer/Footer";

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
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
