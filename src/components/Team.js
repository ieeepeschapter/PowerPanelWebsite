import React, { useState } from "react";
import TeamComponent from "./TeamComponent";
import TwoLabelHeader from "./Utils/TwoLabelHeader";

const Team = () => {
  const teamLeader = [1];

  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  const headerStyle = {
    fontWeight: 500,
  };

  return (
    <div>
      <div
        className="container"
        style={{
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className="mt-3 mb-0" style={headerStyle}>
          <TwoLabelHeader first={"Team"} second={"Leader"} />
        </h2>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {teamLeader.map((item) => (
            <div key={item} className="col-sm-6 col-lg-4 col-xl-3">
              <TeamComponent />
            </div>
          ))}
        </div>
        <h2 className="mt-5 mb-0" style={headerStyle}>
        <TwoLabelHeader first={"Core"} second={"Team"} />
        </h2>

        <div className="row">
          {list.map((item) => (
            <div key={item} className="col-sm-6 col-lg-4 col-xl-3">
              <TeamComponent />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
