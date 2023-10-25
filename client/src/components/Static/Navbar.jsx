import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import { Nav_Links } from "../../assets/constants";
import brand_Img from '../../assets/brand_Img.png';

const Navbar = () => {
  let [open, setOpen] = React.useState(false);
  return (
    <nav
      className={`${styles.Navbar_Glass} shadow-xl w-full static top-0 left-0`}
    >
      <div className="sm:flex items-center justify-between py-4 sm:px-4 px-7 sm:z-0 z-[2]">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1">
            <LazyLoadImage
              src={brand_Img}
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
          } shadow-md sm:shadow-none md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-0 z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ${
            open ? "top-[6rem] opacity-100" : "hidden opacity-0 md:opacity-100"
          }`}
        >
          {Nav_Links.map((link) => {
            return (
              <Link
                key={link.id}
                onClick={() => setOpen(false)}
                to={link.to}
                className="block md:ml-5 text-xl md:my-0 my-7"
              >
                {link.icon}
                <span className="ms-2 text-black font-semibold hover:text-red-600 duration-500">
                  {link.name}
                </span>
              </Link>
            );
          })}
          <li>
            <button
              type="button"
              // onClick={handleLogout}
              className="px-3 py-2 bg-black hover:bg-red-500 text-white hover:text-black border-1 border-red-600 font-semibold text-lg md:ms-2 rounded-lg"
            >
              <i className="fa-solid fa-right-from-bracket"></i>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
