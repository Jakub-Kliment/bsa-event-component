import React from "react";
import Event from "./component";

const events = [
  {
    imageUrl:
      "https://www.gelato.network/brand-assets/Gelato_Logos/Mark/Gelato%20brand%20mark.png",
    date: "Friday 9:00 am - 9:00 am PDT",
    title: "Event 1",
    month: "MAY",
    day: "12",
    place: "Lausanne",
    description: "Description of Event 1...",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1064162/pexels-photo-1064162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "Friday 9:00 am - 9:00 am PDT",
    title: "Event 2",
    month: "JUN",
    day: "15",
    place: "Lausanne",
    description: "Description of Event 2...",
  },
  {
    imageUrl:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=400,height=400/event-covers/8j/2130dbe7-26c4-4ce1-9ee1-d5c7d7996f5a",
    date: "Friday 9:00 am - 9:00 am PDT",
    title: "Event 3",
    month: "DEC",
    day: "08",
    place: "Lausanne",
    description: "Description of Event 3...",
  },
  {
    imageUrl:
      "data:image/jpeg;base64,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",
    date: "Friday 9:00 am - 9:00 am PDT",
    title: "Event 12",
    month: "SEP",
    day: "31",
    place: "Lausanne",
    description: "Description of Event 12...",
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
