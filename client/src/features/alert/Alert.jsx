import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideAlert, selectAlert } from "../../features/alert/alertSlice";

const Alert = () => {
  const dispatch = useDispatch();
  const { show, type, message } = useSelector(selectAlert);
  const timeout = 3000;
  const [width, setWidth] = useState(100);

  useEffect(() => {
    let timeoutId;
    let interval;
    if (show) {
      timeoutId = setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);

      interval = setInterval(() => {
        setWidth((prevWidth) => prevWidth - 5);
      }, timeout / 20);
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(interval);
      setWidth(100);
    };
  }, [show, dispatch, timeout]);

  const containerClasses = {
    backgroundColor:
      type === "success" ? "#00c87f" : type === "error" ? "#f30000" : "#3B82F6",
    color: type === "success" ? "#000" : type === "error" ? "#fff" : "#fff",
    position: "fixed",
    bottom: "40px",
    left: "40px",
    transition: "all 0.1s",
    display: show ? "block" : "none",
  };

  const spanStyles = {
    width: `${width}%`,
    display: show ? "block" : "none",
    height: "3px",
    backgroundColor: "#fff",
    marginTop: "0.5rem",
    transition: "width 0.4s",
  };

  return (
    <div style={containerClasses} className="z-[2222222]">
      <div className="px-3 py-4 w-fit font-semibold">{message}</div>
      <div className="">
        <span
          className="block h-1 bg-white mt-2 absolute bottom-0"
          style={spanStyles}
        />
      </div>
    </div>
  );
};

export default Alert;
