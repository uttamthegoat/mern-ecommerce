import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { defaultImage } from "../../assets/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

function UserProfile() {
  const [user, setUser] = useState({
    name: "John Doe",
    dateOfBirth: "1990-01-01",
    address: "123 Main St, City, Country",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
    gender: "Male",
    profilePicture: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState({ ...user });

  const handleImageClick = () => {
    if (isEditing) {
      document.getElementById("profilePictureInput").click();
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUser(tempUser);
    setIsEditing(false);
  };

  const handleVisitAdminPage = () => {
    // Implement the navigation to the admin page here.
    // For example, you can use React Router to navigate.
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setTempUser({ ...tempUser, profilePicture: file });
  };

  return (
    <div className="bg-white my-12 md:my-20 rounded text-center px-2">
      <div className="relative inline-block" onClick={handleImageClick}>
        <div className="relative w-52 md:w-72">
          <LazyLoadImage
            src={
              tempUser.profilePicture
                ? URL.createObjectURL(tempUser.profilePicture)
                : defaultImage
            }
            alt="Profile"
            className="w-full h-auto mx-auto rounded-full cursor-pointer"
          />
          {isEditing && (
            <div className="absolute right-8 md:right-16 bottom-0 p-2 rounded-full cursor-pointer w-10 h-10 bg-gray-800">
              <FontAwesomeIcon icon={faPencilAlt} className="text-white" />
            </div>
          )}
        </div>
      </div>

      {/* details */}
      <div className="mt-4 md:mx-16 text-center">
        {isEditing ? (
          <form>
            <div className="mt-2">
              <label
                className="text-gray-600 font-semibold"
                htmlFor="user-Name"
              >
                Name:
              </label>
              <input
                type="text"
                value={tempUser.name}
                id="user-Name"
                onChange={(e) =>
                  setTempUser({ ...tempUser, name: e.target.value })
                }
                className="w-64 border rounded p-2 shadow-md mx-auto text-center"
                placeholder="Enter your name..."
              />
            </div>
            <div className="mt-2">
              <label className="text-gray-600 font-semibold" htmlFor="dob">
                Date of Birth:
              </label>
              <input
                type="date"
                value={tempUser.dateOfBirth}
                id="dob"
                onChange={(e) =>
                  setTempUser({ ...tempUser, dateOfBirth: e.target.value })
                }
                className="w-64 border rounded p-2 shadow-md mx-auto text-center"
                placeholder="Enter your DOB..."
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
                value={tempUser.address}
                id="user-address"
                onChange={(e) =>
                  setTempUser({ ...tempUser, address: e.target.value })
                }
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
                value={tempUser.email}
                id="user-mail"
                onChange={(e) =>
                  setTempUser({ ...tempUser, email: e.target.value })
                }
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
                value={tempUser.phoneNumber}
                id="ph-no"
                onChange={(e) =>
                  setTempUser({ ...tempUser, phoneNumber: e.target.value })
                }
                className="w-64 border rounded p-2 shadow-md mx-auto text-center"
                placeholder="Enter your phone number..."
              />
            </div>
            <input
              type="file"
              id="profilePictureInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleProfilePictureChange}
            />
            <button
              onClick={handleSaveClick}
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
                <p className="border p-2 rounded-md md:col-span-2">
                  {user.name}
                </p>
              </div>
              <div className="mt-2 md:grid md:grid-cols-3 md:gap-x-4 md:h-fit">
                <p className="text-gray-600 font-semibold">Date of Birth:</p>
                <p className="border p-2 rounded-md md:col-span-2">
                  {user.dateOfBirth}
                </p>
              </div>
              <div className="mt-2 md:grid md:grid-cols-3 md:gap-x-4 md:h-fit">
                <p className="text-gray-600 font-semibold">Address:</p>
                <p className="border p-2 rounded-md md:col-span-2">
                  {user.address}
                </p>
              </div>
              <div className="mt-2 md:grid md:grid-cols-3 md:gap-x-4 md:h-fit">
                <p className="text-gray-600 font-semibold">Email:</p>
                <p className="border p-2 rounded-md md:col-span-2">
                  {user.email}
                </p>
              </div>
              <div className="mt-2 md:grid md:grid-cols-3 md:gap-x-4 md:h-fit">
                <p className="text-gray-600 font-semibold">Phone Number:</p>
                <p className="border p-2 rounded-md md:col-span-2">
                  {user.phoneNumber}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={handleEditClick}
                className="mt-4 bg-violet-800 text-white p-2 rounded shadow-md"
              >
                Edit
              </button>
              <br />
              <button
                onClick={handleVisitAdminPage}
                className="mt-4 bg-violet-500 text-white p-2 rounded shadow-md"
              >
                Visit Admin Page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
