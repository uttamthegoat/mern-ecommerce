import React from "react";
import styles from "./styles/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faUser,
  faCartPlus,
  faBagShopping,
  faBookmark,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { defaultImage } from "../../assets/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectSidebar } from "../../features/sidebar/sidebarSlice";
import { hideSidebar } from "../../features/sidebar/sidebarSlice";
import { useNavigate } from "react-router-dom";
import { logout_User } from "../Authentication/apiCall";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { open } = useSelector(selectSidebar);
  const closeSidebar = () => {
    dispatch(hideSidebar());
  };
  const handleLogout = () => {
    logout_User(navigate, dispatch);
  };
  return (
    <div
      className={`w-60 md:w-72 h-full fixed top-0 right-0 bg-green-400 z-[100] rounded-s-xl py-2 ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="px-2 flex justify-end mb-4">
        <button
          type="button"
          className="w-10 h-10 bg-gray-400 rounded-lg"
          onClick={closeSidebar}
        >
          <FontAwesomeIcon icon={faXmark} className="text-2xl" />
        </button>
      </div>
      <div>
        {/* profile icon*/}
        <div className="flex items-center gap-3 px-2 mb-3">
          <div className="w-[48px] border-2 border-gray-600 rounded-full p-1">
            <LazyLoadImage
              src={defaultImage}
              alt="userImage"
              className="w-full h-auto rounded-full"
              title="username"
            />
          </div>
          <p>uttamthegoat</p>
        </div>
        <hr className="w-11/12 mx-auto" style={{ border: "1px solid gray" }} />
        <div className="flex items-center gap-3 ps-6 my-3">
          <FontAwesomeIcon icon={faUser} />
          <Link to="/profile">Your Profile</Link>
        </div>
        <hr className="w-11/12 mx-auto" style={{ border: "1px solid gray" }} />
      </div>
      <section className="ps-6 space-y-4">
        <div className="flex items-center gap-3 mt-4">
          <FontAwesomeIcon icon={faCartPlus} />
          <Link to="/cart">My Cart</Link>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faBagShopping} />
          <Link to="/orders">My Orders</Link>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faBookmark} />
          <Link to="/wishlist">My Wishlist</Link>
        </div>
      </section>
      <hr
        className="w-11/12 mx-auto mt-4"
        style={{ border: "1px solid gray" }}
      />
      <div className="flex items-center gap-3 ps-6 my-3">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
