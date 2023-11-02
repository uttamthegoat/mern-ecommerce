import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import { navBrand, defaultImage } from "../../assets/constants";
import { showSidebar } from "../../features/sidebar/sidebarSlice";
import { get_User_Details } from "../Authentication/apiCall";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { formSubmit } from "../../features/search/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    get_User_Details(navigate, dispatch);
    setSearchQuery(sessionStorage.getItem("searchQuery"));
  }, []);

  const searchForm = (e) => {
    e.preventDefault();
    sessionStorage.setItem("searchQuery", searchQuery);
    navigate("/search");
    dispatch(formSubmit());
  };

  const openSidebar = () => dispatch(showSidebar());

  return (
    <nav className={`${styles.Navbar_Glass} shadow-xl w-full top-0 left-0`}>
      <div className="sm:flex items-center justify-between py-2 sm:px-4 px-4 sm:z-0">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 justify-between"
          title="BuyBox"
        >
          <div className="flex">
            <span className="text-3xl text-indigo-600 mr-1">
              <LazyLoadImage
                src={navBrand}
                alt="Brand_logo"
                className="w-14 rounded-md"
              />
            </span>
            <Link to="/" className="Style_name text-[2rem] pb-2 pt-3 md:block">
              BuyBox
            </Link>
          </div>
          {localStorage.getItem("authenticate") && (
            <div
              className="w-[48px] border-2 border-gray-600 rounded-full p-1 md:hidden"
              onClick={openSidebar}
            >
              <LazyLoadImage
                src={user.userImage || defaultImage}
                alt="userImage"
                className="w-full h-auto rounded-full"
                title={user.name}
              />
            </div>
          )}
        </div>
        {localStorage.getItem("authenticate") && (
          <hr className="md:hidden" style={{ border: "1px solid gray" }} />
        )}
        {localStorage.getItem("authenticate") && (
          <ul
            className={`${styles.Navbar_Navlinks} sm:shadow-none md:flex md:items-center md:pb-0 w-full md:w-auto md:pl-0`}
          >
            <li className="my-3 md:my-0">
              <form onSubmit={searchForm}>
                <input
                  type="text"
                  name="search"
                  id="search-box"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-2 border-gray-300 outline-2 outline-gray-500 px-3 py-1 w-11/12 md:w-[400px] rounded-sm md:m-0 m-auto block"
                  title="Search"
                />
              </form>
            </li>
            <li
              className="mt-5 md:mt-0 md:ms-3 hidden md:block cursor-pointer"
              onClick={openSidebar}
            >
              <div className="w-[48px] border-2 border-gray-600 rounded-full p-1">
                <LazyLoadImage
                  src={user.userImage || defaultImage}
                  alt="userImage"
                  className="w-full h-auto rounded-full"
                  title={user.name}
                />
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
