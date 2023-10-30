import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { defaultImage } from "../../assets/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { update_User_Details } from "../Authentication/apiCall";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState({});
  const [localImage, setLocalImage] = React.useState(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [profileImage, setProfileImage] = React.useState("");

  React.useEffect(() => {
    // console.log(user);
  }, []);

  const handleUserForm = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", tempUser.name);
    formData.append("gender", tempUser.gender);
    formData.append("address", tempUser.address);
    formData.append("phoneNumber", tempUser.phoneNumber);
    update_User_Details(formData, navigate, dispatch);
    setIsEditing(false);
  };

  const handleImageClick = () => {
    if (isEditing) {
      document.getElementById("profilePictureInput").click();
    }
  };

  const handleEditClick = () => {
    setTempUser({ ...user });
    setIsEditing(true);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(e.target.files[0]);
    if (e.target.files) {
      setLocalImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleTempUserChange = (e) => {
    setTempUser({ ...tempUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white my-12 md:my-15 rounded text-center px-2">
      <div className="pb-5 mb-5 border-b-2 border-gray-400">
        <h1 className="text-4xl font-bold text-black">My Profile</h1>
      </div>
      {/* image */}
      <div className="relative inline-block" onClick={handleImageClick}>
        {isEditing ? (
          <div className="relative w-52 md:w-72">
            <LazyLoadImage
              src={localImage ? localImage : defaultImage}
              alt="Profile"
              className="w-full h-auto mx-auto cursor-pointer"
            />
            <div className="absolute right-8 md:right-16 bottom-0 p-2 rounded-full cursor-pointer w-10 h-10 bg-gray-800">
              <FontAwesomeIcon icon={faPencilAlt} className="text-white" />
            </div>
          </div>
        ) : (
          <div className={`relative w-52 md:w-72`}>
            {user.userImage ? (
              <LazyLoadImage
                src={user.userImage}
                alt="Profile"
                className="w-full h-auto mx-auto rounded-full cursor-pointer"
              />
            ) : (
              <div className="border-2 h-36 flex justify-center items-center">
                <h1 className="text-2xl font-bold">No profile image!</h1>
              </div>
            )}
          </div>
        )}
      </div>

      {/* details */}
      <div className="mt-4 md:mx-16 text-center">
        {isEditing ? (
          <form onSubmit={handleUserForm}>
            <div className="mt-2">
              <label
                className="text-gray-600 font-semibold"
                htmlFor="user-Name"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={tempUser.name}
                id="user-Name"
                onChange={handleTempUserChange}
                className="w-64 border rounded p-2 shadow-md mx-auto text-center"
                placeholder="Enter your name..."
                required
              />
            </div>
            <div className="mt-2">
              <label
                className="text-gray-600 font-semibold"
                htmlFor="user-Gender"
              >
                Gender:
              </label>
              <input
                type="text"
                name="gender"
                value={tempUser.gender}
                id="user-Gender"
                onChange={handleTempUserChange}
                className="w-64 border rounded p-2 shadow-md mx-auto text-center capitalize"
                placeholder="Enter your gender..."
                required
              />
            </div>
            <div className="mt-2">
              <label
                className="text-gray-600 font-semibold"
                htmlFor="user-address"
              >
                Address:
              </label>
              <input
                type="text"
                name="address"
                value={tempUser.address}
                id="user-address"
                onChange={handleTempUserChange}
                className="w-64 border rounded p-2 shadow-md mx-auto text-center"
                placeholder="Enter your address..."
              />
            </div>
            <div className="mt-2">
              <label
                className="text-gray-600 font-semibold"
                htmlFor="user-mail"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={tempUser.email}
                id="user-mail"
                onChange={handleTempUserChange}
                className="w-64 border rounded p-2 shadow-md mx-auto text-center"
                readOnly={true}
              />
            </div>
            <div className="mt-2">
              <label className="text-gray-600 font-semibold" htmlFor="ph-no">
                Phone Number:
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={tempUser.phoneNumber}
                id="ph-no"
                onChange={handleTempUserChange}
                className="w-64 border rounded p-2 shadow-md mx-auto text-center"
                placeholder="Enter your phone number..."
              />
            </div>
            <input
              type="file"
              name="file"
              id="profilePictureInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleProfilePictureChange}
            />
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white p-2 rounded shadow-md"
            >
              Save Changes
            </button>
          </form>
        ) : (
          <div>
            <div className="md:grid md:grid-rows-3 md:grid-flow-col md:gap-x-40 md:gap-y-10">
              <div className="mt-2 md:grid md:grid-cols-3 md:gap-x-4 md:h-fit">
                <p className="text-gray-600 font-semibold">Name:</p>
                <p className="border p-2 rounded-md md:col-span-2 h-10">
                  {user.name}
                </p>
              </div>
              <div className="mt-2 md:grid md:grid-cols-3 md:gap-x-4 md:h-fit">
                <p className="text-gray-600 font-semibold">Gender:</p>
                <p className="border p-2 rounded-md md:col-span-2 h-10 capitalize">
                  {user.gender}
                </p>
              </div>
              <div className="mt-2 md:grid md:grid-cols-3 md:gap-x-4 md:h-fit">
                <p className="text-gray-600 font-semibold">Address:</p>
                <p className="border p-2 rounded-md md:col-span-2 h-10">
                  {user.address || "Enter your address..."}
                </p>
              </div>
              <div className="mt-2 md:grid md:grid-cols-3 md:gap-x-4 md:h-fit">
                <p className="text-gray-600 font-semibold">Email:</p>
                <p className="border p-2 rounded-md md:col-span-2 h-10">
                  {user.email}
                </p>
              </div>
              <div className="mt-2 md:grid md:grid-cols-3 md:gap-x-4 md:h-fit">
                <p className="text-gray-600 font-semibold">Phone Number:</p>
                <p className="border p-2 rounded-md md:col-span-2 h-10">
                  {user.phoneNumber}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={handleEditClick}
                className="mt-4 bg-violet-800 text-white p-2 rounded shadow-md"
              >
                Change Details
              </button>
              <br />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
