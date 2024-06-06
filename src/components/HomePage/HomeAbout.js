import React from "react";
import TwoLabelHeader from "../Utils/TwoLabelHeader";

const HomeAbout = ({ chapterDetails }) => {
  return (
    <div
      className="container my-5"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TwoLabelHeader first={"About"} second={"Us"} />

      <p className="my-2">{chapterDetails.aboutUs}</p>
    </div>
  );
};

export default HomeAbout;
