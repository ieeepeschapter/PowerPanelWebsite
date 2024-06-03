import React from "react";

const TwoLabelHeader = ({ first, second }) => {
  return (
    <>
      <h2 style={{ fontWeight: "600" }}>
        {first} <span className="span-second">{second}</span>
      </h2>
      <div className="h-line mb-2"></div>
    </>
  );
};

export default TwoLabelHeader;
