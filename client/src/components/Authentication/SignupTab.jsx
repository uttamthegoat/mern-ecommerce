import React from "react";

const SignupTab = () => {
  const handlesignup = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handlesignup} className="flex flex-col md:px-14 mb-9">
        <div className="flex flex-col my-4 md:px-5 space-y-3">
          <label htmlFor="Name" className="px-2 font-semibold text-lg">
            Enter Name
          </label>
          <input
            type="text"
            name="text"
            id="signupname"
            value=""
            placeholder="Enter your Name"
            className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
          />
        </div>
        <div className="flex flex-col my-4 md:px-5 space-y-3">
          <label htmlFor="loginEmail" className="px-2 font-semibold text-lg">
            Enter E-mail
          </label>
          <input
            type="email"
            name="email"
            id="loginEmail"
            value=""
            placeholder="Enter your E-mail..."
            className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
          />
        </div>
        <div className="flex flex-col my-4 md:px-5 space-y-3">
          <label htmlFor="Password " className="px-2 font-semibold text-lg">
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            id="loginPassword"
            value=""
            placeholder="Enter your Password..."
            className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
          />
        </div>
        <div className="flex flex-col my-4 md:px-5 space-y-3">
          <label
            htmlFor="Enter your Gender "
            className="px-2 font-semibold text-lg"
          >
            Enter Gender
          </label>
          <input
            type="text"
            name="gender"
            id="gender"
            value=""
            placeholder="Enter your gender..."
            className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
          />
        </div>
        <div className="flex flex-col my-4 md:px-5 space-y-3">
          <label
            htmlFor="Enter your phoneno. "
            className="px-2 font-semibold text-lg"
          >
            Enter Phone Numer
          </label>
          <input
            type="number"
            name="number"
            id="phoneno"
            value=""
            placeholder="Enter your Phone number "
            className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
          />
        </div>
        <div className="my-4 md:px-5">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-auto block w-full"
          >
            Generate Otp 
          </button>
          
          <div className="flex flex-col my-4 md:px-1 space-y-3">
            <label
              htmlFor="Enter OTP number "
              className="px-2 font-semibold text-lg"
            >
              Enter Otp Number
            </label>
            <input
              type="text"
              name="otpnumber"
              id="NewOtp"
              value=""
              placeholder="Enter Recieved Otp"
              className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
            />
          </div>
        </div>
        <div className="my-4 md:px-5">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-auto block w-full"
          >
            OTP verify
          </button>
        </div>

        <div className="my-4 md:px-5">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-auto block w-full"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignupTab;
