import React, { useEffect, useState } from "react";
import UpcomingEventsComponent from "../UpcomingEventsComponent";
import TwoLabelHeader from "../Utils/TwoLabelHeader";
import data from "../../data/raw/events.json";
import { sortAndSeparateEvents } from "../../data/utils/EventsSorted";

const HomeUpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const sortedEvents = sortAndSeparateEvents(data.events);
    setUpcomingEvents(sortedEvents.upcomingEvents);
  
  }, [])
  

  return (
    <div
      className="container my-5"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TwoLabelHeader first={"Upcoming"} second={"Events"} />

      <div className="row">
        {upcomingEvents.map((event) => (
          <div className="col-md-6">
            <UpcomingEventsComponent event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeUpcomingEvents;
