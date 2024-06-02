import React, { useState } from "react";
import TeamComponent from "./TeamComponent";

const Team = () => {
  const teamLeader = [1];

  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  const headerStyle = {
    fontWeight: 700,
    fontSize: "45px",
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
        <h2 class="mt-4 mb-0" style={headerStyle}>
          Team Leader
        </h2>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {teamLeader.map((item) => (
            <div key={item} class="col-sm-6 col-lg-4 col-xl-3">
              <TeamComponent />
            </div>
          ))}
        </div>
        <h2 class="mt-5 mb-0" style={headerStyle}>
          {" "}
          Core Team
        </h2>

        <div class="row">
          {list.map((item) => (
            <div key={item} class="col-sm-6 col-lg-4 col-xl-3">
              <TeamComponent />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
