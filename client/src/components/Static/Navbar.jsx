import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import {
  Nav_Links,
  navBrand,
  defaultImage,
  signinLogo,
} from "../../assets/constants";

const Navbar = () => {
  const navigate = useNavigate();
  let [open, setOpen] = React.useState(false);
  const searchForm = (e) => e.preventDefault();
  const toSign = () => navigate("/auth");
  return (
    <nav
      className={`${styles.Navbar_Glass} shadow-xl w-full static top-0 left-0`}
    >
      <div className="sm:flex items-center justify-between py-4 sm:px-4 px-7 sm:z-0 z-[2]">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800"
          title="BuyBox"
        >
          <span className="text-3xl text-indigo-600 mr-1">
            <LazyLoadImage
              src={navBrand}
              alt="Brand_logo"
              className="w-14 rounded-md"
            />
          </span>
          <Link to="/" className="Style_name text-[2rem] py-2">
            BuyBox
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </div>
        <ul
          className={`${
            styles.Navbar_Navlinks
          } shadow-md sm:shadow-none md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-0 z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 md:space-x-6 ${
            open ? "top-[6rem] opacity-100" : "hidden opacity-0 md:opacity-100"
          }`}
        >
          <li className="mt-5 md:mt-0">
            <form onSubmit={searchForm}>
              <input
                type="text"
                name="search"
                id="search-box"
                placeholder="Search..."
                value=""
                className="border-2 border-gray-300 outline-2 outline-gray-500 px-3 py-1 w-10/12 md:w-[400px] rounded-sm"
              />
            </form>
          </li>
          <li className="mt-5 md:mt-0">
            <div className="flex" onClick={toSign}>
              <p className="font-bold ">Sign in</p>
              <LazyLoadImage
                src={signinLogo}
                alt="signin"
                className="h-[20px] w-auto"
              />
            </div>
            {/* <div className="w-[48px] border-2 border-gray-600 rounded-full p-1">
              <LazyLoadImage
                src={defaultImage}
                alt="userImage"
                className="w-full h-auto rounded-full"
                title="username"
              />
            </div> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
