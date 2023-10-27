import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login_User } from "./apiCall";

const LoginTab = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginDet, setLoginDet] = React.useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLoginDet({ ...loginDet, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login_User(loginDet,navigate,dispatch)
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="flex flex-col md:px-14 mb-9">
        <div className="flex flex-col my-4 md:px-5 space-y-3">
          <label htmlFor="login-Email" className="px-2 font-semibold text-lg">
            Enter E-mail
          </label>
          <input
            type="email"
            name="email"
            id="login-Email"
            value={loginDet.email}
            onChange={handleChange}
            placeholder="Enter your E-mail..."
            className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col my-4 md:px-5 space-y-3">
          <label htmlFor="login-Password" className="px-2 font-semibold text-lg">
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            id="login-Password"
            value={loginDet.password}
            onChange={handleChange}
            placeholder="Enter your Password..."
            className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
            required
          />
        </div>
        <div className="my-4 md:px-5">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-auto block w-full"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginTab;
