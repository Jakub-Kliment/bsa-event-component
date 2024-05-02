import React from "react";
import Event from "./component";

const events = [
  {
    imageUrl:
      "https://images.pexels.com/photos/1064162/pexels-photo-1064162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Event 1",
    date: "May 10, 2024",
    place: "Lausanne",
    description: "Description of Event 1...",
  },
  {
    imageURL: "",
    title: "Event 2",
    date: "June 15, 2024",
    place: "Lausanne",
    description: "Description of Event 2...",
  },
];

const HomePage = () => {
  return (
    <div className="container w-65 mx-auto py-8">
      <h1 className="text-6xl font-semibold mb-4 text-center">Events</h1>
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index}>
            <Event {...event} />
            {index !== events.length - 1 && <hr className="border-gray-300" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
