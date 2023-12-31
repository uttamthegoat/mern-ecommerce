import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup_User, verify_Otp, generate_Otp } from "./apiCall";

const SignupTab = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signupDet, setSignupDet] = React.useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    phoneNumber: "",
  });
  const [otp, setOtp] = React.useState("");
  const [verified, setVerifired] = React.useState(false);

  const generateOtp = () => generate_Otp(signupDet.email, dispatch);

  const verifyOtp = () => verify_Otp(otp, setVerifired, dispatch);

  const handleSignupChange = (e) => {
    setSignupDet({ ...signupDet, [e.target.name]: e.target.value });
  };
  const handlephnoChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    setSignupDet({ ...signupDet, [name]: sanitizedValue });
  };

  const handleOtpChange = (e) => {
    const { value } = e.target;
    const sanitizedValue = value.replace(/[^0-9]/g, "").slice(0, 6);
    setOtp(sanitizedValue);
  };

  const handlesignup = (e) => {
    e.preventDefault();
    signup_User(signupDet, navigate, dispatch);
    setSignupDet({
      name: "",
      email: "",
      password: "",
      gender: "",
      phoneNumber: "",
    });
  };

  return (
    <div>
      <form onSubmit={handlesignup} className="flex flex-col md:px-14 mb-9">
        {/* Name */}
        <div className="flex flex-col my-4 md:px-5 space-y-3">
          <label htmlFor="signupName" className="px-2 font-semibold text-lg">
            Enter Name
          </label>
          <input
            type="text"
            name="name"
            id="signupName"
            value={signupDet.name}
            onChange={handleSignupChange}
            placeholder="Enter your Name"
            className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col my-4 md:px-5 space-y-3">
          <label htmlFor="signupEmail" className="px-2 font-semibold text-lg">
            Enter E-mail
          </label>
          <input
            type="email"
            name="email"
            id="signupEmail"
            value={signupDet.email}
            onChange={handleSignupChange}
            placeholder="Enter your E-mail..."
            className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col my-4 md:px-5 space-y-3">
          <label
            htmlFor="signupPassword "
            className="px-2 font-semibold text-lg"
          >
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            id="signupPassword"
            value={signupDet.password}
            onChange={handleSignupChange}
            placeholder="Enter your Password..."
            className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col my-4 md:px-5 space-y-3">
          <label htmlFor="signupGender " className="px-2 font-semibold text-lg">
            Enter Gender
          </label>
          <input
            type="text"
            name="gender"
            id="signupGender"
            value={signupDet.gender}
            onChange={handleSignupChange}
            placeholder="Enter your gender..."
            className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col my-4 md:px-5 space-y-3">
          <label
            htmlFor="signupPhoneNumber"
            className="px-2 font-semibold text-lg"
          >
            Enter Phone Numer
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="signupPhoneNumber"
            value={signupDet.phoneNumber}
            onChange={handlephnoChange}
            placeholder="Enter your Phone number "
            className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
            required
          />
        </div>
        {/* generateOtp */}
        <div className="my-4 md:px-5">
          <button
            onClick={generateOtp}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-auto block w-full"
          >
            Generate Otp
          </button>

          <div className="flex flex-col my-4 md:px-1 space-y-3">
            <label htmlFor="NewOtp" className="px-2 font-semibold text-lg">
              Enter Otp Number
            </label>
            <input
              type="text"
              name="otpnumber"
              id="NewOtp"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter Recieved Otp"
              className="px-2 border-2 border-gray-500 outline-blue-300 h-10 rounded-md"
              required
            />
          </div>
        </div>
        <div className="my-4 md:px-5">
          <button
            onClick={verifyOtp}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-auto block w-full"
          >
            Verify OTP
          </button>
        </div>
        -
        <div className="my-4 md:px-5">
          <button
            disabled={!verified}
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
