import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    dateOfBirth: '1990-01-01',
    address: '123 Main St, City, Country',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
    gender: 'Male',
    profilePicture: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState({ ...user });

  const handleImageClick = () => {
    if (isEditing) {
      document.getElementById('profilePictureInput').click();
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
    <div className="bg-white p-4 rounded shadow text-center" style={{ marginLeft: '-10px' }}>
      <div className="relative inline-block" onClick={handleImageClick}>
        <div className="relative">
          <img
            src={tempUser.profilePicture ? URL.createObjectURL(tempUser.profilePicture) : "profile-placeholder.jpg"}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full cursor-pointer"
          />
          {isEditing && (
            <div className="absolute right-0 bottom-0 p-2 bg-white rounded-full cursor-pointer">
              <FontAwesomeIcon icon={faPencilAlt} />
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold"></h2>
        {isEditing ? (
          <form>
            <div className="mt-2">
              <label className="text-gray-600">Name:</label>
              <input
                type="text"
                value={tempUser.name}
                onChange={(e) => setTempUser({ ...tempUser, name: e.target.value })}
                className="w-64 border rounded p-2 shadow-md mx-auto text-center"
              />
            </div>
            <div className="mt-2">
              <label className="text-gray-600">Date of Birth:</label>
              <input
                type="date"
                value={tempUser.dateOfBirth}
                onChange={(e) => setTempUser({ ...tempUser, dateOfBirth: e.target.value })}
                className="w-64 border rounded p-2 shadow-md mx-auto text-center"
              />
            </div>
            <div className="mt-2">
              <label className="text-gray-600">Address:</label>
              <input
                type="text"
                value={tempUser.address}
                onChange={(e) => setTempUser({ ...tempUser, address: e.target.value })}
                className="w-64 border rounded p-2 shadow-md mx-auto text-center"
              />
            </div>
            <div className="mt-2">
              <label className="text-gray-600">Email:</label>
              <input
                type="email"
                value={tempUser.email}
                onChange={(e) => setTempUser({ ...tempUser, email: e.target.value })}
                className="w-64 border rounded p-2 shadow-md mx-auto text-center"
              />
            </div>
            <div className="mt-2">
              <label className="text-gray-600">Phone Number:</label>
              <input
                type="text"
                value={tempUser.phoneNumber}
                onChange={(e) => setTempUser({ ...tempUser, phoneNumber: e.target.value })}
                className="w-64 border rounded p-2 shadow-md mx-auto text-center"
              />
            </div>
            <input
              type="file"
              id="profilePictureInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleProfilePictureChange}
            />
            <button onClick={handleSaveClick} className="mt-4 bg-purple-400 text-white p-2 rounded shadow-md">
              Save Changes
            </button>
          </form>
        ) : (
          <div>
            <div className="mt-2">
              <p className="text-gray-600">Name:</p>
              <p className="border p-2 rounded-md">{user.name}</p>
            </div>
            <div className="mt-2">
              <p className="text-gray-600">Date of Birth:</p>
              <p className="border p-2 rounded-md">{user.dateOfBirth}</p>
            </div>
            <div className="mt-2">
              <p className="text-gray-600">Address:</p>
              <p className="border p-2 rounded-md">{user.address}</p>
            </div>
            <div className="mt-2">
              <p className="text-gray-600">Email:</p>
              <p className="border p-2 rounded-md">{user.email}</p>
            </div>
            <div className="mt-2">
              <p className="text-gray-600">Phone Number:</p>
              <p className="border p-2 rounded-md">{user.phoneNumber}</p>
            </div>
            <div>
              <button onClick={handleEditClick} className="mt-4 bg-purple-500 text-white p-2 rounded shadow-md">
                Edit
              </button>
              <br />
              <button onClick={handleVisitAdminPage} className="mt-4 bg-purple-400 text-white p-2 rounded shadow-md">
                Visit Admin Page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
