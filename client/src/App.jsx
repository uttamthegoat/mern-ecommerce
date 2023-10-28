import React from "react";
import "./App.css";
import ScrollToTop from "./components/Static/ScrollToTop";
import Navbar from "./components/Static/Navbar";
import Sidebar from "./components/Static/Sidebar";
import Footer from "./components/Static/Footer";
import Alert from "./features/alert/Alert";
import Redirect from "./pages/Redirect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import allRoutes from "./utils/routes";

const App = () => {
  return (
    <Router>
      <div className="App flex flex-col">
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <ScrollToTop />
          <Navbar />
          <Alert />
          <Sidebar />
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
            <Route exact path="*" element={<Redirect />} />
          </Routes>
          <Footer />
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App;
