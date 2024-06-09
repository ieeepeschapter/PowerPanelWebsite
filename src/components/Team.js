import React, { useEffect, useState } from "react";
import TeamComponent from "./TeamComponent";
import TwoLabelHeader from "./Utils/TwoLabelHeader";

import members from "../data/raw/members.json";

const Team = () => {

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
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          {members.teamLeader.map((member) => (
            <div key={member} className="col-sm-6 col-lg-4 col-xl-3">
              <TeamComponent member={member} />
            </div>
          ))}
        </div>

        <h2 className="mt-5 mb-0" style={headerStyle}>
          <TwoLabelHeader first={"Core"} second={"Team"} />
        </h2>

        <div
          className="row"
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          {members.coreTeam.map((member) => (
            <div key={member} className="col-sm-6 col-lg-4 col-xl-3">
              <TeamComponent member={member} />
            </div>
          ))}
        </div>

        <h2 className="mt-5 mb-0" style={headerStyle}>
          <TwoLabelHeader first={"Student"} second={"Member"} />
        </h2>

        <div
          className="row"
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          {members.studentMember.map((member) => (
            <div key={member} className="col-sm-6 col-lg-4 col-xl-3">
              <TeamComponent member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
