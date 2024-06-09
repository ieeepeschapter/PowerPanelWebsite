import React, { useState } from "react";

const TeamComponent = ({ member }) => {
  const [isHoveredCoreTeam, setIsHoveredCoreTeam] = useState(false);

  const singlePersonStyle = {
    marginTop: "30px",
    padding: "30px",
    backgroundColor: "#f6f9ff",
    borderRadius: "5px",
    boxShadow: "0 0.1rem 1rem rgba(0, 0, 0, 0.4)",
  };
  const singlePersonHoveredStyle = {
    marginTop: "30px",
    padding: "30px",
    background: "linear-gradient(to right, #f5420c, #fd784c)",
    borderRadius: "5px",
    boxShadow: "0 0.1rem 1rem rgba(0, 0, 0, 0.4)",
  };

  const personImageDivStyle = {
    position: "relative",
    marginBottom: "50px",
    borderRadius: "50%",
    border: "4px dashed transparent",
    transition: "padding 0.3s",
    // paddingTop: "10px",
    // paddingBottom: "10px",
    width: "fit-content",
    height: "max-content",
    padding:"10px"

  };

  const personImageHoveredDivStyle = {
    position: "relative",
    marginBottom: "50px",
    borderRadius: "50%",
    border: "dashed white",
    transition: "padding 0.3s",
    // paddingTop: "10px",
    // paddingBottom: "10px",
    width: "fit-content",
    height: "fit-content",
    padding:"10px"
  };

  const personImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    // border: "5px solid white",
    borderRadius: "50%",
    aspectRatio: 1
  };

  const personImageHoveredStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    // border: "5px solid white",
    borderRadius: "50%",
    aspectRatio: 1
  };

  const fullnameStyle = {
    marginBottom: "10px",
    fontSize: "28px",
    fontWeight: 700,
    color: isHoveredCoreTeam ? "#fff" : "#000",
  };

  const specialityStyle = {
    textTransform: "uppercase",
    fontSize: "14px",
    color: isHoveredCoreTeam ? "#fff" : "#016cec",
  };

  const iconStyle = {
    fontSize: "20px",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 50%)",
    display: "inline-block",
    width: "60px",
    height: "60px",
    lineHeight: "60px",
    textAlign: "center",
    background: "linear-gradient(to right, #092fd8, #598ef0)",
    color: "#fff",
    borderRadius: "50%",
    fontSize: "24px",
  };

  const iconHoveredStyle = {
    fontSize: "20px",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 50%)",
    display: "inline-block",
    width: "60px",
    height: "60px",
    lineHeight: "60px",
    textAlign: "center",
    background: "none",
    color: "#fff",
    borderRadius: "50%",
    fontSize: "24px",
    backgroundColor: "#fff",
    color: "#016cec",
  };

  const handleCoreTeamMouseEnter = () => {
    setIsHoveredCoreTeam(true);
  };

  const handleCoreTeamMouseLeave = () => {
    setIsHoveredCoreTeam(false);
  };
  return (
    <a
      onMouseEnter={handleCoreTeamMouseEnter}
      onMouseLeave={handleCoreTeamMouseLeave}
      style={
        isHoveredCoreTeam
          ? { cursor: "pointer", width: "100%" }
          : { cursor: "auto", width: "100%" }
      }
      className="m-0 p-0"
      href={member.linkedin}
      target="blank"
    >
      <div
        className=""
        style={isHoveredCoreTeam ? singlePersonHoveredStyle : singlePersonStyle}
      >
        <div
          className="rowa"
          style={
            isHoveredCoreTeam ? personImageHoveredDivStyle : personImageDivStyle
          }
        >
          <img
            src={`/assets/members/${member.image}`}
            style={
              isHoveredCoreTeam ? personImageHoveredStyle : personImageStyle
            }
            alt=""
            className="col-md-6"
          ></img>
          <span
            className=""
            style={isHoveredCoreTeam ? iconHoveredStyle : iconStyle}
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </span>
        </div>
        <div className="">
          <h3 className="" style={fullnameStyle}>
            {member.name}
          </h3>
          <span className="" style={specialityStyle}>
            {member.title}
          </span>
        </div>
      </div>
    </a>
  );
};

export default TeamComponent;
