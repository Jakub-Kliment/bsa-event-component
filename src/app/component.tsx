import React from "react";
import Image from "next/image";

const Event = ({ imageUrl, date, title, month, day, place, description }) => {
  return (
    <a href="#">
      <div className="flex mb-8 mx-20 my-10 bg-slate-50 rounded-lg w-4/5 h-56 transition-transform duration-300 hover:-translate-y-2">
        <div className="mr-10 flex items-center justify-center w-1/2 h-full">
          <div className="relative w-full h-full rounded-l-lg overflow-hidden">
            <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="flex-1">
          <p className="font-bold font-sheriff mb-3 mt-5">{date}</p>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-2">{place}</p>
          <p className="text-gray-800">{description}</p>
        </div>
        <div className="flex flex-col items-center mt-5 w-1/6">
          <p className="text-orange-200 text-l font-bold">{month}</p>
          <p className="text-orange-400 text-5xl font-bold mb-1">{day}</p>
        </div>
      </div>
    </a>
  );
};

export default Event;
