import React from "react";

const HomeIntro = () => {
  return (
    <div
      className="card container my-4"
      style={{
        background: "linear-gradient(to right, #f7faf8, #fafafa)",
      }}
    >
      <div className="row px-2 py-4">
        <div className="col-md-4">
          <img src="./assets/logo2.jpg" />
        </div>

        <div
          className="col-md-8 my-3"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>IEEE Nanotechnology Council Student Chapter</h3>
          <h4>Indian Institute of Technology Patna</h4>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
