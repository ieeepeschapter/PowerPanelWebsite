import React from "react";
import UpcomingEventsComponent from "../UpcomingEventsComponent";

const HomeUpcomingEvents = () => {
  const upcomingEvents = [1, 2];
  return (
    <div
      className="container my-5"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3>Upcoming Events</h3>

      <div className="row">
        {upcomingEvents.map((item) => (
          <div className="col-md-6">
            <UpcomingEventsComponent />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeUpcomingEvents;
