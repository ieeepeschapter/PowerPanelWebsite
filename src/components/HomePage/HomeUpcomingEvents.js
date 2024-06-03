import React from "react";
import UpcomingEventsComponent from "../UpcomingEventsComponent";
import TwoLabelHeader from "../Utils/TwoLabelHeader";

const HomeUpcomingEvents = () => {
  const upcomingEvents = [1, 2];
  return (
    <div
      className="container my-5"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TwoLabelHeader first={"Upcoming"} second={"Events"} />

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
