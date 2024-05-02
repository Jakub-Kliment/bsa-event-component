import React from "react";

const Event = ({ imageUrl, title, date, place, description }) => {
  return (
    <div className="flex mb-8 mx-20 my-10">
      <img
        src={imageUrl}
        alt={title}
        className="mr-4 rounded-lg object-fill w-100 h-40"
      />{" "}
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">Date: {date}</p>
        <p className="text-gray-600 mb-2">Place: {place}</p>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default Event;
