import React, { useState } from "react";

const FooterQuickLinkItem = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const footerDetailsTextStyle = {
    fontFamily: '"Josefin Sans", sans-serif',
    fontSize: "0.9rem",
    color: "rgb(187,187,187)",
    marginLeft: isHovered ? "10px" : "0px",
    transition: "0.3s"
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p className="mb-2" style={footerDetailsTextStyle}>
        {label}
      </p>
    </div>
  );
};

export default FooterQuickLinkItem;
