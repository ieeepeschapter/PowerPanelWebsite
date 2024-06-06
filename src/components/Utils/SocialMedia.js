import React from "react";

const SocialMedia = ({ socialMedias }) => {
  return (
    <div>
      <div className="social-icons">
        {socialMedias.map((socialMedia) => (
          <a href={socialMedia.url} target="blank">
            <i className={`fab fa-${socialMedia.website}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
