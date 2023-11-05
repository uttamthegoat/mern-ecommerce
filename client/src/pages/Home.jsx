import React from "react";
import HomePage from "../components/Home/Home";
const Home = () => {
  return (
    <div className="py-5 px-4">
      <HomePage key={1} category={"Electronics"} />
      <HomePage key={2} category={"Clothing"} />
      <HomePage key={3} category={"Fashion"} />
      <HomePage key={4} category={"Bags"} />
    </div>
  );
};

export default Home;
