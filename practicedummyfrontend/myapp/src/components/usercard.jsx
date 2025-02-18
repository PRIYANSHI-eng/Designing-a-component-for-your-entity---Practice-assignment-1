import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "Priyanshi Chittora";
  const email = "priyanshi@example.com";
  const phone = "+91 98765 43210";
  const address = "Jaipur, Rajasthan, India";

  return (
    <div className="max-w-sm rounded-lg shadow-md p-6 bg-white border border-gray-200 text-center">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
      />
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-600 mt-1">{email}</p>
      <p className="text-gray-600 mt-1">{phone}</p>
      <p className="text-gray-600 mt-1">{address}</p>
    </div>
  );
};

export default Usercard;
