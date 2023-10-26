import React from "react";
import LoginTab from "../components/Authentication/LoginTab";
import SignupTab from "../components/Authentication/SignupTab";

const Authenticate = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mt-12 mx-2 sm:mx-12 md:w-9/12 md:mx-auto lg:w-[650px]">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ${
                  openTab === 1
                    ? "text-white bg-red-600"
                    : "text-red-600 bg-white"
                }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#login_tab"
                role="tablist"
              >
                Sign In
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blue-600"
                    : "text-blue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#register_tab"
                role="tablist"
              >
                Sign Up
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 1 ? "block" : "hidden"}
                  id="register_tab"
                >
                  <LoginTab />
                </div>
                <div
                  className={openTab === 2 ? "block" : "hidden"}
                  id="login_tab"
                >
                  <SignupTab />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authenticate;
