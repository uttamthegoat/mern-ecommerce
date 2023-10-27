import React from "react";
import "./App.css";
import ScrollToTop from "./components/Static/ScrollToTop";
import Navbar from "./components/Static/Navbar";
import Footer from "./components/Static/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import allRoutes from "./utils/routes";
import Alert from "./features/alert/Alert";

const App = () => {
  return (
    <div className="App flex flex-col">
      <Router>
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <ScrollToTop />
          <Alert />
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
        </React.Suspense>
      </Router>
    </div>
  );
};

export default App;
