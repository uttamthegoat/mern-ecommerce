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
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { defaultImage } from "../../assets/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectSidebar } from "../../features/sidebar/sidebarSlice";
import { hideSidebar } from "../../features/sidebar/sidebarSlice";
import { useNavigate } from "react-router-dom";
import { logout_User } from "../Authentication/apiCall";
import { selectUser } from "../../features/user/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { open } = useSelector(selectSidebar);
  const user = useSelector(selectUser);
  const closeSidebar = () => {
    dispatch(hideSidebar());
  };
  const handleLogout = () => {
    logout_User(navigate, dispatch);
  };
  return (
    <div
      className={`w-60 md:w-72 h-full fixed top-0 right-0 bg-gray-400 z-[100] rounded-s-xl py-2 ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="px-2 flex justify-end mb-1 md:mb-4">
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
        <div className="flex items-center gap-3 px-2 mb-3 cursor-pointer">
          <div className="w-[48px] border-2 border-gray-600 rounded-full p-1">
            <LazyLoadImage
              src={user.userImage || defaultImage}
              alt="userImage"
              className="w-full h-auto rounded-full"
              title={user.name}
            />
          </div>
          <p className="font-semibold text-xl">{user.name}</p>
        </div>
        <hr className={`w-11/12 mx-auto ${styles.Sidebar_Divider_border}`} />
        <div className="flex items-center gap-3 ps-6 my-3 hover:text-white">
          <FontAwesomeIcon icon={faUser} />
          <Link to="/profile" className="font-semibold">
            Your Profile
          </Link>
        </div>
        <hr className={`w-11/12 mx-auto ${styles.Sidebar_Divider_border}`} />
      </div>
      <section className="ps-6 space-y-4">
        <div className="flex items-center gap-3 mt-4 hover:text-white">
          <FontAwesomeIcon icon={faCartPlus} />
          <Link to="/cart" className="font-semibold">
            My Cart
          </Link>
        </div>
        <div className="flex items-center gap-3 hover:text-white">
          <FontAwesomeIcon icon={faBagShopping} />
          <Link to="/orders" className="font-semibold">
            My Orders
          </Link>
        </div>
        <div className="flex items-center gap-3 hover:text-white">
          <FontAwesomeIcon icon={faBookmark} />
          <Link to="/wishlist" className="font-semibold">
            My Wishlist
          </Link>
        </div>
      </section>
      <hr className={`w-11/12 mx-auto mt-4 ${styles.Sidebar_Divider_border}`} />
      <div className="flex items-center gap-3 ps-6 my-3 hover:text-white">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <button type="button" onClick={handleLogout} className="font-semibold">
          Logout
        </button>
      </div>
      {/* admin */}
      {user.isAdmin && (
        <div className="my-3">
          <hr
            className={`w-11/12 mx-auto mt-4 ${styles.Sidebar_Divider_border}`}
          />
          <div className="flex items-center gap-3 ps-6 py-5 text-xl font-semibold">
            <FontAwesomeIcon icon={faLock} />
            <p className="Admin-panel">Admin Panel</p>
          </div>
          <div className="ps-6 space-y-4">
            <section className="hover:text-white">
              <Link to="/admin" className="font-semibold">
                Products
              </Link>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
