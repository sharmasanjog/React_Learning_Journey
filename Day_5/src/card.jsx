import React from "react";

function Card({ username, address, imgSrc }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-64 text-center hover:shadow-xl transition">
      <img
        src={imgSrc}
        alt={username}
        className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-500"
      />
      <h2 className="text-xl font-bold mt-4 text-black">{username}</h2>
      <p className="text-gray-600">Address: {address}</p>
      <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Visit Profile
      </button>
    </div>
  );
}

export default Card;
