import React from "react";
import { useParams } from "react-router-dom";
import OrderInfo from "../components/Orders/Orderinfo";

const Orderinfo = () => {
  const { id } = useParams();
  return (
    <div>
      <OrderInfo id={id} />
    </div>
  );
};

export default Orderinfo;
